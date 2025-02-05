"use client";
import React from "react";
import ServiceCarousel from "./ServiceCarousel";

const ServicesSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="dm-container">
        <ServiceCarousel />
      </div>
    </section>
  );
};

export default ServicesSection;
