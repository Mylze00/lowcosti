// src/components/CategoryNavigation.jsx
import React from 'react';
import { Shirt, Book, Coffee, Car, Laptop } from 'lucide-react'; // Assurez-vous que toutes ces icônes sont là

function CategoryNavigation() {
  const categories = [
    { name: "Mode", icon: Shirt },
    { name: "Livres", icon: Book },
    { name: "Électronique", icon: Laptop }, // Laptop est défini ici
    { name: "Maison", icon: Coffee },
    { name: "Véhicules", icon: Car },
  ];

  return (
    <div className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Parcourir par Catégorie</h2>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer text-center"
            >
              {category.icon && <category.icon className="h-8 w-8 text-blue-600 mb-2" />}
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryNavigation; // <-- CETTE LIGNE EST CRUCIALE ET DOIT ÊTRE PRÉSENTE !