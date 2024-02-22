/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#BE8900",
        secondary: "#F3DD18",
        tertiary: "#FFFEE5",
        black: "#383600",
        grey: "#828282",
      },
    },
  },
  plugins: [],
};
