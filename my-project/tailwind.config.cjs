/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#383b4b",
        lightBlue: "#d0d6f9",
        darkBlue: "#0b0d17",
      },
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
      screens: {
        ss: {
          min: "360px",
          max: "768px",
          raw: "(min-width: 360px) and (max-width: 768px)",
        },
        md: {
          min: "768px",
          max: "1024px",
          raw: "(min-width: 768px) and (max-width: 1024px)",
        },
        lg: { max: "1440px" },
        xl: { max: "1920px" },
      },
    },
  },
  plugins: [],
};
