/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", 
  './src/**/*.{vue,js,ts,jsx,tsx}',
  "./node_modules/tw-elements/dist/js/**/*.js",],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
}
