/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "765px" },
        tablet: { min: "766px", max: "1023px" },
      },
    },
  },
  plugins: [],
};
