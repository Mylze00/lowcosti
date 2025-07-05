// src/components/Header.jsx
import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { getCartItemCount } = useCart();
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?q=${searchTerm.trim()}`);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="bg-primaryBlue text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo à gauche */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="LowCost RDC" className="h-14 w-auto" />
        </Link>

        {/* Barre de recherche (icône uniquement) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-blue-200 transition"
            aria-label="Rechercher"
          >
            <Search className="h-6 w-6" />
          </button>

          {showSearch && (
            <form onSubmit={handleSearchSubmit} className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded shadow p-2 z-50">
              <input
                type="text"
                placeholder="Rechercher..."
                className="border text-black px-4 py-1 rounded focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          )}

          {/* Icône Panier */}
          <Link to="/cart" className="relative hover:text-blue-200">
            <ShoppingCart className="h-6 w-6" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </Link>

          {/* Icône Utilisateur ou Menu déroulant */}
          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="hover:text-blue-200">
                <User className="h-6 w-6" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white text-gray-800 rounded-md shadow-lg z-50 focus:outline-none">
                  <Menu.Item>
                    <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Mon profil
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/add-product" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Vendre un produit
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Se déconnecter
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link to="/login" className="hover:text-blue-200" aria-label="Se connecter">
              <User className="h-6 w-6" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
