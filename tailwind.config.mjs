/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo
        secondary: "#E0E7FF", // Light Indigo
        dark: "#1E1E2E", // Dark mode background
      },
    },
  },
  plugins: [],
};
