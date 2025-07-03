// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Pour l'icône de recherche
import { Link } from 'react-router-dom'; // Pour les liens vers les catégories, etc.

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Recherche lancée pour :", searchTerm);
    // Ici, vous redirigeriez vers une page de résultats de recherche
    // ou déclencheriez une recherche sur une API.
  };

  // Données de catégories factices pour l'exemple
  const categories = [
    { name: 'Mode', icon: '👕' },
    { name: 'Électronique', icon: '📱' },
    { name: 'Maison', icon: '🛋️' },
    { name: 'Véhicules', icon: '🚗' },
    // Ajoutez plus de catégories si vous le souhaitez
  ];

  // Données de produits factices pour l'exemple
  const dummyProducts = [
    { id: 1, name: 'Smartphone X Pro Ultra', price: '550$', imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Smartphone' },
    { id: 2, name: 'Smartwatch Série 7', price: '120$', imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Smartwatch' },
    { id: 3, name: 'Écouteurs sans fil XYZ', price: '75$', imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Ecouteurs' },
    { id: 4, name: 'Casque Bluetooth Pro', price: '99$', imageUrl: 'https://via.placeholder.com/150/F7DC6F/000000?text=Casque' },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6 bg-gray-100">
      {/* Barre de recherche (souvent dans le Header, mais incluse ici pour la maquette) */}
      <div className="my-6">
        <form onSubmit={handleSearch} className="flex border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <input
            type="text"
            className="flex-grow p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Rechercher des produits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white p-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            aria-label="Rechercher"
          >
            <Search size={24} />
          </button>
        </form>
      </div>

      {/* Carrousel de Bannières Promotionnelles (Simulé) */}
      <div className="relative bg-gray-200 h-48 md:h-64 flex items-center justify-center text-center rounded-lg overflow-hidden shadow-md mb-8">
        {/* Ces images sont des placeholders. Vous devrez les remplacer par vos propres bannières */}
        <img
          src="https://via.placeholder.com/800x300/FF7F50/FFFFFF?text=Connectez+vous+avec+la+plus+grande+marketplace+congolaise"
          alt="Bannière promotionnelle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-white font-bold text-xl md:text-3xl p-4 bg-black bg-opacity-40 rounded">
          Connectez vous avec la plus grande marketplace congolaise
        </div>
        {/* Vous auriez ici des boutons de navigation pour un vrai carrousel */}
      </div>

      {/* Section Parcourir par catégorie */}
      <section className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Parcourir par catégorie</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/categories/${category.name.toLowerCase()}`}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-4xl mb-2">{category.icon}</span>
              <p className="text-sm font-medium text-gray-700">{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Section Enchère en Cours! (Simulée) */}
      <section className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Enchère en Cours!</h3>
        <div className="relative bg-purple-800 text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200/551A8B/FFFFFF?text=MOLOBELI+SHOW"
            alt="Molobeli Show Promotion"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-4xl font-bold mb-2">MOLOBELI Show</h4>
            <p className="text-lg">SOUHAITEZ-VOUS ÊTRE<br />L'INVITÉE DE MOLOBELI SHOW<br />SUR VOS ÉCRANS</p>
          </div>
          <div className="relative z-10 text-center">
            <p className="text-sm">Pour plus d'infos, contactez:</p>
            <p className="text-xl font-semibold">+243 811 660 000</p>
          </div>
        </div>
      </section>

      {/* Section Nouveaux Produits / Produits Populaires (Exemple) */}
      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Nos Nouveaux Produits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h4>
                <p className="text-indigo-600 font-bold mt-1">{product.price}</p>
                {/* Ici vous pourriez ajouter des étoiles de notation ou un bouton "Ajouter au panier" */}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;