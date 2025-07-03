// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ceci est crucial pour scanner les fichiers JS/JSX dans src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};