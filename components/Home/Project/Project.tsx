import { projectData } from "@/Data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="my-projects" className="pt-16 pb-16 bg-basic scroll-mt-20">
      <SectionHeading>Prosjekter</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => {
          return (
            <div
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
              key={project.id}
            >
              <Link href={project.url} target="_blank">
                <Image
                  className="w-full"
                  src={project.image}
                  alt="Project"
                  width={300}
                  height={200}
                ></Image>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
