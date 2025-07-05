import React, { useState } from 'react';
import { Search } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import CategoryNavigation from '../components/CategoryNavigation';
import KinMarcheBanner from '../components/KinMarcheBanner';
import VenteShow from '../components/VenteShow';
import ProductGrid from '../components/ProductGrid';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Recherche lancée pour :", searchTerm);
    // Redirection ou appel d'API ici
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Barre de recherche */}
      <div className="p-4">
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
            className="bg-indigo-600 text-white p-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            aria-label="Rechercher"
          >
            <Search size={24} />
          </button>
        </form>
      </div>

      {/* Carrousel promotionnel */}
      <HeroCarousel />

      {/* Navigation par catégories */}
      <CategoryNavigation />

      {/* Bannière KINMARCHE */}
      <KinMarcheBanner />

      {/* Zone d'enchères Vente Show */}
      <VenteShow />

      {/* Grille des produits récents/populaires */}
      <ProductGrid />
    </div>
  );
}

export default HomePage;
