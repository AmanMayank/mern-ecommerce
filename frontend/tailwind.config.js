/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#79B259",
        "custom-green-dark": "#4C822A",
        "custom-gray": "#F3F6F8",
      },
    },
  },
  plugins: [],
};
