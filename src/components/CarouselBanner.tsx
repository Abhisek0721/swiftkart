"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { JSX } from "react/jsx-runtime";


export default function CarouselBanner(
  {banners} : {
    banners: {
      name: string;
      path: string;
    }[]
  }
):JSX.Element {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[
        Autoplay, 
        Pagination,
        Navigation
      ]}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="cursor-pointer">
            <img className="cursor-pointer mx-auto w-[100%] h-auto rounded-sm select-none" src={banner.path} alt={banner.name} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
