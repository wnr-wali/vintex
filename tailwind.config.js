/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e1a12",
        forest: "#1a4d2e",
        moss: "#2d6a4f",
        gold: {
          DEFAULT: "#c8a84b",
          light: "#e8cc7a",
        },
        cream: "#f8f4ed",
        parchment: "#ede8de",
        warm: "#fdfaf5",
        muted: "#6b7b6e",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
