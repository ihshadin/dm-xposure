/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectCoverflow } from "swiper/modules";
import slide1 from "@/assets/images/png/slide-1.jpg";
import SliderCard from "./SliderCard";
import { PaginationOptions } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/service.css";

const data = [
  {
    img: slide1.src,
    title: "Web Development",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "MOBILE APP DEVELOPMENT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "DIGITAL MARKETING STRATEGY",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
];

const SlidersContainer = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Format slide number to always show two digits
  const formatSlideNumber = (number: number) => {
    return number < 9 ? `0${number + 1}` : number + 1;
  };

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index: any, className: any) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Active pagination */}
      <div className="text-7xl font-semibold transition-all duration-500">
        {formatSlideNumber(activeSlide)}
      </div>
      <Swiper
        direction={"vertical"}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={200}
        mousewheel={true}
        // loop={true}
        freeMode={true}
        speed={1000}
        pagination={pagination as PaginationOptions}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[Mousewheel, Pagination, EffectCoverflow]}
        onSlideChange={handleSlideChange}
        className="service-swiper h-screen w-full"
      >
        {data.map((service, index) => (
          <SwiperSlide key={index} className="!h-auto">
            {/* <div className="flex items-center gap-14"> */}
            <SliderCard service={service} />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination text-white !static *:!h-3 *:!w-3 *:!bg-secondary *:rounded-full"></div>
    </div>
  );
};

export default SlidersContainer;
