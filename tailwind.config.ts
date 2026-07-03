import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        agyntiq: {
          "primary-blue": "#2D9CFF",
          "purple": "#6C4BFF",
          "white": "#FFFFFF",
          "deep-black": "#050816",
          "dark-navy": "#0E1325",
          "bg": "#050816",
          "surface": "#0E1325",
          "surface-light": "#1A1F3A",
          "text-primary": "#FFFFFF",
          "text-secondary": "#A4B2D6",
          "text-muted": "#6B7280",
          "border": "rgba(255, 255, 255, 0.1)",
          "light-bg": "#F5F7FA",
          "light-surface": "#FFFFFF",
          "light-text-primary": "#1F2937",
          "light-text-secondary": "#6B7280",
          "light-text-muted": "#9CA3AF",
          "light-border": "rgba(0, 0, 0, 0.08)"
        }
      },
      boxShadow: {
        glass:
          "0 20px 80px rgba(4, 10, 32, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        "glass-light":
          "0 20px 80px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
        glow: "0 0 60px rgba(45, 156, 255, 0.3)",
        "glow-purple": "0 0 60px rgba(108, 75, 255, 0.3)",
        "premium": "0 24px 96px rgba(0, 0, 0, 0.4)",
        "premium-light": "0 24px 96px rgba(0, 0, 0, 0.08)"
      },
      backgroundImage: {
        "aurora-gradient":
          "radial-gradient(circle at 18% 18%, rgba(45, 156, 255, 0.34), transparent 30%), radial-gradient(circle at 82% 20%, rgba(108, 75, 255, 0.24), transparent 28%), radial-gradient(circle at 50% 82%, rgba(45, 156, 255, 0.16), transparent 30%)",
        "gradient-blue-purple": "linear-gradient(135deg, #2D9CFF 0%, #6C4BFF 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        glow: {
          "0%, 100%": { opacity: "0.48" },
          "50%": { opacity: "0.88" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "33%": { transform: "translate3d(18px, -12px, 0)" },
          "66%": { transform: "translate3d(-10px, 16px, 0)" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        shimmer: "shimmer 14s linear infinite",
        glow: "glow 5s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        drift: "drift 18s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
