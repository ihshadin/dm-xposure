"use client";
import React, { useRef } from "react";
// import animateLogo from "@/assets/gif/hero-right-animation.gif";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import AnimateLogo from "./AnimateLogo";
import { useGSAP } from "@gsap/react";

const RightArea = () => {
  const socialRef = useRef(null);

  useGSAP(() => {
    // GSAP animations
    gsap.to(socialRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="flex items-center gap-20">
      <div className="grow flex justify-end">
        <AnimateLogo />
      </div>

      <div
        ref={socialRef}
        className="shrink flex flex-col items-center gap-4 text-white/80 opacity-0 translate-x-14"
      >
        <span className="block w-0.5 h-20 rounded bg-white/80"></span>
        <div className="flex flex-col gap-7">
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
        <span className="block w-0.5 h-20 rounded bg-white/80"></span>
      </div>
    </div>
  );
};

export default RightArea;
