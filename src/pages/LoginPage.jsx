// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Assurez-vous que lucide-react est installé

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLogin = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Tentative de connexion avec:", { email, password });
    // Ici, vous ajouteriez la logique d'authentification réelle (API backend)
  };

  // La fonction handleSocialLogin n'est plus nécessaire car les boutons sont supprimés.
  // Vous pouvez la retirer si vous le souhaitez, ou la laisser si vous prévoyez de la réutiliser.
  // const handleSocialLogin = (platform) => {
  //   console.log(`Tentative de connexion avec ${platform}`);
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans antialiased py-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm border border-gray-200">
        {/* Logo principal */}
        <div className="flex justify-center mb-8">
          {/* Assurez-vous que le chemin de votre logo est correct. */}
          {/* Si votre logo est dans 'public/logo.png', utilisez '/logo.png' */}
          {/* Si votre logo est dans 'src/assets/logo.png', utilisez '/src/assets/logo.png' (comme ci-dessous) */}
          <img
            src="/src/assets/logo.png" // Vérifiez ce chemin !
            alt="Logo Low Cost Market"
            className="h-16 w-auto object-contain" // Taille ajustée (h-16)
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Se connecter</h2>

        {/* Formulaire de connexion Email/Prénom */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Champ E-mail ou Prénom */}
          <div>
            <label htmlFor="email" className="sr-only">E-mail ou prénom</label>
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition duration-150 ease-in-out">
              <Mail className="absolute left-3 text-gray-400" size={20} />
              <input
                type="text"
                id="email"
                name="email"
                className="w-full pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none bg-white text-lg"
                placeholder="E-mail ou prénom"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label htmlFor="password" className="sr-only">Mot de passe</label>
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition duration-150 ease-in-out">
              <Lock className="absolute left-3 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full pl-10 pr-10 py-2.5 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none bg-white text-lg"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="text-right mt-2">
              <Link to="/forgot-password" className="text-sm text-indigo-600 hover:underline font-medium">
                Mot de passe oublié?
              </Link>
            </div>
          </div>

          {/* Bouton de connexion */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3.5 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 font-semibold text-lg tracking-wide transition duration-150 ease-in-out shadow-md"
          >
            Connexion
          </button>
        </form>

        {/* La section "S'enregistrer avec :" et les icônes sociales ont été supprimées */}

        {/* Section "Pas encore de compte ?" */}
        <p className="text-center text-gray-600 text-base mt-6">
          Vous n'avez pas de compte ?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline font-semibold ml-1">
            S'enregistrer ici
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;