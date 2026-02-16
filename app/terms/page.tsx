import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — SoleMate",
  description: "Terms and conditions for SoleMate early access waitlist.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-10">
      <Link
        href="/"
        className="mb-8 inline-block text-sm font-semibold text-[rgba(12,15,20,.72)] underline hover:text-brand"
      >
        ← Back to SoleMate
      </Link>
      <h1 className="font-black text-navy text-2xl tracking-tight">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-[rgba(12,15,20,.7)]">Last updated: 16 February 2026</p>
      <div className="prose prose-navy mt-8 space-y-6 text-[15px] font-medium leading-relaxed text-[rgba(12,15,20,.85)]">
        <section>
          <h2 className="font-black text-navy text-lg">1. Early access / waitlist</h2>
          <p>
            SoleMate is currently in early access. By joining the waitlist you are not purchasing anything on this
            website. We use the waitlist to notify you when access opens and to manage your account-related
            communications.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">2. No purchase on the website</h2>
          <p>
            SoleMate does not sell shoes or process payments. This site is for matching and messaging. Any
            coordination of purchases is done by you externally (e.g. with retailers or other users).
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">3. Contact and use of data</h2>
          <p>
            We will only contact you about your account and early access (e.g. when we open access, or to respond to
            your requests). We do not use your data for unrelated marketing without your consent.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">4. Deletion and rights</h2>
          <p>
            You may request deletion of your data at any time by contacting us (see Privacy Policy). We will process
            such requests in line with applicable law.
          </p>
        </section>
        <section>
          <h2 className="font-black text-navy text-lg">5. Liability</h2>
          <p>
            SoleMate is provided &quot;as is&quot;. We are not liable for any arrangements you make with third parties
            or for any indirect or consequential loss. Our liability is limited to the extent permitted by law.
          </p>
        </section>
      </div>
      <p className="mt-10 text-sm text-[rgba(12,15,20,.6)]">
        For data we collect and how we use it, see our{" "}
        <Link href="/privacy" className="underline hover:text-brand">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
