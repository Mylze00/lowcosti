import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'phones',
    name: 'Téléphones',
    imageUrl: '/images/categories/telephones.png',
  },
  {
    id: 'fashion',
    name: 'Mode',
    imageUrl: '/images/categories/mode.png',
  },
  {
    id: 'electronics',
    name: 'Électronique',
    imageUrl: '/images/categories/electronique.png',
  },
  {
    id: 'home',
    name: 'Maison',
    imageUrl: '/images/categories/maison.png',
  },
  {
    id: 'occasion',
    name: 'Occasion',
    imageUrl: '/images/categories/occasion.png',
  },
  {
    id: 'gage',
    name: 'Gage',
    imageUrl: '/images/categories/gage.png',
  },
];

function CategoryNavigation() {
  return (
    <div className="bg-white py-4 px-4 shadow-sm">
      {/* Version mobile : défilement horizontal */}
      <div className="flex gap-4 overflow-x-auto sm:hidden scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex-shrink-0 flex flex-col items-center text-center w-20"
          >
            <div className="w-16 h-16 border border-gray-300 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="object-contain w-10 h-10"
              />
            </div>
            <span className="text-xs font-medium text-gray-700 mt-2">{category.name}</span>
          </Link>
        ))}
      </div>

      {/* Version bureau/tablette : grille */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center mt-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 border border-gray-300 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="object-contain w-12 h-12"
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
