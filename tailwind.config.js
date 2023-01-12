/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Helvetica"],
    },
    extend: {},
    colors: {
      primaryp: "#0F152F",
      grayLight: "#edf2f9",
      grayccc: "#ccc",
      blueSky: "#BFEAF5",
      blueDark: "#144272",
      blueinput: "#f9fafd",
      white: "#fff",
      whitef8: "#f8f8f8",
      orangeexp: "#F56416",
    },
  },
  plugins: [],
};
