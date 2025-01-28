import React from "react";
// import "@/styles/gradient-bg.css";

const GradientBg = () => {
  return (
    <>
      <span className="w-[250px] h-[250px] bg-[#4c76c5] rounded-[100%] absolute -top-[10%] left-[10%] blur-[150px]"></span>
      <span className="w-1/3 h-[450px] bg-[#3B4E78] rounded-[100%] absolute top-[80%] left-[10%] blur-[200px]"></span>
      <span className="w-1/3 h-full bg-gradient-to-l from-[#20448a] to-transparent absolute top-[0] right-[0%] blur-[170px]"></span>
    </>
  );
};

export default GradientBg;
