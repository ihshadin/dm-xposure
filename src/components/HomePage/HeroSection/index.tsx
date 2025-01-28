import React from "react";
import ContentArea from "./ContentArea";
import RightArea from "./RightArea";
import BottomArea from "./BottomArea";

const HeroSection = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-2 pt-32 flex flex-col min-h-screen">
        <div className="grow flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2">
            <ContentArea />
          </div>
          <div className="w-full lg:w-1/2 overflow-hidden">
            <RightArea />
          </div>
        </div>
        {/* Bottom scroll to explore button */}
        <BottomArea />
      </div>
    </section>
  );
};

export default HeroSection;
