// src/components/BottomNavigationBar.jsx
import React from 'react';
import { Home, LayoutGrid, User, ShoppingCart } from 'lucide-react'; // Icônes
import { useLocation, Link } from 'react-router-dom';

function BottomNavigationBar() {
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', icon: Home, link: '/' },
    { name: 'Catégories', icon: LayoutGrid, link: '/categories' },
    { name: 'Panier', icon: ShoppingCart, link: '/cart' },
    { name: 'Profil', icon: User, link: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg sm:hidden z-50">
      <div className="flex justify-around h-16 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.link;

          return (
            <Link
              key={item.name}
              to={item.link}
              className={`flex flex-col items-center justify-center text-xs font-medium px-2 py-1 rounded-lg ${
                isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
              } transition-colors duration-200`}
            >
              <Icon className={`h-6 w-6 mb-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigationBar;
