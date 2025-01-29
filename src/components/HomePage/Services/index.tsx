import React from "react";
import SlidersContainer from "./SlidersContainer";

const ServicesSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-2">
        {/* <div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-white">
            Our Services
          </h2>
        </div> */}
        <div>
          <SlidersContainer />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
