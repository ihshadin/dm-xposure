"use client";
import React, { useState } from "react";
import Menu from "./Menu";
import PrimaryBtn from "@/utils/PrimaryBtn";
import { headerData } from "@/utils/Helper";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import Image from "next/image";
import logoWhite from "@/assets/images/png/logo-white.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={handleMenuToggle}
        className="text-white text-xl drop-shadow-lg bg-white/15 rounded-[0px_15px_0px_15px] px-3 py-2 block lg:hidden focus:outline-none transition-all duration-300 ease-in-out"
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <HiMiniXMark /> : <FaBarsStaggered />}
      </button>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-primary/70 backdrop-blur-sm lg:hidden z-0"
        ></div>
      )}
      <div
        className={`flex flex-col lg:flex-row items-center justify-start lg:justify-end gap-5 lg:gap-10 px-3 lg:px-0 py-8 lg:py-0 duration-300 bg-secondary/5 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none fixed lg:static top-0 w-full lg:w-full h-full ${
          isMenuOpen ? "left-0" : "-left-[calc(100%+10px)]"
        }`}
      >
        <div className="flex lg:hidden justify-between items-center w-full mb-3">
          <Image
            src={logoWhite}
            className="w-44"
            width={200}
            height={100}
            alt="M Biotech"
          />
          <button
            onClick={handleMenuToggle}
            className="text-white text-3xl focus:outline-none transition-all duration-300 ease-in-out absolute right-2 top-3"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <HiMiniXMark />
          </button>
        </div>
        <Menu items={headerData} closeMenu={closeMenu} />
        <PrimaryBtn text="Contact Us" link="/contact-us" />
      </div>
    </>
  );
};

export default NavBar;
