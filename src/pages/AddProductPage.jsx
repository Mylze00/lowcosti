// src/pages/AddProductPage.jsx
import React, { useState } from 'react';

function AddProductPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Produit ajouté : ${title} - ${price} $`);
    // 🚧 Ici, tu ajouteras l'enregistrement dans Firestore
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Mettre un produit en vente</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom du produit"
          className="w-full border px-4 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Prix (USD)"
          className="w-full border px-4 py-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Ajouter le produit
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
