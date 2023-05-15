/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
      colors: {
        primaryBlue: "#0D446C",
        primaryGray: "#F4F5F7",
      },
      backgroundImage: {
        // primary: "url('./public/svgs/LooperGroup.png')",
        // primary: "url('/public/svgs/clients-lg.svg')",
      },
    },
  },
};
