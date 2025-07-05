// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Header() {
  const { getCartItemCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?q=${searchTerm.trim()}`);
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo (image uniquement, taille doublée) */}
        <div className="mb-2 md:mb-0">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="LowCost RDC"
              className="h-20 w-auto" // hauteur doublée
            />
          </Link>
        </div>

        {/* Barre de recherche (desktop) */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex-grow mx-4 max-w-xl hidden md:flex md:order-2"
        >
          <input
            type="text"
            placeholder="Rechercher des produits..."
            className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 p-2 rounded-r-md transition-colors duration-200"
            aria-label="Rechercher"
          >
            <Search className="h-6 w-6" />
          </button>
        </form>

        {/* Icônes (desktop) */}
        <nav className="hidden sm:flex items-center space-x-4 md:order-3">
          <Link to="/" className="hover:text-blue-200 transition-colors duration-200" aria-label="Accueil">
            <span className="hidden md:inline">Accueil</span>
          </Link>

          <Link to="/cart" className="relative hover:text-blue-200 transition-colors duration-200" aria-label="Panier">
            <ShoppingCart className="h-6 w-6" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </Link>

          <Link to="/profile" className="hover:text-blue-200 transition-colors duration-200" aria-label="Mon compte">
            <User className="h-6 w-6" />
          </Link>

          <Link to="/wishlist" className="hover:text-blue-200 transition-colors duration-200" aria-label="Liste de souhaits">
            <Heart className="h-6 w-6" />
          </Link>
        </nav>
      </div>

      {/* Barre de recherche (mobile) */}
      <form onSubmit={handleSearchSubmit} className="mt-2 w-full md:hidden px-4">
        <input
          type="text"
          placeholder="Rechercher des produits..."
          className="w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 p-2 rounded-md transition-colors duration-200 mt-2 w-full"
          aria-label="Rechercher"
        >
          <div className="flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            <span>Rechercher</span>
          </div>
        </button>
      </form>
    </header>
  );
}

export default Header;
