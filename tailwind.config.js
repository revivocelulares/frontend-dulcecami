export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'Ocre-DulceCami': '#fedfc3'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

