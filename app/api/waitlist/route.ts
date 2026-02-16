import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

/*
 * If the waitlist table lacks consent columns, run in Supabase SQL Editor:
 * docs/waitlist_consent_migration.sql
 * (adds terms_accepted, terms_version, terms_accepted_at, consent_ip, consent_user_agent)
 */

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const resendApiKey = process.env.RESEND_API_KEY;
const RESEND_TEMPLATE_ID = process.env.RESEND_TEMPLATE_ID;

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const TERMS_VERSION = "v1-2026-02-16";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      alias,
      language,
      termsAccepted,
      termsVersion,
    } = body;

    // Validate consent (GDPR)
    if (termsAccepted !== true) {
      return NextResponse.json(
        { error: "You must accept the Terms & Conditions and Privacy Policy to join the waitlist." },
        { status: 400 }
      );
    }
    if (!termsVersion || typeof termsVersion !== "string") {
      return NextResponse.json(
        { error: "Invalid consent version." },
        { status: 400 }
      );
    }

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Duplicate check
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    const consentIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      null;
    const consentUserAgent = request.headers.get("user-agent") || null;

    const insertPayload = {
      email: normalizedEmail,
      alias: alias?.trim() || null,
      language: language || "en",
      terms_accepted: true,
      terms_version: termsVersion,
      terms_accepted_at: new Date().toISOString(),
      consent_ip: consentIp,
      consent_user_agent: consentUserAgent,
    };

    const { data, error } = await supabase
      .from("waitlist")
      .insert(insertPayload)
      .select()
      .single();

    if (error) {
      console.error("[waitlist] Supabase insert error", { error: error.message });
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Send welcome email via Resend template (only if key + template ID set)
    if (resend && data) {
      if (!RESEND_TEMPLATE_ID) {
        console.warn("[waitlist] RESEND_TEMPLATE_ID missing; skipping welcome email");
      } else {
        try {
          await resend.emails.send({
            to: normalizedEmail,
            template: { id: RESEND_TEMPLATE_ID },
          });
          console.info("[waitlist] Welcome email sent", { email: normalizedEmail });
        } catch (emailError) {
          console.error("[waitlist] Resend send error", { email: normalizedEmail, err: emailError });
          // Do not fail the request
        }
      }
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("[waitlist] API error", { err: error });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
