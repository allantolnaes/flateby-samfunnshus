import { aboutInfo } from "@/Data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import YouTubeVideo from "@/components/Helper/YoutubeVideo";
import React from "react";
import CheckList from "@/components/Helper/CheckList";
import CustomButton from "@/components/Helper/CustomButton";
import { MdArrowForward } from "react-icons/md";

const About = () => {
  const items = [
    aboutInfo.fag,
    aboutInfo.felleskap,
    aboutInfo.reiser,
    aboutInfo.minner,
  ];

  return (
    <div id="om-oss" className="pt-16 pb-16 bg-basic scroll-mt-20">
      <SectionHeading>Om oss</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1
            id="#about"
            className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 pb-1"
          >
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-black">{aboutInfo.description1}</p>
          {/* Checkboxes */}
          <CheckList items={items} />
          {/* Button */}
          <CustomButton
            href="/linjer"
            text="Se våre linjer"
            icon={<MdArrowForward />}
          />
        </div>
        {/* Video and description 2 content */}
        <div className="gap-10 items-center lg:mx-auto">
          {/* Video */}
          <div>
            <YouTubeVideo />
          </div>
          {/* Description 2 */}
          <div>
            <p className="text-base text-black sm:text-lg text-center">
              {aboutInfo.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
