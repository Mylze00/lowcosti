// src/components/HeroCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const banners = [
  { id: 1, image: '/images/banner-marketplace.webp', alt: 'Marketplace Congolaise' },
  { id: 2, image: '/images/banner-offres.webp', alt: 'Offres spéciales' },
];

function HeroCarousel() {
  return (
    <div className="p-4 bg-gray-100">
      {/* Flex container to split the section into two parts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Banner Section */}
        <div className="w-full sm:w-1/2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-lg shadow-md"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-[250px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Second Banner Section with New Instructions */}
        <div className="w-full sm:w-1/2 bg-white p-4 rounded-lg shadow-md">
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

export default HeroCarousel;
