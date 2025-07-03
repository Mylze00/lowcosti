// src/components/BottomNavigationBar.jsx
import React from 'react';
import { Home, LayoutGrid, User, ShoppingCart } from 'lucide-react'; // Icônes

function BottomNavigationBar() {
  const navItems = [
    { name: 'Accueil', icon: Home, link: '/' },
    { name: 'Catégories', icon: LayoutGrid, link: '/categories' },
    { name: 'Panier', icon: ShoppingCart, link: '/cart' }, // Ajouté un panier, commun pour e-commerce
    { name: 'Profil', icon: User, link: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg sm:hidden z-50">
      <div className="flex justify-around h-16 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          // Pour l'exemple, 'Accueil' est actif. Dans une vraie app, ça dépendrait de la route actuelle.
          const isActive = item.name === 'Accueil'; 
          return (
            <a
              key={item.name}
              href={item.link}
              className={`flex flex-col items-center justify-center text-xs font-medium px-2 py-1 rounded-lg ${
                isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
              } transition-colors duration-200`}
            >
              <Icon className={`h-6 w-6 mb-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigationBar;