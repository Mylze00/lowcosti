// src/components/ProductGrid.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

import allProducts from '../data/products'; // Assurez-vous que le chemin est correct

function ProductGrid() {
  const { addToCart } = useCart();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    // --- NOUVEAUX CONSOLE.LOG POUR LE DÉBOGAGE ---
    console.log("1. location.search:", location.search); // Vérifie le paramètre brut de l'URL
    const query = new URLSearchParams(location.search).get('q');
    console.log("2. Query param 'q':", query); // Vérifie le terme de recherche extrait

    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      console.log("3. Lower case query:", lowerCaseQuery); // Vérifie le terme en minuscules

      const results = allProducts.filter(product => {
        const match = 
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery) ||
          product.seller.toLowerCase().includes(lowerCaseQuery) ||
          product.location.toLowerCase().includes(lowerCaseQuery);
        // --- CONSOLE.LOG POUR CHAQUE PRODUIT PENDANT LE FILTRAGE ---
        // console.log(`  - Checking product: ${product.name}, Match: ${match}`);
        return match;
      });
      console.log("4. allProducts (content):", allProducts); // Vérifie le contenu de base de tous les produits
      console.log("5. Filtered results:", results); // Vérifie le résultat du filtre

      setFilteredProducts(results);
    } else {
      console.log("6. No query, showing all products.");
      setFilteredProducts(allProducts);
    }
  }, [location.search]);

  // Reste du code du composant ProductGrid...
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {new URLSearchParams(location.search).get('q') ? 'Résultats de la recherche' : 'Nos Derniers Produits'}
      </h2>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 text-lg">Aucun produit trouvé pour votre recherche.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                <Link to={`/product/${product.id}`} className="hover:text-blue-600">
                  {product.name}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">{product.price.toFixed(2)} USD</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-label="Ajouter au panier"
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;