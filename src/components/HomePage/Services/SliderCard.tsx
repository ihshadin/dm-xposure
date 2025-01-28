import React from "react";
import { TService } from "@/types/service.type";

const SliderCard = ({ service }: { service: TService }) => {
  return (
    <div
      className="h-[430px] w-[800px] mx-auto rounded-3xl px-8 py-10 grid grid-cols-1 lg:grid-cols-2 items-end gap-5 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${service.img})` }}
    >
      <h4 className="text-4xl font-semibold">{service?.title}</h4>
      <p className="text-base font-normal">{service?.desc}</p>
    </div>
  );
};

export default SliderCard;
