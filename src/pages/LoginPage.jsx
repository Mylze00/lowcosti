import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  if (!currentUser) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold mb-4">Aucun utilisateur connecté</h2>
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Se connecter
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Mon Profil</h2>

      <div className="flex items-center space-x-4 mb-4">
        {currentUser.photoURL && (
          <img
            src={currentUser.photoURL}
            alt="Profil"
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-medium">{currentUser.displayName || 'Nom non défini'}</p>
          <p className="text-gray-600">{currentUser.email}</p>
          <p className="text-gray-500 text-sm mt-1">{currentUser.phoneNumber || ''}</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
      >
        Se déconnecter
      </button>
    </div>
  );
}

export default ProfilePage;
