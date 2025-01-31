import SectionTitle from "@/utils/SectionTitle";
import React from "react";
import SlidersContainer from "@/components/HomePage/Stories/SlidersContainer";

const StoriesSection = () => {
  return (
    <div className="px-2">
      <SectionTitle subheading="Featured" heading="Spotlight Stories" />
      <div className="mt-8">
        <SlidersContainer />
      </div>
    </div>
  );
};

export default StoriesSection;
