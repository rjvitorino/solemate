import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fbf6ee",
        "paper-2": "#fffaf3",
        navy: "#0c1520",
        brand: "#e56a36",
        "brand-2": "#ff8a4c",
        "sole-beige": "#e8e4dc",
        "sole-dark": "#0c1520",
        "sole-terracotta": "#e56a36",
        "sole-muted": "#6b7280",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "22": "22px",
        "28": "28px",
      },
      boxShadow: {
        card: "0 20px 70px rgba(0,0,0,.22)",
        "nav-btn": "0 8px 24px rgba(0,0,0,.06)",
        "nav-btn-hover": "0 14px 34px rgba(0,0,0,.10)",
        "primary-btn": "0 18px 45px rgba(229,106,54,.22)",
        "primary-btn-hover": "0 26px 60px rgba(229,106,54,.28)",
        "toggle-active": "0 10px 26px rgba(0,0,0,.08)",
        stat: "0 14px 40px rgba(0,0,0,.06)",
        lost: "0 12px 35px rgba(0,0,0,.06)",
        "lost-hover": "0 18px 50px rgba(0,0,0,.10)",
        museum: "0 20px 70px rgba(0,0,0,.08)",
        modal: "0 28px 100px rgba(0,0,0,.25)",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
