/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
  darkMode: "class",
};
