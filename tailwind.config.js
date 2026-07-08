/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7B61FF',
        secondary: '#1CC8FF',
        accent: '#9B5CFF',
        bg: '#09090B',
        subtext: '#B8B8C0',
      },
      fontFamily: {
        heading: ["'Space Grotesk'", 'sans-serif'],
        body: ["'Inter'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
