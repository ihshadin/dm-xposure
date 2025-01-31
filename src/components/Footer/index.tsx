import React from "react";
import Image from "next/image";
import logo from "@/assets/images/png/xposure-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white/15">
      <div className="max-w-7xl mx-auto px-2 py-8 lg:py-16 relative">
        <Image
          className="w-14 lg:w-16 mx-auto md:absolute left-0 top-1/2 md:-translate-y-1/2"
          src={logo}
          alt="Xposure"
        />
        <p className="text-base md:text-lg lg:text-xl font-normal text-secondary text-center mt-3 md:mt-0">
          © 2025 Xposure - Development & Marketing Solutions. All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
