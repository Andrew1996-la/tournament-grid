/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgDarkMode: "rgb(30 41 59)",
      bgLightMode: "rgb(203 213 225)",
      textDarkMode: "#fff",
      textLightMode: "#000",
      gridBgLightMode: "rgb(255 255 255)",
      gridBgDarkMode: "rgb(71 85 105)",
    },
    extend: {},
  },
  plugins: [],
};
