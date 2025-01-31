import React from "react";
import Image from "next/image";
import { FaFacebook, FaLink, FaLinkedin } from "react-icons/fa6";
import img1 from "@/assets/images/png/story-1.png";
import img2 from "@/assets/images/png/person-1.png";
import StoriesSection from "@/components/HomePage/Stories";

const BlogDetails = () => {
  return (
    <>
      <section className="pt-32 md:pt-44">
        <div className="max-w-7xl mx-auto px-2">
          <h1 className="font-light text-xl md:text-4xl lg:text-5xl mb-5 md:mb-12">
            The UX of AI: Design is Now Easier and Much Harder
          </h1>
          <Image
            className="rounded-2xl"
            src={img1}
            width={1300}
            height={800}
            alt="Featured image"
          />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-8 md:py-14">
            <div className="grow text-base font-light [&_p]:mb-3">
              <p>
                On the day Richard Feynman died, he had a message scrawled
                across his blackboard: “What I cannot create, I do not
                understand.” As an expert in theoretical physics, he was
                referring to the idea that in order to truly comprehend a
                concept, or be effective with it, you must first be able to
                create that concept from scratch. While this may still hold in
                some areas of science and math, with everything that is
                happening in the AI space, I wonder if this remains true for
                creative work?
              </p>
              <p>
                On the day Richard Feynman died, he had a message scrawled
                across his blackboard: “What I cannot create, I do not
                understand.” As an expert in theoretical physics, he was
                referring to the idea that in order to truly comprehend a
                concept, or be effective with it, you must first be able to
                create that concept from scratch. While this may still hold in
                some areas of science and math, with everything that is
                happening in the AI space, I wonder if this remains true for
                creative work?
              </p>
              <p>
                On the day Richard Feynman died, he had a message scrawled
                across his blackboard: “What I cannot create, I do not
                understand.” As an expert in theoretical physics, he was
                referring to the idea that in order to truly comprehend a
                concept, or be effective with it, you must first be able to
                create that concept from scratch. While this may still hold in
                some areas of science and math, with everything that is
                happening in the AI space, I wonder if this remains true for
                creative work?
              </p>
              <p>
                On the day Richard Feynman died, he had a message scrawled
                across his blackboard: “What I cannot create, I do not
                understand.” As an expert in theoretical physics, he was
                referring to the idea that in order to truly comprehend a
                concept, or be effective with it, you must first be able to
                create that concept from scratch. While this may still hold in
                some areas of science and math, with everything that is
                happening in the AI space, I wonder if this remains true for
                creative work?
              </p>
              <p>
                On the day Richard Feynman died, he had a message scrawled
                across his blackboard: “What I cannot create, I do not
                understand.” As an expert in theoretical physics, he was
                referring to the idea that in order to truly comprehend a
                concept, or be effective with it, you must first be able to
                create that concept from scratch. While this may still hold in
                some areas of science and math, with everything that is
                happening in the AI space, I wonder if this remains true for
                creative work?
              </p>
            </div>
            <div className="shrink-0 w-[210px]">
              <div className="flex gap-2">
                <div className="shrink-0">
                  <Image
                    className="size-14 rounded-full"
                    src={img2.src}
                    width={60}
                    height={60}
                    alt="Info"
                  />
                </div>
                <div className="text-xs">
                  <p>Romain Colomer, Experience Director</p>
                  <p className="text-gray-300 mt-2">December 9, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-lg font-medium mt-4">
                <span>Share</span>
                <FaFacebook />
                <FaLinkedin />
                <FaLink />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 overflow-hidden">
        <StoriesSection />
      </section>
    </>
  );
};

export default BlogDetails;
