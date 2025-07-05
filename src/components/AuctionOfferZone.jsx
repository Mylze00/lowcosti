import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Données simulées d’enchères
const fakeAuctions = [
  {
    id: '1',
    productName: 'Smartphone X Pro',
    currentBid: 550,
    currency: '$',
    imageUrl: '/images/smartphone-enchere.webp',
    endTime: '2025-07-06T12:00:00Z',
  },
  {
    id: '2',
    productName: 'TV 4K Ultra HD',
    currentBid: 720,
    currency: '$',
    imageUrl: '/images/tv-enchere.webp',
    endTime: '2025-07-06T14:30:00Z',
  },
  {
    id: '3',
    productName: 'Laptop Gamer',
    currentBid: 960,
    currency: '$',
    imageUrl: '/images/laptop-enchere.webp',
    endTime: '2025-07-06T18:45:00Z',
  },
];

function AuctionOfferZone() {
  const [timers, setTimers] = useState([]);

  // Calcul du temps restant
  const calculateTimeLeft = (endTime) => {
    const difference = +new Date(endTime) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimers = fakeAuctions.map((auction) =>
        calculateTimeLeft(auction.endTime)
      );
      setTimers(updatedTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 pt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
        <Clock className="w-5 h-5 text-red-600" />
        Enchères en cours
      </h3>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {fakeAuctions.map((auction, index) => {
          const timeLeft = timers[index];
          return (
            <Link
              to={`/product/${auction.id}`}
              key={auction.id}
              className="min-w-[200px] w-52 flex-shrink-0 bg-white shadow rounded-lg p-3"
            >
              <img
                src={auction.imageUrl}
                alt={auction.productName}
                className="h-36 w-full object-contain mb-2 border rounded"
              />
              <h4 className="font-semibold text-sm text-gray-800 truncate">
                {auction.productName}
              </h4>
              <p className="text-blue-600 font-bold text-lg">
                {auction.currentBid}
                {auction.currency}
              </p>

              {timeLeft ? (
                <div className="mt-2 text-xs text-gray-700 bg-red-100 text-red-700 rounded px-2 py-1 flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  {`${String(timeLeft.hours).padStart(2, '0')}h :
                    ${String(timeLeft.minutes).padStart(2, '0')}m :
                    ${String(timeLeft.seconds).padStart(2, '0')}s`}
                </div>
              ) : (
                <div className="text-sm text-gray-500 mt-2">Terminé</div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AuctionOfferZone;
