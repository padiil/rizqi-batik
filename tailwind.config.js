/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
        secondary: "#FFF3E3",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        // h1: {
        //   fontSize: theme("fontSize.2xl"),
        // },
        // h2: {
        //   fontSize: theme("fontSize.xl"),
        // },
      });
      addComponents({
        ".btn-primary": {
          background: theme("colors.primary"),
          color: theme("colors.white"),
          fontWeight: theme("fontWeight.bold"),
          padding: "20px",
          border: "1px solid " + theme("colors.primary"),
          "&:hover": {
            background: theme("colors.secondary"),
            color: theme("colors.primary"),
            border: "1px solid " + theme("colors.primary"),
          },
        },
        ".btn-secondary": {
          background: theme("colors.white"),
          border: "1px solid " + theme("colors.primary"),
          color: theme("colors.primary"),
          fontWeight: theme("fontWeight.bold"),
          padding: "20px",
          "&:hover": {
            background: theme("colors.primary"),
            color: theme("colors.white"),
          },
        },
      });
      addUtilities({
        // ".content-auto": {
        //   contentVisibility: "auto",
        // },
      });
    }),
  ],
};
