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
      {/* Flex container to display items side by side on all screen sizes */}
      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        {/* First Banner Section with Adjusted Image Size */}
        <div className="w-full sm:w-1/2 h-[300px]">
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

        {/* Second Section with Video */}
        <div className="w-full sm:w-1/2 h-[300px] bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            autoPlay
            muted
          >
            <source src="/path/to/your-video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
