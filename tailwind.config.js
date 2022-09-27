/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "992px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        "light-gray": "#F8F5EF",
      },
    },
  },
  plugins: [],
};
