import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import BlogCard from "@/components/Home/Blog/BlogCard";
import { blogs } from "@/Data/data";
import CustomButton from "@/components/Helper/CustomButton";
import { MdSend } from "react-icons/md";
import Link from "next/link";

const Linjer = () => {
  return (
    <div className="min-h-screen bg-basic pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto mt-10">
        <SectionHeading>Alle våre linjer</SectionHeading>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          {blogs.map((blog) => (
            <div key={blog.id} className="h-full">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-bg text-3xl mt-14 font-semibold">
          Har vi klart å vekke en interesse?
        </h1>

        <Link
          href="https://www.folkehogskole.no/index.php?page_id=80&skole_id=92"
          className="md:px-8 md:py-2.5 px-6 py-1.5 text-white justify-center font-semibold text-2xl transition-all duration-200 rounded-xl mt-8 hover:underline bg-[#618264] hover:bg-[#79AC78] cursor-pointer flex items-center space-x-2"
        >
          Søk nå!
        </Link>
      </div>
    </div>
  );
};

export default Linjer;
