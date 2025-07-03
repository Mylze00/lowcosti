// src/components/HeroCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Données des bannières utilisant les chemins du dossier public
const banners = [
  { id: 1, image: '/images/banner-marketplace.webp', alt: 'Connectez-vous à la plus grande Marketplace Congolaise' },
  { id: 2, image: '/images/banner-offres.webp', alt: 'Découvrez nos offres spéciales' },
  // Ajoutez d'autres bannières ici
];

function HeroCarousel() {
  return (
    <div className="p-4 bg-gray-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg shadow-md"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.image}
              alt={banner.alt}
              // Appliquez des styles pour assurer que l'image s'affiche bien
              // h-[250px] est une hauteur fixe, object-cover s'assurera qu'elle remplisse l'espace
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCarousel;