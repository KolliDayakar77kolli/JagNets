// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#1a1a2b", // Custom background color
      },
      fontFamily: {
        lobster: ["Lobster", "sans-serif"], // Custom font
        arial: ["Arial", "sans-serif"], // Custom Arial font
      },
    },
  },
  plugins: [],
};
