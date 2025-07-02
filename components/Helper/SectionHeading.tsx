import React, { ReactNode } from "react";

// Define Props Type
type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="bg-[#307532] rounded-xl w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-8">
      {children}
    </h1>
  );
};

export default SectionHeading;
