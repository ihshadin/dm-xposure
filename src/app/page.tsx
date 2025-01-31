"use client";
import React from "react";
import CallToActionSection from "@/components/HomePage/CallToAction";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/Services";
import SolutionsSection from "@/components/HomePage/Solutions";
// import ContactSection from "@/components/HomePage/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoriesSection from "@/components/HomePage/Stories";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CallToActionSection />
      <ServicesSection />
      <section className="py-10 md:py-20 overflow-hidden">
        <SolutionsSection />
      </section>
      <section className="py-10 md:py-20 overflow-hidden">
        <StoriesSection />
      </section>
      {/* <ContactSection /> */}
    </main>
  );
};

export default HomePage;
