// postcss.config.js
export default {
  plugins: {
    // Ancien: tailwindcss: {},
    // Nouveau: Utilisez le plugin `@tailwindcss/postcss`
    '@tailwindcss/postcss': {}, // C'est la ligne à changer/ajouter
    autoprefixer: {},
  },
}