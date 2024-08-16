/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        "color-green": "var(--color-green)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
