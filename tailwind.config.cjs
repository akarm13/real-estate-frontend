/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      gridTemplateColumns: {
        listing: "repeat(auto-fit, minmax(270px, 1fr))",
        benefits: "repeat(auto-fit, minmax(280px, 1fr))",
        search: "1fr 4fr",
      },
      boxShadow: {
        footer: "0px -2px 64px 22px rgba(0, 0, 0, 0.02)",
        pin: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        dropdown: "1px 2px 4px #DCDCEA",
        card: "1px 2px 3px 0 rgba(91 77 255 / 8%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animate-enter": "animate-enter 0.2s ease-out",
        "animate-leave": "animate-leave 0.2s ease-out",
      },
      colors: {
        primary: {
          50: "#F5F6FF",
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
        searchBackground: "rgb(245, 246, 247)",
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
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
