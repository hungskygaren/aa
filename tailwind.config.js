/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#068558",
        customGray: "#F8F8F8",
      },
      margin: {
        "10vh": "10vh",
        "5vh": "5vh",
        "2vh": "2vh",
      },
      maxHeight: {
        "59vh": "59vh",
        "85vh": "85vh",
      },
      height: {
        "65vh": "65vh",
        "10vh": "10vh",
        "5vh": "5vh",
      },
      maxWidth: {
        "35vw": "35vw",
        "29vw": "29vw",
      },
      width: {
        "29vw": "29vw",
      },
    },
  },
  plugins: [],
};
