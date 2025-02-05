"use client";
import React, { useRef } from "react";
import Image from "next/image";
import part1 from "@/assets/images/png/logo-part-1.png";
import part2 from "@/assets/images/png/logo-part-2.png";
import part3 from "@/assets/images/png/logo-part-3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimateLogo = () => {
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);

  useGSAP(() => {
    // GSAP animations
    gsap.to(part1Ref.current, { scale: 1, duration: 4, ease: "power2.out" });
    gsap.to(part2Ref.current, { scale: 1, duration: 4, ease: "power2.out" });
    gsap.to(part3Ref.current, { scale: 1, duration: 4, ease: "power2.out" });
  }, []);

  return (
    <div className="relative text-center pl-14">
      <div ref={part2Ref} className="w-[180px] lg:w-[270px] scale-0">
        <Image className="w-full" src={part2} alt="Logo" />
      </div>
      <div
        ref={part1Ref}
        className="w-[193px] lg:w-[290px] scale-0 absolute left-[25px] lg:left-1 top-[40px] lg:top-[70px]"
      >
        <Image className="w-full" src={part1} alt="Logo" />
      </div>
      <div
        ref={part3Ref}
        className="w-[115px] lg:w-[173px] scale-0 absolute left-[78px] lg:left-[85px] bottom-[10px]"
      >
        <Image className="w-full" src={part3} alt="Logo" />
      </div>
    </div>
  );
};

export default AnimateLogo;
