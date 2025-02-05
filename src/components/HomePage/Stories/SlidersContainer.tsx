"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import SliderCard from "@/components/HomePage/Stories/SliderCard";
import slide1 from "@/assets/images/png/story-1.png";
import slide2 from "@/assets/images/png/story-2.png";
import slide3 from "@/assets/images/png/story-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
  return (
    <div className="flex justify-center items-center relative">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={15}
        loop={true}
        speed={800}
        navigation={true}
        effect="coverflow" // Enables a smoother effect
        coverflowEffect={{
          rotate: 50, // No rotation
          stretch: 1,
          depth: 200,
          modifier: 0,
          slideShadows: false,
        }}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="stories-swiper"
      >
        {data.map((service, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <SliderCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidersContainer;
