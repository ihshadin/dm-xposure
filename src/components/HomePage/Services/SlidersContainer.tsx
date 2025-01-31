/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [isSectionInView, setIsSectionInView] = useState(false);
  const swiperRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Format slide number to always show two digits
  const formatSlideNumber = (number: number) => {
    return number < 9 ? `0${number + 1}` : number + 1;
  };

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

  const pagination = {
    el: ".swiper-pagination-services",
    clickable: true,
    type: "bullets",
    renderBullet: function (index: any, className: any) {
      return `<span class="${className}"></span>`;
    },
  };

  // IntersectionObserver to detect when the section is fully in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionInView(true);
            if (swiperRef.current) {
              swiperRef.current.mousewheel.enable(); // Enable swiper mousewheel
            }
          } else {
            setIsSectionInView(false);
            if (swiperRef.current) {
              swiperRef.current.mousewheel.disable(); // Disable swiper mousewheel
            }
          }
        });
      },
      {
        threshold: 0.9, // Trigger when the section is fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex justify-center items-center relative">
      {/* Active pagination */}
      <div className="text-xl md:text-7xl font-semibold absolute md:static top-[70px] left-0 z-10 transition-all duration-500">
        {formatSlideNumber(activeSlide)}
      </div>

      <Swiper
        ref={swiperRef}
        direction="vertical"
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={50}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true, // Allow scrolling to next section when reaching the end
        }}
        speed={800}
        pagination={pagination as PaginationOptions}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        breakpoints={{
          1024: {
            spaceBetween: 200,
          },
        }}
        modules={[Mousewheel, Pagination, EffectCoverflow]}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.mousewheel.disable(); // Disable mousewheel initially
        }}
        className="service-swiper h-[400px] md:h-screen !w-full grow"
      >
        {data.map((service, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <SliderCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination-services text-white !static !w-3 flex flex-col gap-2 *:!h-3 *:!w-3 *:!bg-secondary *:rounded-full *:!m-0"></div>
    </div>
  );
};

export default SlidersContainer;
