"use client";
import React, { useEffect, useRef } from "react";
import PrimaryBtn from "@/utils/PrimaryBtn";
import gsap from "gsap";

const ContentArea = () => {
  const headingRef = useRef(null);
  const headingRef1 = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      headingRef1.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.4 }
    );

    gsap.fromTo(
      buttonRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power2.out", delay: 0.8 }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <span ref={headingRef} className={`text-xl md;text-2xl text-secondary`}>
        WE ARE
      </span>
      <h1
        ref={headingRef1}
        className="font-extrabold text-5xl md:text-7xl mt-2 mb-5 text-white"
      >
        DM XPOSURE
      </h1>
      <p ref={paragraphRef} className="font-normal text-base text-[#E4F3FF]">
        We bridge the gap between your brand and its audience. With transparent
        strategies and expert guidance, we help you navigate the digital
        landscape to build a lasting, impactful online presence. Start your
        journey with us today and see the difference.
      </p>
      <div ref={buttonRef} className="mt-10">
        <PrimaryBtn text="Get Started" link="/about" />
      </div>
    </div>
  );
};

export default ContentArea;
