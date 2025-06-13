import { servicesData } from "@/Data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="my-work" className="pt-16 pb-16 bg-[#4ED7F1] scroll-mt-20">
      <SectionHeading>Prosjekter</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service) => {
          return (
            <div key={service.id}>
              <ServiceCard service={service} />
              <div />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
