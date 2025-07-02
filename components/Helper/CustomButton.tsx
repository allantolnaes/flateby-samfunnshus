"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  icon?: React.ReactNode;
  href: string; // where to navigate when clicked
};

const CustomButton = ({ text, icon, href }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="md:px-8 md:py-2.5 px-6 py-1.5 text-black font-semibold text-lg hover:underline transition-all duration-200 rounded-xl mt-8 bg-[#ffffff] hover:bg-gray-300 cursor-pointer flex items-center space-x-2"
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default CustomButton;
