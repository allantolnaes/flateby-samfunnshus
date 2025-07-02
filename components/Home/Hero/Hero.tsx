import { BaseInfo } from "@/Data/data";
import CustomButton from "@/components/Helper/CustomButton";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-basic overflow-hidden relative">
      <div className="flex flex-col justify-center w-full h-full mx-auto">
        <h1
          /* data-aos="fade-right"
          data-aos-delay="100" */
          className="hidden md:block text-bg text-3xl text-center sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white pb-2 lg:pb-4"
        >
          {BaseInfo.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Image content */}
          <div
            /* data-aos="zoom-in"
            data-aos-delay="400" */
            className="mx-full my-auto overflow-x-hidden ml-0"
          >
            <Image
              src={BaseInfo.homepagePic}
              alt={BaseInfo.name}
              width={700}
              height={450}
            />
          </div>
          {/* Content */}
          <div className="p-6 bg-[#307532] h-full flex flex-col justify-center">
            {/* Description */}
            <h1 className="text-white text-3xl pb-3 md:hidden">
              Flateby Samfunnshus
            </h1>
            <p
              /* data-aos="fade-left"
              data-aos-delay="200" */
              className="text-lg md:text-3xl text-[#ffffff]"
            >
              {BaseInfo.description}
            </p>
            {/* Button */}
            <div
              className="text-center"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <CustomButton
                href="/kalender"
                text="Kalender"
                icon={<FaCalendarAlt />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
