import { BaseInfo } from "@/Data/data";
import CustomButton from "@/components/Helper/CustomButton";
import Image from "next/image";
import React from "react";
<<<<<<< HEAD
import { MdSend } from "react-icons/md";
=======
import { FaDownload } from "react-icons/fa";
>>>>>>> 77fa4c8b3934d7cb02e1383ebc3e7594902bc07c

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#B0D9B1] overflow-hidden relative">
      <div className="flex flex-col justify-center w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Image content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto rounded-[3rem] border-[3.5px] border-[#618264] overflow-x-hidden"
          >
            <Image
              src={BaseInfo.homepagePic}
              alt={BaseInfo.name}
              width={700}
              height={700}
            />
          </div>
          {/* Content */}
          <div>
            {/* Subheading */}
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-900 font-semibold"
            >
              Velkommen til
            </h1>
            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white pb-2 lg:pb-4"
            >
              {BaseInfo.name}
            </h1>

            {/* Button */}
            <div data-aos="fade-left" data-aos-delay="100">
              <CustomButton
                href="https://www.folkehogskole.no/index.php?page_id=80&skole_id=92"
                text="Søk nå"
                icon={<MdSend />}
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <p
          data-aos="fade-left"
          data-aos-delay="200"
          className="hidden lg:block mt-6 text-sm md:text-base text-[#444444]"
        >
          {BaseInfo.description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
