import React from "react";
import Image from "next/image";
import { TBlog } from "@/types/blog.type";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="border border-white/70 rounded-xl">
      <Image
        className="rounded-t-xl w-full h-[240px] object-cover"
        src={blog?.img}
        width={800}
        height={800}
        alt="Xposure"
      />
      <div className="p-5">
        <Link href={"/blogs/lkjf"}>
          <h1 className="text-2xl font-semibold text-white mb-2">
            {blog?.title}
          </h1>
        </Link>
        <span className="px-2 py-1 bg-[#E4F3FF] text-black/90 text-xs rounded-md">
          {blog?.date}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
