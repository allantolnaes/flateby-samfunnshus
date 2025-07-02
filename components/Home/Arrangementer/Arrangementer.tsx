import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ArrangementCard from "@/components/Home/Arrangementer/ArrangementCard";
import { arrangementer } from "@/Data/data";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const ArrangementerPage = () => {
  return (
    <div className="min-h-screen bg-basic pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto mt-10">
        <SectionHeading>Kommende arrangementer</SectionHeading>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          {arrangementer.map((arrangement) => (
            <div key={arrangement.id} className="h-full">
              <ArrangementCard arrangement={arrangement} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/arrangementer"
          className="px-6 py-2 flex items-center text-white font-semibold text-xl md:text-3xl bg-[#307532] rounded-xl hover:bg-[#4db750] transition duration-200"
        >
          <FaCalendarAlt />
          <p className="px-3">Se alle arrangementer</p>
          <FaCalendarAlt />
        </Link>
      </div>
    </div>
  );
};

export default ArrangementerPage;
