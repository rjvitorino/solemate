import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — SoleMate",
  description: "Privacy policy for SoleMate early access waitlist.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-10">
      <Link
        href="/"
        className="mb-8 inline-block text-sm font-semibold text-[rgba(12,15,20,.72)] underline hover:text-brand"
      >
        ← Back to SoleMate
      </Link>
      <h1 className="font-black text-navy text-2xl tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-[rgba(12,15,20,.7)]">Last updated: 16 February 2026</p>
      <div className="prose prose-navy mt-8 space-y-6 text-[15px] font-medium leading-relaxed text-[rgba(12,15,20,.85)]">
        <section>
          <h2 className="font-black text-navy text-lg">1. Data controller</h2>
          <p>
            The data controller is SoleMate. For the purpose of this policy you may contact us at: <a href="mailto:hello@solemate.site">hello@solemate.site</a>.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">2. What data we collect</h2>
          <p>
            For the waitlist we collect: email address; alias (if you provide it); language preference; and consent
            data (that you accepted these terms and our privacy policy, the version accepted, and the time of acceptance).
            We may also store technical data related to consent (e.g. IP address, user agent) for compliance and
            security.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">3. Purpose and legal basis</h2>
          <p>
            We use this data to manage the waitlist and to send you account- and early-access-related emails. The
            legal basis for this processing is your consent.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">4. Retention</h2>
          <p>
            We retain waitlist data until launch and for a reasonable period after (e.g. X months — to be defined
            before launch) unless you request deletion or we are required to retain it for legal reasons.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">5. Data processors</h2>
          <p>
            We use: Supabase (database and hosting) and Resend (email delivery). They process data on our instructions
            and in line with our agreements.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">6. Data location and transfers</h2>
          <p>
            <strong>Supabase</strong> (waitlist database): our project is in the EU (Ireland). Your waitlist data
            is stored there.
          </p>
          <p>
            <strong>Resend</strong> (email delivery): Resend stores customer data in the United States (US). Data
            is encrypted at rest; sensitive collections use row-level encryption. Backups are kept for 30 days
            and replicated for resilience. For transfers from the EU/EEA to the US, Resend’s Data Processing
            Addendum (DPA) includes Standard Contractual Clauses (SCCs) to help ensure an adequate level of
            protection. If you have questions about how we use Resend, contact us at the address below.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">7. Your rights</h2>
          <p>
            You have the right to access, rectify, delete, and port your data, and to object or restrict processing
            where applicable. You may also lodge a complaint with a supervisory authority. To exercise your rights
            or for privacy-related questions, contact us at:{" "}
            <a href="mailto:hello@solemate.site" className="underline hover:text-brand">
              hello@solemate.site
            </a>
            .
          </p>
        </section>
      </div>
      <p className="mt-10 text-sm text-[rgba(12,15,20,.6)]">
        For the terms that apply to the waitlist, see our{" "}
        <Link href="/terms" className="underline hover:text-brand">
          Terms & Conditions
        </Link>
        .
      </p>
    </div>
  );
}
