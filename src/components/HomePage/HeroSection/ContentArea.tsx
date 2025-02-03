"use client";
import React, { useRef } from "react";
import PrimaryBtn from "@/utils/PrimaryBtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ContentArea = () => {
  const headingRef = useRef(null);
  const headingRef1 = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // GSAP animations
    gsap.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(headingRef1.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
    });
    gsap.to(paragraphRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.4,
    });

    gsap.to(buttonRef.current, {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      delay: 0.8,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <span
        ref={headingRef}
        className={`text-xl md;text-2xl text-secondary opacity-0 translate-y-14`}
      >
        WE ARE
      </span>
      <h1
        ref={headingRef1}
        className="font-extrabold text-5xl md:text-7xl mt-2 mb-5 text-white opacity-0 translate-y-14"
      >
        DM XPOSURE
      </h1>
      <p
        ref={paragraphRef}
        className="font-normal text-base text-[#E4F3FF] opacity-0 translate-y-14"
      >
        We bridge the gap between your brand and its audience. With transparent
        strategies and expert guidance, we help you navigate the digital
        landscape to build a lasting, impactful online presence. Start your
        journey with us today and see the difference.
      </p>
      <div
        ref={buttonRef}
        className="mt-10 text-center md:text-left opacity-0 -translate-x-28"
      >
        <PrimaryBtn text="Get Started" link="/about" />
      </div>
    </div>
  );
};

export default ContentArea;
