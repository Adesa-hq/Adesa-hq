/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ADESA Blue color system
        adesa: {
          900: "#0A0F1C",
          800: "#141B2D",
          700: "#1E2A45",
          600: "#2D3A5C",
          500: "#3D4E73",
          400: "#5A6B8A",
          300: "#8494B2",
          200: "#B8C4D9",
          100: "#E4E9F2",
          50: "#F5F7FA",
        },

        // Gold accent colors
        gold: {
          500: "#B8860B",
          400: "#D4A017",
          300: "#E5B832",
        },

        // Neutral system for backgrounds and text
        neutral: {
          950: "#030712",
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
          100: "#F3F4F6",
          50: "#F9FAFB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0rem", // Sharp corners for institutional look
      },
    },
  },
  plugins: [],
};
