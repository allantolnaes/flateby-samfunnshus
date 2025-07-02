import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "@/Data/data";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-basic scroll-mt-18">
      <SectionHeading>Våre linjer</SectionHeading>

      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-stretch">
        {blogs.slice(0, 3).map((blog) => (
          <div key={blog.id} className="h-full">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      {/* Se alle linjer button */}
      <div className="mt-20 flex justify-center">
        <Link href="/linjer">
          <div className="border-2 border-black underline text-black text-lg md:text-2xl font-bold px-10 py-4 rounded-xl hover:bg-[#618264] transition-all duration-300">
            Se alle linjer
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
