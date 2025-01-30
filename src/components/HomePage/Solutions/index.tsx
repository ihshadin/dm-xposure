import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SolutionTools from "./SolutionTools";

const SolutionsSection = () => {
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
    <section className="py-20 overflow-hidden">
      <div className="px-2">
        <div className="flex flex-col justify-center">
          <span
            ref={subHeadingRef}
            className="text-xl md:text-2xl text-secondary text-center"
          >
            Crafting Innovative
          </span>
          <h1
            ref={headingRef}
            className="font-extrabold text-[29px] md:text-[40px] mt-1 md:mt-2 mb-2 md:mb-5 text-white text-center"
          >
            Solutions for Your Digital Needs
          </h1>
        </div>
        <div className="mt-8">
          <SolutionTools />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
