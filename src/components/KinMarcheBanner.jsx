// src/components/KinMarcheBanner.jsx
import React from 'react';

function KinMarcheBanner() {
  // N'oubliez pas de placer votre image 'kinmarche-banner.webp'
  // dans le dossier 'public/images/' de votre projet.
  // Assurez-vous qu'elle soit optimisée en taille et en poids !
  const bannerImage = '/images/kinmarche-banner.webp'; // Chemin vers votre image

  return (
    <div className="p-4 mt-4 mx-4"> {/* Conteneur avec padding et marges */}
      <div
        className="relative bg-cover bg-center h-48 rounded-lg shadow-md flex flex-col justify-center items-center text-white p-4"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Texte superposé */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center drop-shadow-lg">
          KINMARCHE
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-center mt-1 drop-shadow-lg">
          Achetez et Gagnez
        </p>
        <p className="text-lg sm:text-xl font-bold bg-blue-600 px-4 py-1 rounded-full mt-4 drop-shadow-lg">
          Profitez à 1$
        </p>
      </div>
    </div>
  );
}

export default KinMarcheBanner;