"use client";
import React, { useRef } from "react";
import PrimaryBtn from "@/utils/PrimaryBtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CallToActionSection = () => {
  const sectionRef = useRef(null);
  const subHeadingRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           // Reset animation each time the section comes into view
  //           // GSAP animations for each element
  //           gsap.fromTo(
  //             subHeadingRef.current,
  //             { y: 50, opacity: 0 },
  //             { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
  //           );
  //           gsap.fromTo(
  //             headingRef.current,
  //             { y: 50, opacity: 0 },
  //             { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
  //           );
  //           gsap.fromTo(
  //             paragraphRef.current,
  //             { y: 50, opacity: 0 },
  //             { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
  //           );
  //           gsap.fromTo(
  //             buttonRef.current,
  //             { x: -100, opacity: 0 },
  //             { x: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.4 }
  //           );
  //         }
  //       },
  //       { threshold: 0.5 } // Trigger when 50% of the section is in view
  //     );

  //     if (subHeadingRef.current) {
  //       observer.observe(subHeadingRef.current); // Observe the subheading
  //     }

  //     return () => observer.disconnect(); // Cleanup observer on unmount
  //   }, []);

  useGSAP(() => {
    // GSAP animations with ScrollTrigger for each element
    // gsap.to(sectionRef.current, {
    //   // y: 0,
    //   scrollTrigger: {
    //     trigger: sectionRef.current, // Pin when the section hits the top
    //     start: "top top", // Start pinning when section hits top
    //     end: "+=3300", // Unpin when the next section comes into view (adjust as needed)
    //     pin: true, // Pin the section
    //     scrub: 1, // Make the pin smooth when scrolling
    //     pinSpacing: false, // Optional: To prevent extra spacing when unpinned
    //     anticipatePin: 1,
    //   },
    // });

    gsap.fromTo(
      subHeadingRef.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
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
      { y: 70, opacity: 0 },
      {
        y: 0,
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

    gsap.fromTo(
      paragraphRef.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 95%",
          end: "bottom 10%",
          scrub: true,
          // once: true,
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
          // once: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="call_to_action" className="bg-primary py-8">
      <div className="max-w-[950px] mx-auto px-2">
        <div className="flex flex-col justify-center">
          <span
            ref={subHeadingRef}
            className="text-xl md:text-2xl text-secondary text-center"
          >
            Crafting Innovative
          </span>
          <h1
            ref={headingRef}
            className="font-extrabold text-[29px] md:text-[40px] mt-1 md:mt-2 mb-2 md:mb-3 text-white text-center"
          >
            Solutions for Your Digital Needs
          </h1>
          <p
            ref={paragraphRef}
            className="font-normal text-base text-[#E4F3FF] text-center"
          >
            With over 20 years of experience, DM Xposure is more than just a
            service provider—we&apos;re your strategic partner in digital
            growth. We offer tailored solutions that go beyond conventional
            services, helping you overcome challenges, seize opportunities, and
            build a strong, lasting online presence. Let&apos;s collaborate to
            transform your vision into reality.
          </p>
          <div ref={buttonRef} className="mt-10 text-center">
            <PrimaryBtn text="Inquire More" link="/about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
