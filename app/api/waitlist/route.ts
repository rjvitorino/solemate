import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const resendApiKey = process.env.RESEND_API_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, alias, language } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check for duplicate email
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

    // Insert into waitlist
    const { data, error } = await supabase
      .from("waitlist")
      .insert({
        email: normalizedEmail,
        alias: alias?.trim() || null,
        language: language || "en",
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Send welcome email if Resend is configured
    if (resend && data) {
      try {
        await resend.emails.send({
          from: "SoleMate <onboarding@resend.dev>", // Update with your verified domain
          to: normalizedEmail,
          subject: "You're on the SoleMate list 👟",
          html: `
            <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #0f172a; font-size: 24px; margin-bottom: 16px;">Welcome to SoleMate!</h1>
              <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">
                Thanks for joining our early access list. We'll notify you as soon as SoleMate is ready for you to start finding your sole mate.
              </p>
              <p style="color: #64748b; font-size: 14px; margin-top: 24px;">
                — The SoleMate team
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        // Log but don't fail the request if email fails
        console.error("Resend error:", emailError);
      }
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
