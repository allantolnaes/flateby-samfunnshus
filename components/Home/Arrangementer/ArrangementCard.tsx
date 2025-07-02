"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// ✅ Define Props correctly
type Props = {
  arrangement: {
    id: number;
    title: string;
    link: string;
    typeArrangement: string;
    description1: string;
    description2: string;
    dato: string;
    image: string;
  };
};

const ArrangementCard = ({ arrangement }: Props) => {
  const {
    dato,
    image,
    title,
    link,
    typeArrangement,
    description1,
    description2,
  } = arrangement;

  return (
    <Link href={`/arrangementer/${link}`} className="h-full block group">
      <div
        role="link"
        className="bg-[#307532] rounded-md overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:scale-[1.02] group-hover:brightness-105"
      >
        <div className="w-full h-[250px] relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h1 className="sm:text-xl text-base mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold min-h-[3.2rem]">
            {title}
          </h1>
          <p className="text-white">{description1}</p>

          <div className="mt-4 mb-4 w-full h-[1.5px] bg-gray-300" />

          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-300 font-bold">{dato}</h1>
          </div>

          <div className="flex justify-between mt-3 text-white z-10 relative">
            <p className="text-gray-300 font-semibold text-lg">
              {typeArrangement}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArrangementCard;
