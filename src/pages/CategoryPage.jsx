// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryPage() {
  // useParams nous permet de récupérer les paramètres de l'URL, comme :categoryName
  const { categoryName } = useParams(); 
  const displayCategoryName = categoryName ? 
                              categoryName.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                              : 'Toutes les catégories'; // Formate le nom

  return (
    <div className="p-4 mt-4 mx-auto max-w-4xl bg-white rounded-lg shadow-md">
      {/* Bouton Retour */}
      <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Retour à l'accueil
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Catégorie : {displayCategoryName}
      </h1>

      <div className="text-center py-10 text-gray-600">
        <p className="mb-4">
          Ici, vous verrez la liste des produits pour la catégorie "{displayCategoryName}".
        </p>
        <p>
          Cette page est en cours de construction et affichera bientôt les produits pertinents.
        </p>
      </div>
    </div>
  );
}

export default CategoryPage;