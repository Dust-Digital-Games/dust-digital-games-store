module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        letras: "#2C41FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
