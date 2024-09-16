/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titania", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#0d1b2a",
        secondary: "#e5e5e5",
        terzo: "#778da9",
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
