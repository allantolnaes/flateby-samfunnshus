import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "@/Data/data";

const Blog = () => {
  return (
    <div id="blog" className="pt-16 pb-16 bg-[#4ED7F1] scroll-mt-28">
      <SectionHeading>Min blogg</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
