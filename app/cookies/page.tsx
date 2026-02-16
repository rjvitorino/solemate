import Link from "next/link";

export const metadata = {
  title: "Cookies — SoleMate",
  description: "Information about cookies and similar technologies on SoleMate.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-10">
      <Link
        href="/"
        className="mb-8 inline-block text-sm font-semibold text-[rgba(12,15,20,.72)] underline hover:text-brand"
      >
        ← Back to SoleMate
      </Link>
      <h1 className="font-black text-navy text-2xl tracking-tight">Cookies</h1>
      <p className="mt-2 text-sm text-[rgba(12,15,20,.7)]">Last updated: 16 February 2026</p>
      <div className="prose prose-navy mt-8 space-y-6 text-[15px] font-medium leading-relaxed text-[rgba(12,15,20,.85)]">
        <p>
          We use only essential and functional cookies (and similar technologies) needed to run the site and
          remember your preferences (e.g. language). We do not use advertising or non-essential tracking cookies
          on the waitlist experience.
        </p>
        <p>
          For how we use your data, see our{" "}
          <Link href="/privacy" className="underline hover:text-brand">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
