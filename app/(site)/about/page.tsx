import { Metadata } from "next";
import Intro from "@/components/Intro";
import Blog from "@/components/Blog";
import BlogData from "@/components/Blog-board/blogData";
import BlogItem from "@/components/Blog-board/BlogItem";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Our team + ideas",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Intro />
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-5 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
