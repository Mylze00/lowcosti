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
  { id: 3, image: '/images/banner3.webp', alt: 'Nouvelle promotion' }, // Chemin mis à jour
];

function HeroCarousel() {
  return (
    <div className="p-4 bg-gray-100">
      {/* Flex container for the carrousel */}
      <div className="w-full h-[300px]">
        <Swiper
          spaceBetween={30} // Espace entre les diapositives
          centeredSlides={true}
          autoplay={{
            delay: 3500, // Temps entre chaque slide (en ms)
            disableOnInteraction: false, // Ne pas désactiver l'autoplay après interaction
          }}
          speed={1000} // Ralentir la vitesse du slide (en ms)
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg shadow-md h-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-fill rounded-lg" // Étire l'image pour remplir le cadre
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroCarousel;
