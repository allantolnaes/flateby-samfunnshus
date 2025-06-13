import Image from "next/image";
import React from "react";

// Define Props Type

type Props = {
  skill: {
    id: number;
    title: string;
    description: string;
    year: string;
    icon: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { icon, title } = skill;
  return (
    <div className="p-6 hover:bg-[#FFE700] transition-all duration-300 cursor-pointer text-center rounded-lg bg-[#FFFA8D]">
      <Image
        src={icon}
        alt="Title"
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 text-black font-[600]">{title}</h1>
    </div>
  );
};

export default SkillCard;
