// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { PlusCircle, ShoppingCart } from 'lucide-react';

function ProfilePage() {
  const { user, logout, updateProfile } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState(user?.displayName || '');
  const [userPhoto, setUserPhoto] = useState(user?.photoURL || '');

  // Fonction de déconnexion
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  // Fonction pour changer l'image de profil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Mettre à jour le profil
  const handleSaveProfile = () => {
    updateProfile(userName, userPhoto);
    alert('Profil mis à jour !');
  };

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-700">Vous n'êtes pas connecté.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6 space-y-6">
      <h2 className="text-xl font-bold text-blue-600">Mon profil</h2>

      <div className="flex flex-col items-center space-y-4">
        {/* Photo de profil */}
        {userPhoto && (
          <img
            src={userPhoto}
            alt="Photo de profil"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
        )}
        <input
          type="file"
          onChange={handleImageChange}
          className="mt-2"
        />
        <div className="text-center">
          {/* Champ pour changer le nom */}
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border px-2 py-1 rounded mt-2"
            placeholder="Modifier votre nom"
          />
          <p className="font-medium text-lg">{userName || 'Nom non disponible'}</p>
          <p className="text-gray-600">{user.email || 'Email non défini'}</p>
        </div>

        {/* 🔵 Ajouter un produit à vendre */}
        <Link
          to="/add-product"
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Mettre un produit en vente</span>
        </Link>

        {/* 🔴 Bouton Déconnexion */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Déconnexion
        </button>

        {/* 🛒 Liste des articles dans le panier */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Articles dans votre panier
          </h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Votre panier est vide.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="p-2 border rounded flex justify-between">
                  <span>{item.title}</span>
                  <span className="text-blue-600 font-semibold">{item.price} $</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
