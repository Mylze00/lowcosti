/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan tous les fichiers JS/TS/JSX/TSX dans src
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#084f87', // ✅ Couleur personnalisée ajoutée
      },
    },
  },
  plugins: [],
};
