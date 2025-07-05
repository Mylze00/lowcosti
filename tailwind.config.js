/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#084f87',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // ✅ Ajout du plugin
  ],
};
