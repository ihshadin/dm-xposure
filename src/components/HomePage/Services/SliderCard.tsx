import React from "react";
import { TService } from "@/types/service.type";

const SliderCard = ({ service }: { service: TService }) => {
  return (
    <div
      className="h-[200px] md:h-[400px] lg:h-[430px] w-full lg:w-[800px] mx-auto rounded-2xl md:rounded-3xl px-3 md:px-8 py-3 md:py-10 flex bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${service.img})` }}
    >
      <div className="self-end grid grid-cols-1 md:grid-cols-2 items-end gap-3">
        <h4 className="text-xl md:text-4xl font-semibold">{service?.title}</h4>
        <p className="text-sm md:text-base font-normal">{service?.desc}</p>
      </div>
    </div>
  );
};

export default SliderCard;
