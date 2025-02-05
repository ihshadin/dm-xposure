import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import bgImg from "@/assets/images/png/bg-1.jpg";

const Breadcamp = ({ title }: { title: string }) => {
  return (
    <section
      className="pt-[140px] md:pt-[210px] pb-[40px] md:pb-[70px] bg-cover bg-center bg-no-repeat relative -z-10 before:content-[' '] before:bg-black/75 before:absolute before:inset-0 before:-z-10"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      {/* <span className="inline-block absolute inset-0 bg-black/80"></span> */}
      <div className="dm-container z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.3em] lg:leading-[1.3em] font-bold text-white text-center mb-2 md:mb-4">
          {title}
        </h2>
        <div className="flex justify-center items-center gap-2 text-white/80">
          <Link href="/">Home</Link>
          <FaAngleRight /> <Link href={"/"}>Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Breadcamp;
