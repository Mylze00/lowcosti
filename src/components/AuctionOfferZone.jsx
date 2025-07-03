// src/components/AuctionOfferZone.jsx
import React, { useState, useEffect } from 'react'; // Importez useState et useEffect

function AuctionOfferZone() {
  const currentAuction = {
    id: 1,
    productName: "Smartphone X Pro Ultra",
    currentBid: 550,
    currency: "$",
    imageUrl: "/images/smartphone-enchere.webp",
    endTime: "2025-07-05T18:00:00Z", // Assurez-vous que cette date est FUTURE pour voir le décompte
  };

  // 1. Utilisez useState pour gérer l'état du temps restant
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Fonction pour calculer le temps restant (légèrement modifiée)
  function calculateTimeLeft() { // Changé en fonction normale pour faciliter l'appel
    const difference = +new Date(currentAuction.endTime) - +new Date();
    let remaining = {};

    if (difference > 0) {
      remaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return remaining;
  }

  // 2. Utilisez useEffect pour mettre à jour le temps chaque seconde
  useEffect(() => {
    // Créez un intervalle qui met à jour le temps restant toutes les 1000 ms (1 seconde)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Fonction de nettoyage : s'exécute lorsque le composant est démonté
    // pour éviter les fuites de mémoire (très important !)
    return () => clearInterval(timer);
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécute qu'une fois au montage du composant

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="text-xl font-bold mx-1">
        {timeLeft[interval] < 10 ? '0' + timeLeft[interval] : timeLeft[interval]}{interval.charAt(0)}
      </span>
    );
  });

  return (
    <div className="p-4 mt-4 mx-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-800 p-4 pb-2">Enchère en Cours !</h3>

        <div className="relative flex flex-col sm:flex-row items-center p-4 pt-0">
          <div className="sm:w-1/3 w-full flex justify-center mb-4 sm:mb-0">
            <img
              src={currentAuction.imageUrl}
              alt={currentAuction.productName}
              className="w-full sm:w-48 h-auto object-contain rounded-lg border border-gray-200"
            />
          </div>

          <div className="sm:w-2/3 w-full text-center sm:text-left sm:pl-6">
            <h4 className="text-lg font-bold text-gray-900 mb-2">{currentAuction.productName}</h4>
            <p className="text-sm text-gray-600 mb-2">Prix actuel:</p>
            <p className="text-3xl font-extrabold text-blue-600 mb-4">
              {currentAuction.currentBid}{currentAuction.currency}
            </p>

            <div className="bg-red-500 text-white rounded-full py-2 px-4 text-center text-sm font-medium flex items-center justify-center">
              <span className="mr-2">Fin dans:</span>
              {timerComponents.length ? timerComponents : <span className="font-bold">Terminé !</span>}
            </div>

            <button className="mt-4 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
              Enchérir maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionOfferZone;