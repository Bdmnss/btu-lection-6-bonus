/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
        },
        dark: {
          background: '#000000',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}