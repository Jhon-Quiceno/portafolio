import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        lg: "24px",
      },
    },
    extend: {
      maxWidth: {
        container: "1200px",
      },
      colors: {
        surface: "#10131a",
        "surface-dim": "#10131a",
        "surface-bright": "#363941",
        "surface-container-lowest": "#0b0e15",
        "surface-container-low": "#191b23",
        "surface-container": "#1d2027",
        "surface-container-high": "#272a31",
        "surface-container-highest": "#32353c",
        "on-surface": "#e1e2ec",
        "on-surface-variant": "#c2c6d6",
        "inverse-surface": "#e1e2ec",
        "inverse-on-surface": "#2e3038",
        outline: "#8c909f",
        "outline-variant": "#424754",
        primary: "#adc6ff",
        "on-primary": "#002e6a",
        "primary-container": "#4d8eff",
        "on-primary-container": "#00285d",
        secondary: "#c6c5cf",
        "on-secondary": "#2f3038",
        "secondary-container": "#4a4b53",
        "on-secondary-container": "#bcbbc5",
        tertiary: "#ffb786",
        "on-tertiary": "#502400",
        "tertiary-container": "#df7412",
        "on-tertiary-container": "#461f00",
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        background: "#10131a",
        "on-background": "#e1e2ec",
        "surface-variant": "#32353c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
        "display-lg": [
          "84px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "1.2", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        "headline-md": [
          "20px",
          { lineHeight: "1.4", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "body-lg": [
          "16px",
          { lineHeight: "1.6", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
        "body-sm": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
        ],
        "label-mono": [
          "12px",
          { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" },
        ],
        "label-caps": [
          "11px",
          { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "600" },
        ],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "4px",
        md: "4px",
        lg: "8px",
        card: "8px",
      },
      spacing: {
        gutter: "24px",
      },
      keyframes: {
        "boot-up": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        scanning: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        boot: "boot-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scan: "scanning 4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
