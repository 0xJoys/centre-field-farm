/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#EB9007",
        SecondryColor: "#618A3D",
        CardBg: "#F5FFF3",
      },
      fontSize: {
        MainHeading: "2.5rem",
        SubHeading: "1rem",
      },
    },
  },
  plugins: [],
};
