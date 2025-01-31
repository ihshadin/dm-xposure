import Breadcamp from "@/utils/Breadcamp";
import React from "react";
import BlogCard from "./BlogCard";
import { TBlog } from "@/types/blog.type";

const data = [
  {
    title: "Sunset Over the Mountains",
    img: "https://images.pexels.com/photos/3805358/pexels-photo-3805358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-10-15",
  },
  {
    title: "Autumn Forest Pathway",
    img: "https://images.pexels.com/photos/2214363/pexels-photo-2214363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-11-05",
  },
  {
    title: "Beach Sunrise",
    img: "https://images.pexels.com/photos/618388/pexels-photo-618388.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-08-30",
  },
  {
    title: "Snowy Mountain Peaks",
    img: "https://images.pexels.com/photos/5543247/pexels-photo-5543247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-12-10",
  },
  {
    title: "Desert Dunes",
    img: "https://images.pexels.com/photos/5973909/pexels-photo-5973909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-07-18",
  },
  {
    title: "Waterfall in the Jungle",
    img: "https://images.pexels.com/photos/8332805/pexels-photo-8332805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-06-25",
  },
  {
    title: "Northern Lights",
    img: "https://images.pexels.com/photos/28542544/pexels-photo-28542544/free-photo-of-st-sava-church-in-warsaw-poland-with-blue-domes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-01-14",
  },
  {
    title: "Tulip Fields in Spring",
    img: "https://images.pexels.com/photos/5681368/pexels-photo-5681368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-04-09",
  },
  {
    title: "Historic Castle",
    img: "https://images.pexels.com/photos/28542545/pexels-photo-28542545/free-photo-of-orthodox-church-with-blue-domes-in-warsaw.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2023-03-17",
  },
];
const BlogsPage = () => {
  return (
    <>
      <Breadcamp title="All Blogs Posts" />
      <section className="pb-14 lg:pb-24">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.map((blog: TBlog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
