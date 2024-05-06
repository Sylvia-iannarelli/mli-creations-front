/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "Black" : "#1E2832",
        "primaryBG" : "#1e28320d",
        "Blue1" : "#3b82f680",
        "Blue2" : "#1579c5",
        "Gold" : "#e6b162"
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

