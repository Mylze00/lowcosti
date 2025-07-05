// src/components/KinMarcheBanner.jsx
import React from 'react';

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
  return (
    <div className="space-y-4 px-4 mt-4">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="relative bg-cover bg-center h-48 rounded-lg shadow-md flex flex-col justify-center items-center text-white p-4"
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center drop-shadow-lg">{banner.title}</h2>
          <p className="text-xl sm:text-2xl font-semibold text-center mt-1 drop-shadow-lg">{banner.subtitle}</p>
          <p className="text-lg sm:text-xl font-bold bg-blue-600 px-4 py-1 rounded-full mt-4 drop-shadow-lg">
            {banner.promo}
          </p>
        </div>
      ))}
    </div>
  );
}

export default KinMarcheBanner;
