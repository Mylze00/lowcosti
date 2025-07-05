import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'phones', name: 'Téléphones', iconUrl: '/images/categories/phones.png' },
  { id: 'fashion', name: 'Mode', iconUrl: '/images/categories/fashion.png' },
  { id: 'electronics', name: 'Électronique', iconUrl: '/images/categories/electronics.png' },
  { id: 'home', name: 'Maison', iconUrl: '/images/categories/home.png' },
  { id: 'used', name: 'Occasion', iconUrl: '/images/categories/used.png' },
  { id: 'pawn', name: 'Gage', iconUrl: '/images/categories/pawn.png' },
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
            className="flex-shrink-0 flex flex-col items-center text-center text-blue-800 hover:text-blue-600 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-2">
              <img src={category.iconUrl} alt={category.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xs font-medium">{category.name}</span>
          </Link>
        ))}
      </div>

      {/* Desktop : grille classique */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center mt-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex flex-col items-center text-center text-blue-800 hover:text-blue-600 transition-colors"
          >
            <div className="w-20 h-20 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-2">
              <img src={category.iconUrl} alt={category.name} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryNavigation;
