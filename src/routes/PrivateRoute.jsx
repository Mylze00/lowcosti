// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Vous pouvez ajouter un message d'erreur pour informer l'utilisateur qu'il doit être connecté
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-bold text-red-600">Accès refusé</h2>
        <p className="text-gray-700">Vous devez être connecté pour accéder à cette page.</p>
        <Navigate to="/login" replace />
      </div>
    );
  }

  return children;
}

export default PrivateRoute;
