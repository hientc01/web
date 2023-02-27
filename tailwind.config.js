/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "color-grey-dark": "#35353e",
        "color-grey-light": "#c9c9c9",
        "color-dark": "#0f0f0f",
        "color-darker": "#1a1a1b",
        "color-blue": "#2568ef",
        "border-grey-dark": "#3a3939",
        "border-dark": "#222222",
        "color-filter": "#282829",
        "dark-lighten": "#333335",
        "white-text": "#e3e3e3",
        "red-text": "#972720",
        "Grey-text": "#57575a",
        "hex-grey": "#161616",
        "red-loadmore": "#ad241a",
        "text-line-white": "#e4e4e4",
        "button-red": "#ad241b",
      },
      screens: {
        "min-w-937": "937px",
      },
    },
  },
  plugins: [],
};
