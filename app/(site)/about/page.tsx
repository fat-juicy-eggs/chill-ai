import { Metadata } from "next";
import Intro from "@/components/Intro";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Our team + ideas",
  // other metadata
};

export default function Home() {
  return (
    <>
      <div className="pb-20 pt-40">
        <Intro />
      </div>
    </>
  );
}
