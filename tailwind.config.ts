import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        game: {
          purple: "#6C3BFF",
          "purple-light": "#8E65FF",
          "purple-dark": "#4E21D9",
          blue: "#27B8FF",
          "blue-light": "#62CCFF",
          "blue-dark": "#0A99E5",
          orange: "#FF8B35",
          "orange-light": "#FFA55E",
          yellow: "#FFD84D",
          "yellow-light": "#FFE480",
          dark: "#111827",
          "dark-deeper": "#0B0F19",
          "dark-card": "#182234",
          "dark-border": "#28354D",
        },
      },
      fontFamily: {
        sans: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "arrow-slide": "arrowSlide 2s linear infinite",
        "rotate-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        arrowSlide: {
          "0%": { transform: "translateX(0) scale(1)", opacity: "0.4" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(20px) scale(1)", opacity: "0.4" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 25px rgba(108, 59, 255, 0.45)",
        "glow-blue": "0 0 25px rgba(39, 184, 255, 0.45)",
        "glow-orange": "0 0 25px rgba(255, 139, 53, 0.45)",
        "glow-yellow": "0 0 25px rgba(255, 216, 77, 0.45)",
        "game-card": "0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "game-btn": "0 6px 0 #4E21D9, 0 12px 20px rgba(108, 59, 255, 0.35)",
        "game-btn-orange": "0 6px 0 #C96213, 0 12px 20px rgba(255, 139, 53, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

