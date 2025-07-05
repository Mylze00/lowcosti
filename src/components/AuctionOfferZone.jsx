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
    endTime: '2025-07-07T12:00:00Z',
  },
  {
    id: '2',
    productName: 'TV 4K Ultra HD',
    currentBid: 720,
    currency: '$',
    imageUrl: '/images/tv-enchere.webp',
    endTime: '2025-07-07T14:30:00Z',
  },
  {
    id: '3',
    productName: 'Laptop Gamer',
    currentBid: 960,
    currency: '$',
    imageUrl: '/images/laptop-enchere.webp',
    endTime: '2025-07-07T18:45:00Z',
  },
  {
    id: '4',
    productName: 'Casque Bluetooth',
    currentBid: 120,
    currency: '$',
    imageUrl: '/images/casque-enchere.webp',
    endTime: '2025-07-07T19:45:00Z',
  },
  {
    id: '5',
    productName: 'Montre Connectée',
    currentBid: 99,
    currency: '$',
    imageUrl: '/images/montre-enchere.webp',
    endTime: '2025-07-07T20:45:00Z',
  },
];

function AuctionOfferZone() {
  const [timers, setTimers] = useState([]);

  const calculateTimeLeft = (endTime) => {
    const diff = +new Date(endTime) - +new Date();
    if (diff > 0) {
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
    return null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = fakeAuctions.map((auction) =>
        calculateTimeLeft(auction.endTime)
      );
      setTimers(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2 pt-4 sm:px-4">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
        Enchères en cours
      </h3>

      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-1">
        {fakeAuctions.map((auction, index) => {
          const timeLeft = timers[index];
          return (
            <Link
              to={`/product/${auction.id}`}
              key={auction.id}
              className="min-w-[140px] sm:min-w-[160px] w-[30%] bg-white shadow rounded p-2 flex-shrink-0"
            >
              <img
                src={auction.imageUrl}
                alt={auction.productName}
                className="h-24 w-full object-contain rounded border mb-1"
              />
              <h4 className="text-xs font-semibold text-gray-800 truncate">
                {auction.productName}
              </h4>
              <p className="text-blue-600 font-bold text-sm mb-1">
                {auction.currentBid}{auction.currency}
              </p>

              {timeLeft ? (
                <div className="text-[11px] text-red-600 bg-red-100 rounded px-2 py-1 flex items-center gap-1 justify-center">
                  <Clock className="w-3 h-3" />
                  {`${String(timeLeft.hours).padStart(2, '0')}h :
                    ${String(timeLeft.minutes).padStart(2, '0')}m :
                    ${String(timeLeft.seconds).padStart(2, '0')}s`}
                </div>
              ) : (
                <div className="text-xs text-gray-400">Terminé</div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AuctionOfferZone;
