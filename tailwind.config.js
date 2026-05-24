module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f5ff',
          500: '#3b82f6',
          600: '#2563eb',
          950: '#030712'
        }
      }
    },
  },
  plugins: [],
}