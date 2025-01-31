"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TSectionTitle } from "@/types/meta.type";

const SectionTitle = ({ subheading, heading }: TSectionTitle) => {
  const subHeadingRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      subHeadingRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      subHeadingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
          // once: true,
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
    );
    gsap.fromTo(
      headingRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 95%",
          end: "bottom 10%",
          scrub: true,
          // once: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center">
      {subheading && (
        <h4
          ref={subHeadingRef}
          className="text-xl md:text-2xl text-secondary text-center"
        >
          {subheading}
        </h4>
      )}

      {heading && (
        <h1
          ref={headingRef}
          className="font-extrabold text-[29px] md:text-[40px] mt-1 md:mt-2 mb-2 md:mb-5 text-white text-center"
        >
          {heading}
        </h1>
      )}
    </div>
  );
};

export default SectionTitle;
