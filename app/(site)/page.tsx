import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "CHILL AI",
  description: "Computational Heat Island Localization + Limitation",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
