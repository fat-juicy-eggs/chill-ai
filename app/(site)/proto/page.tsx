import { Metadata } from "next";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";

export const metadata: Metadata = {
  title: "Prototype",
  description: "Prototype model of our product",
};

export default function Prototype() {
  return (
    <>
      <section>
        <About />
        <FeaturesTab />
      </section>
    </>
  );
}
