import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Shirt,
  Tv,
  Home,
  Tag,
  LockKeyhole
} from 'lucide-react';

const categories = [
  { id: 'phones', name: 'Téléphones', icon: Smartphone },
  { id: 'fashion', name: 'Mode', icon: Shirt },
  { id: 'electronics', name: 'Électronique', icon: Tv },
  { id: 'home', name: 'Maison', icon: Home },
  { id: 'occasion', name: 'Occasion', icon: Tag },
  { id: 'gage', name: 'Gage', icon: LockKeyhole },
];

function CategoryNavigation() {
  return (
    <div className="bg-white px-2 pt-2 pb-1 shadow-sm">
      {/* Mobile : défilement horizontal */}
      <div className="flex gap-3 overflow-x-auto sm:hidden scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex-shrink-0 flex flex-col items-center text-blue-800 hover:text-blue-600 transition-colors"
            >
              <div className="bg-blue-100 p-2 rounded-full flex items-center justify-center w-14 h-14">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-medium mt-1">{category.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Desktop : grille */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center mt-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex flex-col items-center text-blue-800 hover:text-blue-600 transition-colors"
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
