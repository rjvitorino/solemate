"use client";

import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { type Locale, translations } from "@/lib/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FootprintSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 24" fill="currentColor" aria-hidden>
      <ellipse cx="10" cy="6" rx="3" ry="4" />
      <ellipse cx="10" cy="18" rx="4" ry="5" />
    </svg>
  );
}

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[locale];

  const openModal = useCallback(() => {
    setModalOpen(true);
    setMenuOpen(false);
  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-[rgba(15,23,42,.08)] bg-[rgba(251,246,238,.70)] backdrop-blur-[10px]"
        aria-label="Primary"
      >
        <div className="mx-auto flex min-w-0 max-w-content items-center justify-between px-5 py-3.5 [width:min(1120px,calc(100%-40px))]">
          <a href="#top" className="flex items-center gap-2.5 font-black tracking-tight" aria-label="SoleMate home">
            <span
              className="brand-mark-sheen relative h-[34px] w-[34px] shrink-0 overflow-hidden rounded-[14px] shadow-primary-btn"
              style={{
                background:
                  "radial-gradient(12px 12px at 30% 35%, rgba(255,255,255,.75), transparent 55%), radial-gradient(22px 18px at 70% 70%, rgba(255,255,255,.18), transparent 60%), linear-gradient(135deg, #e56a36, #ffb084)",
              }}
              aria-hidden
            />
            <span className="text-navy">SoleMate</span>
          </a>

          {/* Desktop: nav links */}
          <div className="hidden items-center gap-3.5 text-[rgba(12,15,20,.80)] md:flex">
            <a href="#how" className="rounded-[10px] px-2.5 py-2 text-sm font-semibold hover:bg-[rgba(15,23,42,.06)]">
              {t.nav.howItWorks}
            </a>
            <a href="#meet" className="rounded-[10px] px-2.5 py-2 text-sm font-semibold hover:bg-[rgba(15,23,42,.06)]">
              {t.nav.meetOthers}
            </a>
            <a href="#faq" className="rounded-[10px] px-2.5 py-2 text-sm font-semibold hover:bg-[rgba(15,23,42,.06)]">
              {t.nav.faq}
            </a>
          </div>

          {/* Desktop: language + Get started */}
          <div className="hidden items-center gap-2.5 md:flex">
            <div
              className="inline-flex rounded-[14px] border border-[rgba(15,23,42,.10)] bg-[rgba(15,23,42,.06)] p-0.5"
              role="tablist"
              aria-label="Language"
            >
              {(["en", "pt"] as const).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  role="tab"
                  aria-selected={locale === loc}
                  onClick={() => setLocale(loc)}
                  className={cn(
                    "rounded-[10px] px-3 py-2 text-sm font-extrabold transition-colors",
                    locale === loc
                      ? "bg-white text-navy shadow-nav-btn"
                      : "text-[rgba(12,15,20,.75)] hover:text-navy"
                  )}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(229,106,54,.35)] bg-[linear-gradient(135deg,#e56a36,#ff8a4c)] px-3.5 py-3 text-sm font-extrabold text-white shadow-primary-btn transition-shadow duration-150 hover:shadow-primary-btn-hover"
            >
              {t.nav.getStarted}
            </button>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[rgba(15,23,42,.10)] bg-[rgba(15,23,42,.06)] text-navy transition-colors hover:bg-[rgba(15,23,42,.10)]"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative h-5 w-5" aria-hidden>
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-200",
                    menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 bg-current transition-opacity duration-200",
                    menuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-200",
                    menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={cn(
            "overflow-hidden border-t border-[rgba(15,23,42,.08)] bg-[rgba(251,246,238,.95)] backdrop-blur-[10px] transition-[max-height,opacity] duration-200 ease-out md:hidden",
            menuOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!menuOpen}
        >
          <div className="mx-auto flex flex-col gap-1 px-5 py-4 [width:min(1120px,calc(100%-40px))]">
            <a
              href="#how"
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] px-3 py-3 text-sm font-semibold text-[rgba(12,15,20,.80)] hover:bg-[rgba(15,23,42,.06)]"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#meet"
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] px-3 py-3 text-sm font-semibold text-[rgba(12,15,20,.80)] hover:bg-[rgba(15,23,42,.06)]"
            >
              {t.nav.meetOthers}
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] px-3 py-3 text-sm font-semibold text-[rgba(12,15,20,.80)] hover:bg-[rgba(15,23,42,.06)]"
            >
              {t.nav.faq}
            </a>
            <div className="my-2 border-t border-[rgba(15,23,42,.08)] pt-3">
              <span className="mb-2 block px-3 text-xs font-extrabold uppercase tracking-wider text-[rgba(12,15,20,.6)]">
                {t.nav.language}
              </span>
              <div
                className="inline-flex rounded-[14px] border border-[rgba(15,23,42,.10)] bg-[rgba(15,23,42,.06)] p-0.5"
                role="tablist"
                aria-label="Language"
              >
                {(["en", "pt"] as const).map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    role="tab"
                    aria-selected={locale === loc}
                    onClick={() => setLocale(loc)}
                    className={cn(
                      "rounded-[10px] px-4 py-2.5 text-sm font-extrabold transition-colors",
                      locale === loc
                        ? "bg-white text-navy shadow-nav-btn"
                        : "text-[rgba(12,15,20,.75)] hover:text-navy"
                    )}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="mt-1 w-full rounded-[14px] border border-[rgba(229,106,54,.35)] bg-[linear-gradient(135deg,#e56a36,#ff8a4c)] px-3.5 py-3 text-sm font-extrabold text-white shadow-primary-btn"
            >
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto min-w-0 px-5 [width:min(1120px,calc(100%-40px))]">
        {/* Hero */}
        <section className="py-10 pb-6 md:py-[42px] md:pb-6">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-6">
            {/* Hero left card */}
            <div
              className="relative overflow-hidden rounded-28 border border-[rgba(15,23,42,.10)] p-7 shadow-card"
              style={{
                background:
                  "radial-gradient(900px 320px at 20% 15%, rgba(229,106,54,.18), transparent 60%), radial-gradient(700px 260px at 90% 0%, rgba(15,23,42,.12), transparent 55%), linear-gradient(180deg, rgba(255,255,255,.70), rgba(255,255,255,.35))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-[-2px] opacity-60"
                style={{
                  background:
                    "radial-gradient(600px 300px at 10% 20%, rgba(255,255,255,.65), transparent 60%)",
                }}
                aria-hidden
              />
              <h1 className="relative z-10 mt-2.5 text-[clamp(38px,4.7vw,62px)] font-black leading-[0.98] tracking-[-1.2px] text-navy break-words">
                {t.hero.findYour}{" "}
                <span className="bg-gradient-to-br from-brand to-[#f39b6a] bg-clip-text text-transparent">
                  {t.hero.soleMate}
                </span>
                {t.hero.punch ? (
                  <>
                    .
                    <br />
                    {t.hero.punch}
                  </>
                ) : (
                  "."
                )}
              </h1>
              <p className="relative z-10 mt-4 max-w-[54ch] text-base text-[rgba(12,15,20,.80)] whitespace-pre-line">
                {t.hero.sub}
              </p>
              {t.hero.microline && (
                <p className="relative z-10 mt-1 text-sm text-[rgba(12,15,20,.55)]">
                  {t.hero.microline}
                </p>
              )}
              <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[rgba(229,106,54,.35)] bg-[linear-gradient(135deg,#e56a36,#ff8a4c)] px-6 text-base font-extrabold text-white shadow-primary-btn transition-shadow hover:shadow-primary-btn-hover sm:w-auto"
                >
                  {t.hero.createProfile}
                </button>
                <a
                  href="#how"
                  className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[rgba(15,23,42,.14)] bg-white px-6 text-base font-extrabold shadow-nav-btn transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-nav-btn-hover sm:w-auto"
                >
                  {t.hero.seeHow}
                </a>
              </div>
              <p className="relative z-10 mt-4 text-[13px] text-[rgba(12,15,20,.65)]">
                {t.hero.privacyLine}
              </p>
            </div>

            {/* Hero right: split panel + match card */}
            <div
              className="relative flex min-h-[380px] items-stretch overflow-hidden rounded-28 border border-[rgba(15,23,42,.10)] shadow-card md:min-h-[420px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.25))",
              }}
              aria-label="Visual matching preview"
            >
              <div className="absolute inset-0 grid grid-cols-2">
                <div
                  className="relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(400px 240px at 30% 40%, rgba(229,106,54,.18), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0), rgba(255,255,255,.35))",
                  }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(420px 240px at 70% 40%, rgba(15,23,42,.16), transparent 65%), linear-gradient(225deg, rgba(255,255,255,0), rgba(255,255,255,.28))",
                  }}
                />
              </div>
              <span
                className="absolute bottom-[18px] left-4 text-[64px] font-black leading-none tracking-[-1px] text-navy/10 translate-y-1.5 select-none pointer-events-none"
                aria-hidden
              >
                LEFT
              </span>
              <span
                className="absolute bottom-[18px] right-4 text-right text-[64px] font-black leading-none tracking-[-1px] text-navy/10 translate-y-1.5 select-none pointer-events-none"
                aria-hidden
              >
                RIGHT
              </span>

              <div className="relative z-10 flex w-full items-center justify-center p-6">
                <div
                  className="w-[min(410px,95%)] overflow-hidden rounded-22 border border-[rgba(15,23,42,.10)] shadow-card"
                  style={{ background: "rgba(255,255,255,.80)" }}
                  role="group"
                  aria-label="Pair preview"
                >
                  <div className="flex flex-col gap-4 p-4">
                    {/* Pair Visual: interlocking sneakers + faint curve/dot */}
                    <div className="relative flex min-h-[120px] items-end justify-center md:min-h-[140px]">
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
                        <svg className="w-[90%] opacity-[0.25]" viewBox="0 0 400 80" fill="none">
                          <path
                            d="M40 40 Q 100 8, 200 40 Q 300 72, 360 40"
                            stroke="rgba(229,106,54,.5)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <circle cx="200" cy="40" r="2.5" fill="rgba(15,23,42,.35)" />
                        </svg>
                      </div>
                      <div className="relative z-10 flex items-end justify-center gap-0">
                        <svg
                          className="h-20 w-20 drop-shadow-[0_4px_12px_rgba(0,0,0,.12)] md:h-24 md:w-24"
                          style={{ transform: "rotate(-2deg)" }}
                          viewBox="0 0 80 80"
                          fill="none"
                          aria-hidden
                        >
                          <defs>
                            <linearGradient id="shoe-left-hero" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(229,106,54,.95)" />
                              <stop offset="100%" stopColor="rgba(200,90,45,.9)" />
                            </linearGradient>
                            <filter id="shadow-hero-left">
                              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
                            </filter>
                          </defs>
                          <path
                            d="M12 32 L12 58 C12 64 16 68 22 68 L32 68 L34 64 L46 64 L48 68 L58 68 C64 68 68 64 68 58 L68 38 C68 32 64 26 58 24 L48 22 L22 24 C16 26 12 30 12 32 Z M68 36 L68 44 L64 42 L64 38 Z"
                            fill="url(#shoe-left-hero)"
                            filter="url(#shadow-hero-left)"
                          />
                          <path
                            d="M18 36 L28 34 L48 36 L58 34 L64 38 L64 48 L62 52 L58 54 L48 52 L28 50 L18 52 Z"
                            fill="rgba(255,255,255,.25)"
                            stroke="rgba(255,255,255,.2)"
                            strokeWidth="0.5"
                          />
                        </svg>
                        <span
                          className="w-1 rounded-full bg-[rgba(15,23,42,.2)] md:w-1.5"
                          style={{ height: "3.5rem", alignSelf: "center" }}
                          aria-hidden
                        />
                        <svg
                          className="h-20 w-20 drop-shadow-[0_4px_12px_rgba(0,0,0,.12)] md:h-24 md:w-24"
                          style={{ transform: "scaleX(-1) rotate(-2deg)" }}
                          viewBox="0 0 80 80"
                          fill="none"
                          aria-hidden
                        >
                          <defs>
                            <linearGradient id="shoe-right-hero" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(15,23,42,.9)" />
                              <stop offset="100%" stopColor="rgba(35,45,60,.85)" />
                            </linearGradient>
                            <filter id="shadow-hero-right">
                              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
                            </filter>
                          </defs>
                          <path
                            d="M12 32 L12 58 C12 64 16 68 22 68 L32 68 L34 64 L46 64 L48 68 L58 68 C64 68 68 64 68 58 L68 38 C68 32 64 26 58 24 L48 22 L22 24 C16 26 12 30 12 32 Z M68 36 L68 44 L64 42 L64 38 Z"
                            fill="url(#shoe-right-hero)"
                            filter="url(#shadow-hero-right)"
                          />
                          <path
                            d="M18 36 L28 34 L48 36 L58 34 L64 38 L64 48 L62 52 L58 54 L48 52 L28 50 L18 52 Z"
                            fill="rgba(255,255,255,.18)"
                            stroke="rgba(255,255,255,.12)"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Compact profile tiles */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div
                        className="rounded-[14px] border border-[rgba(15,23,42,.10)] bg-white/80 p-2.5 shadow-[0_2px_8px_rgba(0,0,0,.05)]"
                        style={{ transform: "rotate(-1.5deg)" }}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-extrabold text-navy">42</span>
                          <span className="rounded bg-[rgba(229,106,54,.12)] px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[rgba(229,106,54,.9)]">
                            L
                          </span>
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          <span className="rounded-full border border-[rgba(229,106,54,.25)] bg-[rgba(229,106,54,.08)] px-2 py-0.5 text-[11px] font-bold text-[#2a1008]">
                            {t.chips.coimbra}
                          </span>
                          <span className="rounded-full border border-[rgba(15,23,42,.1)] bg-white/70 px-2 py-0.5 text-[11px] font-bold text-[rgba(12,15,20,.75)]">
                            {t.chips.sneakers}
                          </span>
                        </div>
                      </div>
                      <div
                        className="rounded-[14px] border border-[rgba(15,23,42,.10)] bg-white/80 p-2.5 shadow-[0_2px_8px_rgba(0,0,0,.05)]"
                        style={{ transform: "rotate(1.5deg)" }}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-extrabold text-navy">42</span>
                          <span className="rounded bg-[rgba(15,23,42,.12)] px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[rgba(15,23,42,.8)]">
                            R
                          </span>
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          <span className="rounded-full border border-[rgba(229,106,54,.25)] bg-[rgba(229,106,54,.08)] px-2 py-0.5 text-[11px] font-bold text-[#2a1008]">
                            {t.chips.coimbra}
                          </span>
                          <span className="rounded-full border border-[rgba(15,23,42,.1)] bg-white/70 px-2 py-0.5 text-[11px] font-bold text-[rgba(12,15,20,.75)]">
                            {t.chips.sneakers}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center border-t border-[rgba(15,23,42,.08)] bg-[rgba(255,255,255,.55)] px-4 py-3">
                    <button
                      type="button"
                      onClick={openModal}
                      className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[rgba(229,106,54,.35)] bg-[linear-gradient(135deg,#e56a36,#ff8a4c)] px-6 text-base font-extrabold text-white shadow-primary-btn transition-shadow hover:shadow-primary-btn-hover sm:w-auto"
                    >
                      {t.matchCard.tryIt}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-11">
          <h2 className="mb-2.5 text-[28px] font-black tracking-[-0.7px] text-navy">
            {t.how.title}
          </h2>
          <p className="mb-8 text-[15px] text-[rgba(12,15,20,.72)]">
            {t.how.sub}
          </p>
          <div className="relative">
            {/* Desktop: horizontal path with dashed line + footsteps */}
            <div className="hidden md:block">
              <div className="absolute left-0 right-0 top-8 h-0.5 border-t-2 border-dashed border-[rgba(15,23,42,.18)]" style={{ top: "2rem" }} aria-hidden />
              <div className="relative flex justify-between gap-4 px-0">
                {[
                  { k: 1, title: t.how.step1Title, text: t.how.step1Text },
                  { k: 2, title: t.how.step2Title, text: t.how.step2Text },
                  { k: 3, title: t.how.step3Title, text: t.how.step3Text },
                ].map((step, i) => (
                  <div key={step.k} className="relative flex flex-1 flex-col items-center">
                    <div className="relative z-10 rounded-22 border border-[rgba(15,23,42,.10)] bg-white/80 p-4 shadow-stat text-center min-w-[140px] max-w-[200px] h-full flex flex-col">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/12 text-lg font-black text-navy border border-[rgba(229,106,54,.2)] shrink-0">
                        {step.k}
                      </span>
                      <h3 className="mt-2 text-sm font-black text-navy">{step.title}</h3>
                      <p className="mt-1 text-xs font-semibold text-[rgba(12,15,20,.7)] break-words">{step.text}</p>
                    </div>
                    {i < 2 && (
                      <div className="absolute left-[60%] top-8 flex gap-1" style={{ transform: "translateY(-50%)" }} aria-hidden>
                        <FootprintSVG className="h-4 w-4 text-[rgba(15,23,42,.2)]" />
                        <FootprintSVG className="h-4 w-4 text-[rgba(15,23,42,.15)]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile: vertical timeline with footsteps */}
            <div className="flex flex-col gap-6 md:hidden">
              {[
                { k: 1, title: t.how.step1Title, text: t.how.step1Text },
                { k: 2, title: t.how.step2Title, text: t.how.step2Text },
                { k: 3, title: t.how.step3Title, text: t.how.step3Text },
              ].map((step, i) => (
                <div key={step.k} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/12 text-lg font-black text-navy border border-[rgba(229,106,54,.2)]">
                      {step.k}
                    </span>
                    {i < 2 && (
                      <div className="mt-1 flex flex-col gap-0.5" aria-hidden>
                        <FootprintSVG className="h-3 w-3 text-[rgba(15,23,42,.2)] rotate-90" />
                        <FootprintSVG className="h-3 w-3 text-[rgba(15,23,42,.15)] rotate-90" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 rounded-22 border border-[rgba(15,23,42,.10)] bg-white/80 p-4 shadow-stat pb-4">
                    <h3 className="text-sm font-black text-navy">{step.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-[rgba(12,15,20,.7)] break-words">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet other SoleMates */}
        <section id="meet" className="py-11">
          <div className="relative overflow-hidden rounded-[34px] border border-[rgba(15,23,42,.10)] p-5 shadow-museum bg-white/60">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-[22px] font-black tracking-tight text-navy">
                {t.meet.title}
              </h3>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[rgba(229,106,54,.35)] bg-[linear-gradient(135deg,#e56a36,#ff8a4c)] px-6 text-base font-extrabold text-white shadow-primary-btn transition-shadow hover:shadow-primary-btn-hover sm:w-auto"
              >
                {t.meet.createFirst}
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Profile previews">
              {[
                { alias: t.meet.aliases[0], size: t.meet.sizeLeft(40), location: t.chips.lisbon, type: t.chips.sneakers, style: t.chips.minimal, photoId: "p1", gradient: ["#e56a36", "#f5a882"] },
                { alias: t.meet.aliases[1], size: t.meet.sizeRight(37), location: t.chips.porto, type: t.chips.sandals, style: t.chips.bright, photoId: "p2", gradient: ["#1e293b", "#64748b"] },
                { alias: t.meet.aliases[2], size: t.meet.sizeLeft(44), location: t.chips.coimbra, type: t.chips.boots, style: t.chips.classic, photoId: "p3", gradient: ["#c47b5a", "#e8a88a"] },
                { alias: t.meet.aliases[3], size: t.meet.sizeRight(41), location: t.chips.algarve, type: t.chips.running, style: t.chips.sport, photoId: "p4", gradient: ["#0f172a", "#475569"] },
              ].map((card) => (
                <div
                  key={card.photoId}
                  className="overflow-hidden rounded-[18px] border border-[rgba(15,23,42,.10)] bg-white shadow-lost transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lost-hover"
                >
                  <div
                    className="relative h-28 w-full shrink-0 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${card.gradient[0]}, ${card.gradient[1]})`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      }}
                      aria-hidden
                    />
                    <svg
                      className="absolute bottom-0 left-1/2 h-14 w-14 -translate-x-1/2 translate-y-2 opacity-40"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 38 L12 56 C12 60 16 62 22 62 L42 62 C48 62 52 60 52 56 L52 38 C52 34 48 30 44 28 L32 24 L20 28 C16 30 12 34 12 38 Z"
                        fill="rgba(255,255,255,.5)"
                      />
                    </svg>
                  </div>
                  <div className="p-3">
                    <p className="font-black text-navy">{card.alias}</p>
                    <p className="mt-1 text-sm text-[rgba(12,15,20,.78)]">{card.size}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded-full border border-[rgba(229,106,54,.22)] bg-[rgba(229,106,54,.08)] px-2 py-0.5 text-[11px] font-bold text-[#2a1008]">
                        {card.location}
                      </span>
                      <span className="rounded-full border border-[rgba(15,23,42,.1)] bg-white/80 px-2 py-0.5 text-[11px] font-bold text-[rgba(12,15,20,.78)]">
                        {card.type}
                      </span>
                      <span className="rounded-full border border-[rgba(15,23,42,.1)] bg-white/80 px-2 py-0.5 text-[11px] font-bold text-[rgba(12,15,20,.78)]">
                        {card.style}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-11">
          <h2 className="mb-2.5 text-[28px] font-black tracking-[-0.7px] text-navy">
            {t.faq.title}
          </h2>
          <p className="mb-6 text-[15px] text-[rgba(12,15,20,.72)]">
            {t.faq.intro}
          </p>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[rgba(15,23,42,.1)]">
                <AccordionTrigger className="py-4 text-left font-semibold text-navy hover:text-brand [&[data-state=open]>svg]:rotate-180">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[rgba(12,15,20,.72)] pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Footer */}
        <footer className="py-9 pb-12 text-[rgba(12,15,20,.72)]">
          <div className="flex flex-wrap justify-between gap-3.5 border-t border-[rgba(15,23,42,.10)] pt-4 text-[13px] font-semibold">
            <div>
              <strong className="text-navy">SoleMate</strong>{" "}
              <span className="text-[rgba(12,15,20,.62)]">— {t.footer.tagline}</span>
            </div>
            <div className="text-[rgba(12,15,20,.62)]">
              {t.footer.note}
            </div>
          </div>
        </footer>
      </main>

      {/* Modal */}
      {modalOpen && (
        <Modal onClose={closeModal} t={t.modal} locale={locale} />
      )}
    </>
  );
}

function Modal({
  onClose,
  t,
  locale,
}: {
  onClose: () => void;
  t: (typeof translations.en)["modal"] | (typeof translations.pt)["modal"];
  locale: Locale;
}) {
  const [email, setEmail] = useState("");
  const [alias, setAlias] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, isSubmitting]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isSubmitting) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          alias: alias.trim() || null,
          language: locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(2,6,23,.52)] p-5 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
        onClick={handleBackdropClick}
      >
        <div
          className="w-full max-w-[520px] overflow-hidden rounded-22 border border-[rgba(15,23,42,.14)] bg-white shadow-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between border-b border-[rgba(15,23,42,.10)] bg-white px-4 py-3.5">
            <strong className="font-black">{t.title}</strong>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[rgba(15,23,42,.10)] bg-[rgba(15,23,42,.06)] px-2.5 py-2 text-sm font-black"
              aria-label={t.close}
            >
              ✕
            </button>
          </header>
          <div className="bg-white p-6 text-center">
            <p className="text-base font-semibold text-[rgba(12,15,20,.80)]">
              {t.success}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-[14px] border border-[rgba(229,106,54,.35)] bg-[linear-gradient(135deg,#e56a36,#ff8a4c)] px-3.5 py-3 text-sm font-extrabold text-white shadow-primary-btn hover:shadow-primary-btn-hover"
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(2,6,23,.52)] p-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
      onClick={handleBackdropClick}
    >
      <div
        className="w-full max-w-[520px] overflow-hidden rounded-22 border border-[rgba(15,23,42,.14)] bg-white shadow-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-[rgba(15,23,42,.10)] bg-white px-4 py-3.5">
          <strong className="font-black">{t.title}</strong>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="rounded-xl border border-[rgba(15,23,42,.10)] bg-[rgba(15,23,42,.06)] px-2.5 py-2 text-sm font-black disabled:opacity-50"
            aria-label={t.close}
          >
            ✕
          </button>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="bg-white p-4">
            <p className="mb-4 text-sm font-semibold text-[rgba(12,15,20,.72)]">
              {t.subtitle}
            </p>
            {error && (
              <div className="mb-4 rounded-[14px] border border-[rgba(229,106,54,.3)] bg-[rgba(229,106,54,.08)] px-3 py-2.5 text-sm text-[rgba(229,106,54,.9)]">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black text-[rgba(12,15,20,.72)]" htmlFor="email">
                  {t.email} <span className="text-[rgba(229,106,54,.9)]" aria-hidden>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="mt-1 w-full rounded-[14px] border border-[rgba(15,23,42,.14)] bg-white px-3 py-3 font-semibold outline-none disabled:opacity-50 focus:border-brand focus:shadow-[0_0_0_6px_rgba(229,106,54,.15)]"
                  aria-describedby="email-helper"
                />
                <p id="email-helper" className="mt-1.5 text-xs text-[rgba(12,15,20,.65)]">
                  {t.emailHelper}
                </p>
              </div>
              <div>
                <label className="block text-xs font-black text-[rgba(12,15,20,.72)]" htmlFor="alias">
                  {t.alias}
                </label>
                <input
                  id="alias"
                  type="text"
                  disabled={isSubmitting}
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder={t.aliasPlaceholder}
                  className="mt-1 w-full rounded-[14px] border border-[rgba(15,23,42,.14)] bg-white px-3 py-3 font-semibold outline-none disabled:opacity-50 focus:border-brand focus:shadow-[0_0_0_6px_rgba(229,106,54,.15)]"
                  aria-describedby="alias-helper"
                />
                <p id="alias-helper" className="mt-1.5 text-xs text-[rgba(12,15,20,.65)]">
                  {t.aliasHelper}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2.5 border-t border-[rgba(15,23,42,.10)] bg-white px-4 py-3.5">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="rounded-[14px] border border-[rgba(15,23,42,.14)] bg-white px-3.5 py-3 text-sm font-extrabold shadow-nav-btn hover:-translate-y-px hover:shadow-nav-btn-hover disabled:opacity-50"
            >
              {t.close}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="rounded-[14px] border border-[rgba(229,106,54,.35)] bg-[linear-gradient(135deg,#e56a36,#ff8a4c)] px-3.5 py-3 text-sm font-extrabold text-white shadow-primary-btn hover:shadow-primary-btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "..." : t.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
