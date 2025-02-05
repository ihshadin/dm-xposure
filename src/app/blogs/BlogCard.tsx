import React from "react";
import Image from "next/image";
import { TBlog } from "@/types/blog.type";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="border border-[#D9D9D9]/30 rounded-xl">
      <Image
        className="rounded-t-xl w-full aspect-[8/5] object-cover"
        src={blog?.img}
        width={800}
        height={800}
        alt="Xposure"
      />
      <div className="p-4 md:p-6">
        <div className="text-[#E4F3FF] text-sm flex justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <FiCalendar />
            {blog?.date}
          </div>
          <div className="flex items-center gap-1.5">
            <MdOutlineWatchLater />3 Minutes
          </div>
        </div>
        <Link href={"/blogs/lkjf"}>
          <h1 className="text-lg font-semibold text-white">{blog?.title}</h1>
        </Link>
        <p className="text-sm text-white mt-4 mb-4">
          Discover how integrating React Native apps with a MERN Stack backend
          ensures seamless data synchronization, improving performance,
          scalability, and user experience.
        </p>
        <Link href={"/blogs/lkjf"}>
          <div className="flex items-center gap-1 text-sm text-secondary">
            Read More <FaAngleRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
