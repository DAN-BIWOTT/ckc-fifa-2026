/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff8e1",
          100: "#ffecb3",
          500: "#fbc02d",
          700: "#f57f17",
        },
      },
    },
  },
  plugins: [],
}
