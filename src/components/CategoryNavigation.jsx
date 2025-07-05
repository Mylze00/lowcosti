// src/components/CategoryNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'phones', name: 'Téléphones', imageUrl: '/images/categories/phones.png' },
  { id: 'fashion', name: 'Mode', imageUrl: '/images/categories/fashion.png' },
  { id: 'electronics', name: 'Électronique', imageUrl: '/images/categories/electronics.png' },
  { id: 'home', name: 'Maison', imageUrl: '/images/categories/home.png' },
  { id: 'used', name: 'Occasion', imageUrl: '/images/categories/used.png' },
  { id: 'pawn', name: 'Gage', imageUrl: '/images/categories/pawn.png' },
];

function CategoryNavigation() {
  return (
    <div className="bg-white py-4 px-4 shadow-sm">
      {/* Mobile : défilement horizontal */}
      <div className="flex gap-4 overflow-x-auto sm:hidden scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex-shrink-0 flex flex-col items-center text-center w-20"
          >
            <div className="w-20 h-20 border border-gray-300 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="object-contain w-16 h-16"
              />
            </div>
            <span className="text-xs font-medium text-gray-700 mt-2">{category.name}</span>
          </Link>
        ))}
      </div>

      {/* Desktop/Tablette : grille fixe */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center mt-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 border border-gray-300 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="object-contain w-20 h-20"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 mt-2">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryNavigation;
