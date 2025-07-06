// src/components/KinMarcheBanner.jsx
import React, { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    image: '/images/kinmarche-banner.webp',
    title: 'KINMARCHE',
    subtitle: 'Achetez et Gagnez',
    promo: 'Profitez à 1$',
  },
  {
    id: 2,
    image: '/images/kinmarche-banner2.webp',
    title: 'VENTE FLASH',
    subtitle: 'Offres valables aujourd’hui',
    promo: 'À ne pas rater',
  },
  {
    id: 3,
    image: '/images/kinmarche-banner3.webp',
    title: 'LIVRAISON EXPRESS',
    subtitle: 'Partout à Kinshasa',
    promo: 'Commandez maintenant',
  },
];

function KinMarcheBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Cycle through banners every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4 px-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* First Banner Section */}
      <div className="w-full sm:w-1/2 space-y-4">
        <div
          key={banners[currentBanner].id}
          className="relative bg-cover bg-center h-56 sm:h-72 rounded-lg shadow-lg flex flex-col justify-center items-center text-white p-4 transition-all duration-500"
          style={{ backgroundImage: `url(${banners[currentBanner].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-shadow-xl">
            {banners[currentBanner].title}
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-center mt-1 text-shadow-lg">
            {banners[currentBanner].subtitle}
          </p>
          <p className="text-lg sm:text-xl font-bold bg-blue-600 px-4 py-1 rounded-full mt-4 text-center text-shadow-lg">
            {banners[currentBanner].promo}
          </p>
        </div>
      </div>

      {/* Second Banner Section with New Instructions */}
      <div className="w-full sm:w-1/2 space-y-4">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold text-center">Nouvelles Instructions</h2>
          <p className="mt-2 text-lg">
            Vous pouvez insérer ici de nouvelles informations, des promotions supplémentaires ou des
            instructions spécifiques pour l'utilisateur. Cela pourrait être une mise en avant de produits,
            des offres exclusives ou toute autre information importante que vous souhaitez partager.
          </p>
          <p className="mt-4 text-xl font-bold text-center">Profitez-en maintenant !</p>
        </div>
      </div>
    </div>
  );
}

export default KinMarcheBanner;
