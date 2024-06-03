import { Metadata } from "next";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

export const metadata: Metadata = {
  title: "CHILL AI",
  description: "Computational Heat Island Localization + Limitation",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
    </main>
  );
}
