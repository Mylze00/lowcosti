// src/components/Header.jsx
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { debounce } from 'lodash'; // Importer la fonction debounce de lodash

function Header() {
  const { getCartItemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  
  // Chargement des produits
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllProducts(products);
      } catch (error) {
        console.error('Erreur chargement produits :', error);
      }
    };
    fetchProducts();
  }, []);

  // Fonction de recherche avec debounce pour limiter les appels rapides
  const handleSearchChange = debounce((term) => {
    if (term.length > 0) {
      const filtered = allProducts.filter(product =>
        product.title?.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limiter à 5 suggestions
    } else {
      setSuggestions([]);
    }
  }, 300); // 300ms de délai avant d'exécuter la fonction

  useEffect(() => {
    if (searchTerm) {
      handleSearchChange(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  // Soumettre la recherche
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowSearch(false);
    }
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    navigate(`/?q=${encodeURIComponent(title)}`);
    setShowSearch(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="bg-primaryBlue text-white p-4 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="LowCost RDC" className="h-14 w-auto" />
        </Link>

        {/* Icônes à droite */}
        <div className="flex items-center space-x-4">
          {/* Icône de recherche */}
          <div className="relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-blue-200 transition"
              aria-label="Rechercher"
            >
              <Search className="h-6 w-6" />
            </button>

            {showSearch && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2 w-72 z-50"
              >
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="w-full px-3 py-2 border rounded text-black focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {suggestions.length > 0 && (
                  <ul className="mt-2 border rounded text-black max-h-48 overflow-y-auto">
                    {suggestions.map(product => (
                      <li
                        key={product.id}
                        onClick={() => handleSuggestionClick(product.title)}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {product.title}
                      </li>
                    ))}
                  </ul>
                )}
              </form>
            )}
          </div>

          {/* Panier */}
          <Link to="/panier" className="relative hover:text-blue-200">
            <ShoppingCart className="h-6 w-6" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </Link>

          {/* Utilisateur connecté ou non */}
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
