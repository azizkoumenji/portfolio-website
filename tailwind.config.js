/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#101010",
        "border-grey": "#343434",
        "light-grey": "#CFCFCF",
      },
    },
  },
  plugins: [],
};
