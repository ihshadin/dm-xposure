"use client";
import React from "react";
import CallToActionSection from "@/components/HomePage/CallToAction";
import GradientBg from "@/components/HomePage/GradientBg/GradientBg";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/Services";
// import ContactSection from "@/components/HomePage/Contact";

export default function Home() {
  return (
    <main>
      <GradientBg />
      <HeroSection />
      <CallToActionSection />
      <ServicesSection />
      {/* <ContactSection /> */}
    </main>
  );
}
