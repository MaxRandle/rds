// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: colors.stone,
        primary: colors.indigo,
        success: colors.emerald,
        info: colors.sky,
        warning: colors.amber,
        danger: colors.red,
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2.5rem",
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};

module.exports = config;

// colors: {
//   base: {
//     50: "var(--grey-50)",
//     100: "var(--grey-100)",
//     200: "var(--grey-200)",
//     300: "var(--grey-300)",
//     400: "var(--grey-400)",
//     500: "var(--grey-500)",
//     600: "var(--grey-600)",
//     700: "var(--grey-700)",
//     800: "var(--grey-800)",
//     900: "var(--grey-900)",
//   },
//   primary: {
//     50: "var(--cyenta-50)",
//     100: "var(--cyenta-100)",
//     200: "var(--cyenta-200)",
//     300: "var(--cyenta-300)",
//     400: "var(--cyenta-400)",
//     500: "var(--cyenta-500)",
//     600: "var(--cyenta-600)",
//     700: "var(--cyenta-700)",
//     800: "var(--cyenta-800)",
//     900: "var(--cyenta-900)",
//   },
//   success: {
//     50: "var(--emerald-50)",
//     100: "var(--emerald-100)",
//     200: "var(--emerald-200)",
//     300: "var(--emerald-300)",
//     400: "var(--emerald-400)",
//     500: "var(--emerald-500)",
//     600: "var(--emerald-600)",
//     700: "var(--emerald-700)",
//     800: "var(--emerald-800)",
//     900: "var(--emerald-900)",
//   },
//   info: {
//     50: "var(--sky-50)",
//     100: "var(--sky-100)",
//     200: "var(--sky-200)",
//     300: "var(--sky-300)",
//     400: "var(--sky-400)",
//     500: "var(--sky-500)",
//     600: "var(--sky-600)",
//     700: "var(--sky-700)",
//     800: "var(--sky-800)",
//     900: "var(--sky-900)",
//   },
//   warning: {
//     50: "var(--amber-50)",
//     100: "var(--amber-100)",
//     200: "var(--amber-200)",
//     300: "var(--amber-300)",
//     400: "var(--amber-400)",
//     500: "var(--amber-500)",
//     600: "var(--amber-600)",
//     700: "var(--amber-700)",
//     800: "var(--amber-800)",
//     900: "var(--amber-900)",
//   },
//   danger: {
//     50: "var(--red-50)",
//     100: "var(--red-100)",
//     200: "var(--red-200)",
//     300: "var(--red-300)",
//     400: "var(--red-400)",
//     500: "var(--red-500)",
//     600: "var(--red-600)",
//     700: "var(--red-700)",
//     800: "var(--red-800)",
//     900: "var(--red-900)",
//   },
// },
