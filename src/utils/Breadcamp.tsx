import React from "react";

const Breadcamp = ({ title }: { title: string }) => {
  return (
    <section className="pt-[140px] md:pt-[210px] pb-[50px] md:pb-[100px]">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.3em] lg:leading-[1.3em] font-bold bg-gradient-to-r from-white to-[#9999998c] bg-clip-text text-transparent inline-block">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default Breadcamp;
