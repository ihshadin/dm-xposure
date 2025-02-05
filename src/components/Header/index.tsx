"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "@/assets/images/png/logo-white.png";
import NavBar from "@/components/Header/NavBar";
import gsap from "gsap";

const Header = ({ className }: { className?: string }) => {
  const header = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      header.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <header
      // ref={header}
      className={`w-full absolute left-0 top-8 z-50 animate-[headerDown_1.5s_ease-in-out] ${
        className ? className : ""
      }`}
    >
      <div className="dm-container">
        <div className="flex items-center bg-white/15 rounded-full px-6 lg:px-8 justify-between">
          <Link href="/" className="cursor-pointer py-5">
            <Image className="w-44 md:w-52" src={logoWhite} alt="Logo" />
          </Link>
          {/* header Navbar part */}
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
