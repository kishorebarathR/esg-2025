/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        "cms-primary": "#7F3F98",
        "cms-secondary": "#E5D9EA",
        "cms-light-black": "#222222",
        "cms-primary-black": "#1C1C1C",
        "cms-secondary-black": "#1A1A1A",
        "cms-primary-gray": "#404040",
        "cms-secondary-gray": "#CBCBCB",
        "cms-primary-green": "#00AE8E",
        "cms-secondary-green": "#D7EEE8",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
