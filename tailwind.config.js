/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        primary: "#00DC82",
        secondary: "#003C3C",
        gradient1: "#FF5D5D",
        gradient2: "#4794FF",
        primaryText: "#000000",
        secondaryText: "#838383",
        other: "#FFFFFF",
      },
      fontSize: {
        webh1: "40px",
        webh2: "32px",
        webh3: "27px",
        webh4: "22px",
        mobh1: "24px",
        mobH2: "20px",
        mobh3: "18px",
        mobh4:"16px"
      },
    },
  },
  plugins: [],
};
