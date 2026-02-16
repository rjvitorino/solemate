/**
 * Two sneaker silhouettes as puzzle pieces: left notched on inner edge,
 * right with complementary notch, facing each other with a soft connecting curve.
 */
export function SneakerPair() {
  return (
    <div className="relative flex items-center justify-center py-4" aria-hidden>
      {/* Soft connecting curve behind sneakers + center dot */}
      <svg
        className="absolute h-16 w-full max-w-[200px] text-sole-beige"
        viewBox="0 0 200 64"
        fill="none"
      >
        <path
          d="M 0 32 Q 50 10, 100 32 Q 150 54, 200 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          fill="none"
        />
        <circle
          cx="100"
          cy="32"
          r="3"
          fill="currentColor"
          className="text-sole-dark/60"
        />
      </svg>

      {/* Left sneaker: simple outline, notch on right (inner) edge */}
      <svg
        className="relative z-10 h-12 w-14 shrink-0 text-sole-muted"
        viewBox="0 0 56 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      >
        <path
          d="M6 14 L6 38 C6 42 10 46 16 46 L22 46 L24 42 L32 42 L34 46 L40 46 C46 46 50 42 50 38 L50 24 C50 18 46 12 40 10 L28 8 L16 10 C10 12 6 16 6 22 L6 14 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M50 20 L50 28 L46 26 L46 22 Z"
          fill="var(--sole-cream)"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>

      {/* Right sneaker: mirror, notch on left (inner) edge */}
      <svg
        className="relative z-10 h-12 w-14 -ml-1 shrink-0 text-sole-muted"
        viewBox="0 0 56 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      >
        <path
          d="M50 14 L50 38 C50 42 46 46 40 46 L34 46 L32 42 L24 42 L22 46 L16 46 C10 46 6 42 6 38 L6 24 C6 18 10 12 16 10 L28 8 L40 10 C46 12 50 16 50 22 L50 14 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M6 20 L6 28 L10 26 L10 22 Z"
          fill="var(--sole-cream)"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}
