// src/components/CategoryNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Shirt, Tv, Home } from 'lucide-react'; // Icônes lucide-react

const categories = [
  { id: 'phones', name: 'Téléphones', icon: Smartphone },
  { id: 'fashion', name: 'Mode', icon: Shirt },
  { id: 'electronics', name: 'Électronique', icon: Tv },
  { id: 'home', name: 'Maison', icon: Home },
  // Ajoute d'autres catégories ici
];

function CategoryNavigation() {
  return (
    <div className="bg-white py-6 px-4 shadow-sm">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex flex-col items-center text-center text-blue-800 hover:text-blue-600 transition-colors"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-2 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryNavigation;
