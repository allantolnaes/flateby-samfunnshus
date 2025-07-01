"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blog: {
    id: number;
    title: string;
    link: string; // ← new property for dynamic page link
    linkHel: string;
    linkHalv: string;
    summary: string;
    price: string;
    image: string;
  };
};

const BlogCard = ({ blog }: Props) => {
  const { price, image, title, linkHel, linkHalv, link } = blog;

  return (
    <Link href={`/linjer/${link}`} className="h-full block group">
      <div
        role="link"
        className="bg-[#618264] rounded-md overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:scale-[1.02] group-hover:brightness-105"
      >
        <div className="w-full h-[250px] relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h1 className="sm:text-lg text-base mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold min-h-[3.2rem]">
            {title}
          </h1>

          <div className="mt-4 mb-4 w-full h-[1.5px] bg-gray-300" />

          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-300 font-bold">{price}</h1>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-3 text-white z-10 relative">
            <a
              href={linkHel}
              onClick={(e) => e.stopPropagation()}
              className="py-2 px-4 bg-[#F68537] hover:bg-[#e7650d] rounded-xl"
            >
              Helårskurs
            </a>
            <a
              href={linkHalv}
              onClick={(e) => e.stopPropagation()}
              className="py-2 px-4 bg-[#F68537] hover:bg-[#e7650d] rounded-xl"
            >
              Halvtårskurs
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
