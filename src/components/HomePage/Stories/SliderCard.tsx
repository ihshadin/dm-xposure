import React from "react";
import { TService } from "@/types/service.type";
import Image from "next/image";

const SliderCard = ({ service }: { service: TService }) => {
  return (
    <div>
      <Image
        className="rounded-3xl h-[180px] md:h-[300px] lg:h-[400px] w-full object-cover border-2 border-white/40"
        src={service?.img}
        width={600}
        height={420}
        alt="image"
      />
      <h3 className="text-base md:text-xl lg:text-[27px] mt-3 opacity-0 transition-all duration-300">
        {service?.title}
      </h3>
    </div>
  );
};

export default SliderCard;
