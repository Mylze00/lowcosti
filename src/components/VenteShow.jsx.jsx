import React, { useState, useEffect } from 'react';
import { Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const sampleAuctions = [
  {
    id: 1,
    productName: 'Smartphone X Pro Ultra',
    currentBid: 550,
    currency: '$',
    imageUrl: '/images/smartphone-enchere.webp',
    endTime: '2025-07-10T18:00:00Z',
  },
  {
    id: 2,
    productName: 'TV OLED 55"',
    currentBid: 900,
    currency: '$',
    imageUrl: '/images/tv-enchere.jpg',
    endTime: '2025-07-09T15:30:00Z',
  },
  {
    id: 3,
    productName: 'Ordinateur Portable',
    currentBid: 720,
    currency: '$',
    imageUrl: '/images/laptop-enchere.jpg',
    endTime: '2025-07-08T20:00:00Z',
  },
  {
    id: 4,
    productName: 'Casque Audio',
    currentBid: 75,
    currency: '$',
    imageUrl: '/images/casque-enchere.jpg',
    endTime: '2025-07-07T22:00:00Z',
  },
  {
    id: 5,
    productName: 'Montre Connectée',
    currentBid: 120,
    currency: '$',
    imageUrl: '/images/montre-enchere.jpg',
    endTime: '2025-07-06T19:45:00Z',
  },
];

function VenteShow() {
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const updateTimers = () => {
      const newTimers = {};
      sampleAuctions.forEach((auction) => {
        const diff = +new Date(auction.endTime) - +new Date();
        if (diff > 0) {
          newTimers[auction.id] = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
          };
        } else {
          newTimers[auction.id] = null;
        }
      });
      setTimers(newTimers);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 mt-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 px-2">Vente Show</h3>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 px-2">
          {sampleAuctions.map((auction) => {
            const timer = timers[auction.id];
            return (
              <Link
                key={auction.id}
                to={`/product/${auction.id}`}
                className="min-w-[160px] max-w-[180px] bg-white shadow rounded-lg p-2 flex-shrink-0"
              >
                <div className="h-[100px] flex items-center justify-center overflow-hidden mb-2">
                  <img
                    src={auction.imageUrl}
                    alt={auction.productName}
                    className="h-full object-contain rounded"
                  />
                </div>
                <h4 className="text-sm font-bold text-gray-800 truncate">{auction.productName}</h4>
                <p className="text-xs text-gray-500">Actuel : {auction.currentBid}{auction.currency}</p>

                <div className="flex items-center text-sm text-red-600 mt-1">
                  <Clock3 className="h-4 w-4 mr-1" />
                  {timer ? (
                    <span>
                      {String(timer.hours).padStart(2, '0')}h :
                      {String(timer.minutes).padStart(2, '0')}m :
                      {String(timer.seconds).padStart(2, '0')}s
                    </span>
                  ) : (
                    <span>Terminé</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VenteShow;
