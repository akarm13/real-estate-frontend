/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        listing: "repeat(auto-fit, minmax(270px, 1fr))",
        benefits: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      boxShadow: {
        footer: "0px -2px 64px 22px rgba(0, 0, 0, 0.02)",
      },
      colors: {
        primary: {
          100: "#DEDBFF",
          200: "#BDB8FF",
          300: "#9C94FF",
          400: "#7C70FF",
          500: "#5B4DFF",
          600: "#493DCC",
          700: "#362E99",
          800: "#241F66",
          900: "#120F33",
          background: "rgba(91, 77, 255, 0.1)",
        },
        primaryText: "#000929",
        secondaryText: "#4D5461",
        searchBackground: "#F1F0F6",
        gray: {
          100: "#ECEBEF",
          200: "#D8D8DF",
          300: "#C5C4CF",
          400: "#B2B0BF",
          500: "#9E9DAF",
          600: "#7F7D8C",
          700: "#5F5E69",
          800: "#3F3F46",
          900: "#201F23",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
