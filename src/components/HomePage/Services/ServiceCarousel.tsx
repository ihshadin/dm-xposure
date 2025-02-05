import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import slide1 from "@/assets/images/png/slide-1.jpg";
import SliderCard from "./SliderCard";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    img: slide1.src,
    title: "Web Development",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "MOBILE APP DEVELOPMENT",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "DIGITAL MARKETING STRATEGY",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "DIGITAL MARKETING STRATEGY",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
  {
    img: slide1.src,
    title: "DIGITAL MARKETING STRATEGY",
    desc: " We combine style and function to craft high-performance websites that fuel business growth.",
  },
];

const ServiceCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.to(cards, {
      yPercent: -100 * (cards.length - 1),
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (cards.length - 1));
          gsap.to(cards, {
            scale: 0.9,
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(cards[index], {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          if (counterRef.current) {
            counterRef.current.innerText = `${index + 1}`;
          }
        },
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div
        ref={counterRef}
        className="text-xl md:text-7xl font-semibold absolute top-1/2 -translate-y-1/2 left-0 z-10 transition-all duration-500"
      >
        1
      </div>
      <div className="grow relative flex flex-col items-center space-y-6">
        {data.map((service, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              cardsRef.current[index] = el;
            }}
            className=""
          >
            <SliderCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
