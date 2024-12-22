/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cream': '#E9EFEC',
        'light-gray': '#C4DAD2',
        'green-gray': '#6A9C89',
        'deep-green': '#16423C',
      },
      fontFamily: {
        kholic: ['Kholic', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}
