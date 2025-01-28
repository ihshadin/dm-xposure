"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import part1 from "@/assets/images/png/logo-part-1.png";
import part2 from "@/assets/images/png/logo-part-2.png";
import part3 from "@/assets/images/png/logo-part-3.png";
import gsap from "gsap";

const AnimateLogo = () => {
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      part1Ref.current,
      { scale: 0 },
      { scale: 1, duration: 4, ease: "power2.out" }
    );
    gsap.fromTo(
      part2Ref.current,
      { scale: 0 },
      { scale: 1, duration: 4, ease: "power2.out" }
    );
    gsap.fromTo(
      part3Ref.current,
      { scale: 0 },
      { scale: 1, duration: 4, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="relative text-center p-10">
      <div ref={part2Ref} className="w-[230px]">
        <Image className="w-full" src={part2} alt="Logo" />
      </div>
      <div ref={part1Ref} className="w-[247px] absolute left-1 top-[79px]">
        <Image className="w-full" src={part1} alt="Logo" />
      </div>
      <div
        ref={part3Ref}
        className="w-[147px] absolute left-[75px] bottom-[60px]"
      >
        <Image className="w-full" src={part3} alt="Logo" />
      </div>
    </div>
  );
};

export default AnimateLogo;
