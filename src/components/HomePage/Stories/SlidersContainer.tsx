/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectCoverflow } from "swiper/modules";
import { PaginationOptions } from "swiper/types";
import SliderCard from "@/components/HomePage/Stories/SliderCard";
import slide1 from "@/assets/images/png/story-1.png";
import slide2 from "@/assets/images/png/story-2.png";
import slide3 from "@/assets/images/png/story-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/stories.css";

const data = [
  {
    img: slide1.src,
    title: "The Rise of Artificial Intelligence: How AI is Revolutionizing IT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide2.src,
    title: "MOBILE APP DEVELOPMENT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide3.src,
    title: "DIGITAL MARKETING STRATEGY",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide2.src,
    title: "MOBILE APP DEVELOPMENT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "The Rise of Artificial Intelligence: How AI is Revolutionizing IT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide3.src,
    title: "DIGITAL MARKETING STRATEGY",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide2.src,
    title: "MOBILE APP DEVELOPMENT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "The Rise of Artificial Intelligence: How AI is Revolutionizing IT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide3.src,
    title: "DIGITAL MARKETING STRATEGY",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
];

const SlidersContainer = () => {
  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index: any, className: any) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <div className="flex justify-center items-center relative">
      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        mousewheel={{
          enabled: true,
          releaseOnEdges: true,
        }}
        speed={800}
        pagination={pagination as PaginationOptions}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 110,
          modifier: 3,
          slideShadows: false,
        }}
        breakpoints={{
          1024: {
            spaceBetween: 30,
            coverflowEffect: {
              rotate: 0,
              stretch: -50,
              depth: 200,
              modifier: 3,
              slideShadows: false,
            },
          },
          768: {
            spaceBetween: 30,
            coverflowEffect: {
              rotate: 0,
              stretch: -50,
              depth: 200,
              modifier: 3,
              slideShadows: false,
            },
          },
        }}
        modules={[Mousewheel, Pagination, EffectCoverflow]}
        className="stories-swiper [&_.swiper-slide-active_h3]:!opacity-100"
      >
        {data.map((service, index) => (
          <SwiperSlide
            key={index}
            className="!w-[280px] md:!w-[350px] lg:!w-[550px]"
          >
            <SliderCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidersContainer;
