/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      cursor: {
        pen: "url(/pen.png), pointer",
        eraser: "url(/eraser.png), pointer"
      }
    }
  },
  plugins: []
}
