import { Metadata } from "next";
import Intro from "@/components/Intro";
import Blog from "@/components/Blog";
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
      <Blog />
    </>
  );
}
