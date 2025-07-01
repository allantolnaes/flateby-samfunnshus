import { servicesData } from "@/Data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-basic">
      <SectionHeading>Prosjekter</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {servicesData.map((skill) => {
          return (
            <div key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
