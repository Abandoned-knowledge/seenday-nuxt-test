/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/shared/**/*.{js,vue,ts}",
    "./src/pages/**/*.{js,vue,ts}",
    "./src/app/**/*.{js,vue,ts}",
  ],
  theme: {
    colors: {
      black: "var(--dark-color)",
      main: "var(--main-color)",
      accent: "var(--accent-color)",
      lightGrey: "var(--light-grey-color)",
      white: "#FFFFFF",
      grey: "var(--grey-color)",
    },
    fontFamily: {
      'sans': 'Montserrat, sans-serif',
    },
    container: {
      center: true,
    }
  },
  plugins: [],
};
