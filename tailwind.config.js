/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackOlive": "#414535",
        "whiteDutch": "#f2e3bc",
        "orangeGiants": "#f26430",
        "purpleRoyal": "#7e52a0",
        "bluePicton": "#00a6ed",
      }
    },
  },
  plugins: [],
}