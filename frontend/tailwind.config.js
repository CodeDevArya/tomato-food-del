/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'text-foodDisplay': 'max(2vw, 24px)',
        'app-download-main': 'max(3vw, 20px)',
      },
      width:{
        'app-download-image': 'max(23vw, 330px)',
        'login-container': 'max(30vw, 320px)',
      },
      boxShadow: {
        'fooditemboxshadow': '0px 0px 10px #00000015',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s',
        fadeIn2: 'fadeIn 1s ease-in-out', // You can customize the duration and easing
        fadeIn3: 'fadeIn 2s ease-in-out', // You can customize the duration and easing
      },
    },
  },
  plugins: [],
}