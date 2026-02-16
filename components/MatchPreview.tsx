"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { SneakerPair } from "@/components/SneakerPair";
import { cn } from "@/lib/utils";

type ViewMode = "match" | "empty";

export function MatchPreview() {
  const [view, setView] = useState<ViewMode>("match");

  return (
    <section
      id="match-preview"
      className="relative z-10 px-4 py-12 sm:px-6 lg:px-8"
      aria-labelledby="match-preview-heading"
    >
      {/* Background: large faint LEFT / RIGHT */}
      <div
        className="pointer-events-none absolute inset-0 flex justify-between overflow-hidden px-4 sm:px-8"
        aria-hidden
      >
        <span
          className="text-[clamp(4rem,15vw,12rem)] font-bold leading-none text-sole-dark/[0.04]"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          LEFT
        </span>
        <span
          className="text-[clamp(4rem,15vw,12rem)] font-bold leading-none text-sole-dark/[0.04]"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          RIGHT
        </span>
      </div>

      {/* Soft gradient panel behind card */}
      <div className="relative mx-auto max-w-2xl">
        <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-sole-beige/30 to-sole-warm/20" />

        <Card className="relative mx-auto max-w-xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <span
              id="match-preview-heading"
              className="text-xs font-medium uppercase tracking-wider text-sole-muted"
            >
              Live preview
            </span>
            <SegmentedControl value={view} onValueChange={setView} />
          </CardHeader>

          <CardContent className="min-h-[200px]">
            {view === "match" ? (
              <MatchState />
            ) : (
              <EmptyState />
            )}
          </CardContent>

          {view === "match" && (
            <CardFooter className="flex items-center justify-between border-t border-sole-beige/60 pt-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-sole-beige/50 px-3 py-1 text-xs font-medium text-sole-muted">
                  Compatibility
                </span>
                <span className="text-sm font-medium text-sole-dark">High</span>
              </div>
              <Button>Try it</Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}

function SegmentedControl({
  value,
  onValueChange,
}: {
  value: ViewMode;
  onValueChange: (v: ViewMode) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Preview mode"
      className="inline-flex rounded-xl border border-sole-beige bg-sole-warm/30 p-0.5"
    >
      {(["match", "empty"] as const).map((option) => (
        <button
          key={option}
          role="tab"
          aria-selected={value === option}
          tabIndex={value === option ? 0 : -1}
          onClick={() => onValueChange(option)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") onValueChange("match");
            if (e.key === "ArrowRight") onValueChange("empty");
          }}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sole-terracotta/40 focus-visible:ring-offset-2",
            value === option
              ? "bg-white text-sole-dark shadow-soft"
              : "text-sole-muted hover:text-sole-dark"
          )}
        >
          {option === "match" ? "Match" : "Empty"}
        </button>
      ))}
    </div>
  );
}

function MatchState() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch">
      {/* Left panel */}
      <div className="flex flex-1 flex-col rounded-2xl border border-sole-beige/60 bg-sole-cream/50 p-4">
        <p className="text-sm font-medium text-sole-dark">
          Size 42 • Left available
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Chip>Lisbon</Chip>
          <Chip>Sneakers</Chip>
          <Chip>Minimal</Chip>
          <Chip>Neutral</Chip>
        </div>
      </div>

      {/* Center: sneaker connection */}
      <div className="flex shrink-0 items-center justify-center sm:px-2">
        <SneakerPair />
      </div>

      {/* Right panel */}
      <div className="flex flex-1 flex-col rounded-2xl border border-sole-beige/60 bg-sole-cream/50 p-4">
        <p className="text-sm font-medium text-sole-dark">
          Size 42 • Right needed
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Chip>Lisbon</Chip>
          <Chip>Sneakers</Chip>
          <Chip>Minimal</Chip>
          <Chip>Neutral</Chip>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-white/80 px-2.5 py-1 text-xs text-sole-muted border border-sole-beige/40">
      {children}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-sole-beige bg-sole-cream/30 py-12 text-center">
      <p className="text-base font-medium text-sole-dark">No matches yet.</p>
      <p className="mt-1 text-sm text-sole-muted">
        Create a profile to start seeing compatible people.
      </p>
    </div>
  );
}
