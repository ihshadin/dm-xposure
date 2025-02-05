import React from "react";
import Image from "next/image";
import logo from "@/assets/images/png/xposure-logo.png";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white/15">
      <div className="dm-container py-5 lg:py-5 relative flex flex-col md:flex-row justify-between items-center gap-3">
        {/* <Image
          className="w-14 lg:w-16 mx-auto md:absolute left-0 top-1/2 md:-translate-y-1/2"
          src={logo}
          alt="Xposure"
        /> */}
        <Image className="w-12 lg:w-12" src={logo} alt="Xposure" />
        <p className="text-base md:text-lg lg:text-xl font-normal text-secondary text-center mt-3 md:mt-0">
          © 2025 Xposure - Development & Marketing Solutions. All Right Reserved
        </p>
        <div className="flex gap-4 lg:gap-7">
          <Link href={`https://www.facebook.com`} target="_black">
            <FaFacebookF className="text-sm" />
          </Link>
          <Link href={`https://www.facebook.com`} target="_black">
            <FaInstagram className="text-sm" />
          </Link>
          <Link href={`https://www.facebook.com`} target="_black">
            <FaXTwitter className="text-sm" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
