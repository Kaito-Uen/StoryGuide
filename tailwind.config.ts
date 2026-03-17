import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0B0D10",
        surface: "#11151B",
        panel: "#151922",
        line: "#262B36",
        text: "#F5F7FA",
        muted: "#A7B0BE",
        accent: "#7C8CFF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        reading: "72ch"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
