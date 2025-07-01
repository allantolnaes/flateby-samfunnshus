import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Reviews = () => {
  return (
    <div id="reviews" className="pt-16 pb-16 bg-basic scroll-mt-28">
      <SectionHeading>Sitater fra elever</SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Reviews;
