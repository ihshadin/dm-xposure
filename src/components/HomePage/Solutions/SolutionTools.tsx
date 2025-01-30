import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "@/assets/images/png/marquee-1.png";
import img2 from "@/assets/images/png/marquee-2.png";
import img3 from "@/assets/images/png/marquee-3.png";
import img4 from "@/assets/images/png/marquee-4.png";
import img5 from "@/assets/images/png/marquee-5.png";
import img6 from "@/assets/images/png/marquee-6.png";
import img7 from "@/assets/images/png/marquee-7.png";
import img8 from "@/assets/images/png/marquee-8.png";
import img9 from "@/assets/images/png/marquee-9.png";
import img10 from "@/assets/images/png/marquee-10.png";
import img11 from "@/assets/images/png/marquee-11.png";
import img12 from "@/assets/images/png/marquee-12.png";
import img13 from "@/assets/images/png/marquee-13.png";
import img14 from "@/assets/images/png/marquee-14.png";
import img15 from "@/assets/images/png/marquee-15.png";
import img16 from "@/assets/images/png/marquee-16.png";

const SolutionTools = () => {
  const partners = [
    { _id: 1, pic: img1 },
    { _id: 2, pic: img2 },
    { _id: 3, pic: img3 },
    { _id: 4, pic: img4 },
    { _id: 5, pic: img5 },
    { _id: 6, pic: img6 },
    { _id: 7, pic: img7 },
    { _id: 8, pic: img8 },
    { _id: 9, pic: img9 },
    { _id: 10, pic: img10 },
    { _id: 11, pic: img11 },
    { _id: 12, pic: img12 },
    { _id: 13, pic: img13 },
    { _id: 14, pic: img14 },
    { _id: 15, pic: img15 },
    { _id: 16, pic: img16 },
  ];

  return (
    <div>
      <Marquee
        pauseOnHover
        speed={100}
        className="grayscale [&_.rfm-initial-child-container]:w-full [&_.rfm-initial-child-container]:justify-between"
      >
        {partners?.map((partner, index) => (
          <Image
            key={index}
            src={partner.pic}
            className="h-10 md:h-14 lg:h-20 w-auto object-cover mx-5 lg:mx-12"
            alt="IMG"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default SolutionTools;
