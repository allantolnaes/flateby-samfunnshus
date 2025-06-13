import { aboutInfo } from "@/Data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="pt-16 pb-16 bg-[#4ED7F1] scroll-mt-20">
      <SectionHeading>About</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1
            id="#about"
            className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200"
          >
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-black">{aboutInfo.description}</p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-[#FFFA8D] flex flex-col items-center justify-center">
                <FaCheck className="text-black" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                Actor - Method Acting
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-[#FFFA8D] flex flex-col items-center justify-center">
                <FaCheck className="text-black" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                Musician - Multiisntrumentalist
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-[#FFFA8D] flex flex-col items-center justify-center">
                <FaCheck className="text-black" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                Musicalartist - Bachelor
              </p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-10 items-center lg:mx-auto"
        >
          {/* 1st stat */}
          <div>
            <Image
              className="mx-auto"
              src={"/images/batboy.png"}
              alt="Image"
              width={120}
              height={120}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.batboy}
            </p>
            <p className="text-white sm:text-lg text-gray-400 text-center">
              BatBoy - The Musical
            </p>
          </div>
          {/* 2nd stat */}
          <div>
            <Image
              className="mx-auto"
              src={"/images/spelemann.png"}
              alt="Image"
              width={120}
              height={120}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.spelemann}
            </p>
            <p className="text-white sm:text-lg text-gray-400 text-center">
              Spelemann på Taket
            </p>
          </div>
          {/* 3rd stat */}
          <div>
            <Image
              className="mx-auto"
              src={"/images/boys.png"}
              alt="Image"
              width={120}
              height={120}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.boys}
            </p>
            <p className="text-white sm:text-lg text-gray-400 text-center">
              BOYS av Marie Bergby Handeland
            </p>
          </div>
          {/* 4th stat */}
          <div>
            <Image
              className="mx-auto"
              src={"/images/boys.png"}
              alt="Image"
              width={120}
              height={120}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.boys}
            </p>
            <p className="text-white sm:text-lg text-gray-400 text-center">
              BOYS av Marie Bergby Handeland
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
