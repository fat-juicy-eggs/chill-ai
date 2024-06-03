import { Metadata } from "next";
import Intro from "@/components/Intro";
import Blog from "@/components/Blog";
import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import React from "react";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Our team + ideas",
  // other metadata
};

export default function Home() {
  return (
    <>
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            Our Team
          </h2>
          <div className="mx-auto mt-5 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {BlogData.map((post, key) => (
                <BlogItem key={key} blog={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
