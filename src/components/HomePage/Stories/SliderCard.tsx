import React from "react";
import { TService } from "@/types/service.type";
import Image from "next/image";

const SliderCard = ({ service }: { service: TService }) => {
  return (
    <div className="flex flex-col gap-3 h-full w-full">
      <Image
        className="border-2 border-white/40"
        src={service?.img}
        width={600}
        height={420}
        alt="image"
      />
      <h3 className="transition-all duration-300">{service?.title}</h3>
    </div>
  );
};

export default SliderCard;
