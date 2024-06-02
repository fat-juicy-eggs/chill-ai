import { Metadata } from "next";
import Feature from "@/component/Features";

export const metadata: Metadata = {
  title: "Prototype",
  description: "Prototype model of our product",
};

export default function Prototype() {
  return (
    <>
      <section>
        <Feature />
      </section>
    </>
  );
}
