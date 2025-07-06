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
      {/* Flex container for the carrousel */}
      <div className="w-full h-[300px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
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
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroCarousel;
