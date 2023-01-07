/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media",

  content: ["./src/**/**/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Chivo"],
        body: ["Open Sans"],
      },
      colors: {
        primary: colors.cyan,
      },
      screens: {
        sm: "640px",
        lg: "1024px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
