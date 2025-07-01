import React from "react";
import { FaCheck } from "react-icons/fa";

interface CheckItemProps {
  label: string;
}

const CheckItem: React.FC<CheckItemProps> = ({ label }) => (
  <div className="flex items-center space-x-2 mb-6">
    <div className="w-7 h-7 bg-[#618264] flex items-center justify-center">
      <FaCheck className="text-white" />
    </div>
    <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
      {label}
    </p>
  </div>
);

export default CheckItem;
