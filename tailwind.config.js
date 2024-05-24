/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lila-slate" : "#FAFAEF",
        "lila-dark": "#151318",
        "lila-gray": {
          "100": "#222432",
          "200": "#383A46",
          "300": "#7A7A7A",
        }
      }
    },
  },
  plugins: [],
};
