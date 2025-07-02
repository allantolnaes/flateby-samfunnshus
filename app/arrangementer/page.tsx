import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ArrangementCard from "@/components/Home/Arrangementer/ArrangementCard";
import { arrangementer } from "@/Data/data";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

      <div className="flex flex-col text-center">
        <h1 className="text-bg text-3xl mt-14 font-semibold">
          Har du spørsmål eller ønsker du å leie?
        </h1>

        <Link
          href="https://www.folkehogskole.no/index.php?page_id=80&skole_id=92"
          className="md:px-8 md:py-2.5 px-6 py-1.5 text-white justify-center font-semibold text-2xl transition-all duration-200 rounded-xl mt-8 hover:underline bg-[#618264] hover:bg-[#79AC78] cursor-pointer flex items-center space-x-2"
        >
          <FaArrowRight />
          <p>Ta kontakt</p>
          <FaArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default ArrangementerPage;
