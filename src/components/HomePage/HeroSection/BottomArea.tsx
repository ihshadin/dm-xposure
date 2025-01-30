"use client";
import { useRef } from "react";
import Image from "next/image";
import downScrollImg from "@/assets/images/png/down-arrow.png";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BottomArea = () => {
  const scrollBtn = useRef(null);

  useGSAP(() => {
    // GSAP animations
    gsap.fromTo(
      scrollBtn.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power2.out", delay: 1 }
    );

    gsap.fromTo(
      scrollBtn.current,
      { y: 0 },
      {
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: scrollBtn.current,
          start: "top 80%", // Trigger when the button comes into view
          end: "bottom top", // Keep animating until it's out of view
          scrub: true, // Smooth scroll effect
          //   toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div
        className="shrink-0 text-center pb-10 opacity-0 mt-6 lg:mt-0"
        ref={scrollBtn}
      >
        <Link className="inline-block" href={"/#call_to_action"}>
          <Image
            className="w-20 lg:w-[112px]"
            width={112}
            src={downScrollImg}
            alt="scroll-img"
          />
        </Link>
      </div>
    </>
  );
};

export default BottomArea;
