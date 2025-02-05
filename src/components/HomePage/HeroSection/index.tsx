import React from "react";
import ContentArea from "./ContentArea";
import RightArea from "./RightArea";
import BottomArea from "./BottomArea";

const HeroSection = () => {
  return (
    <section className="bg-primary">
      <div className="dm-container pt-32 flex flex-col min-h-screen">
        <div className="grow flex flex-col-reverse md:flex-row justify-end md:justify-between items-center gap-6 lg:gap-0">
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
