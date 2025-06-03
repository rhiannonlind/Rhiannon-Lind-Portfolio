/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ba5a31',    // Sinopia
        secondary: '#69dc9e',  // Emerald
        background: '#f5f5f7', // Light Pearl
        dark: '#333342',       // Deep Slate
        accent: '#e59f71',     // Buff
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} 