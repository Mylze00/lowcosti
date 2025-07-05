// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';

function CategoryPage() {
  const { categoryId } = useParams();
  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === categoryId.toLowerCase()
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        Catégorie : {categoryId}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>Aucun produit trouvé dans cette catégorie.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <Link key={product.id} to={`/produit/${product.id}`}>
              <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200 bg-white">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-blue-600 font-bold">{product.price} $</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
