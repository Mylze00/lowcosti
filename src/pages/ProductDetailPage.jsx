// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import products from '../data/products'; // <-- NOUVELLE LIGNE : Importe les produits depuis le fichier centralisé

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id); // Utilise 'products' importé

  if (!product) {
    return (
      <div className="p-4 mt-8 text-center text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Produit non trouvé</h2>
        <p>L'identifiant du produit "{id}" ne correspond à aucun article.</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="p-4 mt-4 mx-auto max-w-4xl bg-white rounded-lg shadow-md">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Retour à l'accueil
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-xl font-extrabold text-blue-600 mb-4">{product.price}{product.currency}</p>

          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="text-sm text-gray-600 mb-4">
            <p>Vendu par: <span className="font-semibold">{product.seller}</span></p>
            <p>Localisation: <span className="font-semibold">{product.location}</span></p>
          </div>

          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
            onClick={() => addToCart(product)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;