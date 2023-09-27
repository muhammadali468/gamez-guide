// src/components/HomeBannerSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import { Pagination } from "swiper/modules";

import ValorantBanner  from "../../assets/images/Valorant/valorant-banner-img.png"
// SwiperCore.use([Pagination]);
const HomeBannerSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination]}
            style={{
                "--swiper-pagination-color": "#EB1C24",
                "--swiper-pagination-box-shadow": "0px 0px 105px 45px ",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-bullet-horizontal-gap": "2px"
              }}
            
        >
            <SwiperSlide className='px-3'>
                <img src={ValorantBanner} alt="Game-banner" className='object-cover w-full h-56 border border-red-glow' />
            </SwiperSlide>
            <SwiperSlide className='px-3'>
                <img src={ValorantBanner} alt="Game-banner" className='object-cover w-full h-56 border border-red-glow' />
            </SwiperSlide>
            <SwiperSlide className='px-3'>
                <img src={ValorantBanner} alt="Game-banner" className='object-cover w-full h-56 border border-red-glow' />
            </SwiperSlide>
            <SwiperSlide className='px-3'>
                <img src={ValorantBanner} alt="Game-banner" className='object-cover w-full h-56 border border-red-glow' />
            </SwiperSlide>
            {/* Add more slides as needed */}
        </Swiper>
    );
};

export default HomeBannerSlider;
