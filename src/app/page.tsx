"use client";
import React from "react";
import CallToActionSection from "@/components/HomePage/CallToAction";
import GradientBg from "@/components/HomePage/GradientBg/GradientBg";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/Services";
import SolutionsSection from "@/components/HomePage/Solutions";
// import ContactSection from "@/components/HomePage/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  return (
    <main>
      <GradientBg />
      <HeroSection />
      <CallToActionSection />
      <ServicesSection />
      <SolutionsSection />
      {/* <ContactSection /> */}
    </main>
  );
};

export default HomePage;
