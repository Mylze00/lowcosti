
// src/pages/ForgotPasswordPage.jsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande de réinitialisation de mot de passe pour:", email);
    alert(`Un lien de réinitialisation a été envoyé à : ${email} (si l'adresse existe).`);
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans antialiased py-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Récupération mot de passe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">E-mail</label>
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition duration-150 ease-in-out">
              <Mail className="absolute left-3 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none bg-white text-lg"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3.5 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 font-semibold text-lg tracking-wide transition duration-150 ease-in-out shadow-md"
          >
            Changer mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}

// src/pages/ForgotPasswordPage.jsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande de réinitialisation de mot de passe pour:", email);
    alert(`Un lien de réinitialisation a été envoyé à : ${email} (si l'adresse existe).`);
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans antialiased py-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Récupération mot de passe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">E-mail</label>
            <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition duration-150 ease-in-out">
              <Mail className="absolute left-3 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none bg-white text-lg"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3.5 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 font-semibold text-lg tracking-wide transition duration-150 ease-in-out shadow-md"
          >
            Changer mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;