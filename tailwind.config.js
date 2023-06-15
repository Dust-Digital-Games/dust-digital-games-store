module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2C41FF",
        border: "1px solid red",
        neutral: "#1A1A1B",
        textHomecardRD: "rgb(136,136,136)",
        bgHomecardPlatforms: "#CFD4FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
