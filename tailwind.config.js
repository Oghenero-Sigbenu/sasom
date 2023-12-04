/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("./img/laptop.jpeg")',
        heroBg: 'url("./img/white.jpeg")',
      },
      colors: {
        primary: "#032d42",
        "primary-shade": "#62d84e",
        green: "#039228",
        blue: "#56bff4",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        spinnaker: ["Spinnaker", "sans-serif"],
      },
    },
  },
  plugins: [],
};
