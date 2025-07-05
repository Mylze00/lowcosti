import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, ChevronDown } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Header() {
  const { getCartItemCount } = useCart();
  const { user, logout } = useAuth();
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

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="bg-primaryBlue text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo */}
        <div className="mb-2 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="LowCost RDC" className="h-20 w-auto" />
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
            className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 p-2 rounded-r-md"
          >
            <Search className="h-6 w-6" />
          </button>
        </form>

        {/* Menu utilisateur & icônes (desktop) */}
        <nav className="hidden sm:flex items-center space-x-4 md:order-3">
          <Link to="/cart" className="relative hover:text-blue-200">
            <ShoppingCart className="h-6 w-6" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </Link>

          <Link to="/wishlist" className="hover:text-blue-200">
            <Heart className="h-6 w-6" />
          </Link>

          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center gap-1 hover:text-blue-200">
                {user.displayName || 'Mon compte'}
                <ChevronDown className="h-4 w-4" />
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
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Mon profil
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/add-product"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Vendre un produit
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block w-full text-left px-4 py-2 text-sm text-red-600'
                        )}
                      >
                        Se déconnecter
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link to="/login" className="hover:text-blue-200 text-sm">
              Se connecter
            </Link>
          )}
        </nav>
      </div>

      {/* Barre de recherche (mobile) */}
      <form onSubmit={handleSearchSubmit} className="mt-2 w-full md:hidden px-4">
        <input
          type="text"
          placeholder="Rechercher des produits..."
          className="w-full p-2 rounded-md text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 p-2 rounded-md mt-2 w-full text-white"
        >
          Rechercher
        </button>
      </form>

      {/* Icônes mobile (visible uniquement sur petit écran) */}
      <nav className="flex sm:hidden justify-around mt-4 text-white">
        <Link to="/cart" className="relative" aria-label="Panier">
          <ShoppingCart className="h-6 w-6" />
          {getCartItemCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </Link>

        <Link to="/wishlist" aria-label="Souhaits">
          <Heart className="h-6 w-6" />
        </Link>

        {user ? (
          <Link to="/profile" aria-label="Mon profil">
            <img
              src={user.photoURL || '/default-avatar.png'}
              alt="Avatar"
              className="h-6 w-6 rounded-full border-2 border-white"
            />
          </Link>
        ) : (
          <Link to="/login" className="text-sm">
            Connexion
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
