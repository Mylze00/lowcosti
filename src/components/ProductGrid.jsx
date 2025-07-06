import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import allProducts from '../data/products';

function ProductGrid() {
  const { addToCart } = useCart();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');

    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.seller.toLowerCase().includes(lowerCaseQuery) ||
        product.location.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [location.search]);

  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        {new URLSearchParams(location.search).get('q') ? 'Résultats de la recherche' : 'Nos Derniers Produits'}
      </h2>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 text-lg">Aucun produit trouvé pour votre recherche.</p>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to={`/product/${product.id}`}>
              <div className="w-full h-24 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="p-2">
              <h3 className="text-xs font-semibold text-gray-800 truncate">
                <Link to={`/product/${product.id}`} className="hover:text-blue-600">
                  {product.name}
                </Link>
              </h3>
              <p className="text-gray-600 text-[11px] mb-1 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[13px] font-bold text-blue-600">
                  {product.price.toFixed(2)} USD
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-full"
                  aria-label="Ajouter au panier"
                >
                  <ShoppingCart className="h-4 w-4" />
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
