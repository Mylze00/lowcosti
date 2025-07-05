import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-700">Vous n'êtes pas connecté.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Mon profil</h2>

      <div className="flex flex-col items-center space-y-4">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="Photo de profil"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
        )}
        <div className="text-center">
          <p className="font-medium text-lg">{user.displayName || 'Nom non disponible'}</p>
          <p className="text-gray-600">{user.email || 'Téléphone : Non défini'}</p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
