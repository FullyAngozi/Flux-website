/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        purple: "#010643",
        btnColor: "#8B8BDA"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        outfit: ['Outfit', 'sans'],
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
};
