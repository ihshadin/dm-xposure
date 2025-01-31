import React from "react";
import SolutionTools from "./SolutionTools";
import SectionTitle from "@/utils/SectionTitle";

const SolutionsSection = () => {
  return (
    <div className="px-2">
      <SectionTitle
        subheading="Crafting Innovative"
        heading="Solutions for Your Digital Needs"
      />
      <div className="mt-8">
        <SolutionTools />
      </div>
    </div>
  );
};

export default SolutionsSection;
