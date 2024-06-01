"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-7xl font-bold text-dark dark:text-white">
                CHILL AI
              </h1>
              <p className="text-dark font-bold text-2xl">
                Computational Heat Island Localization + Limitation
              </p>

              <div className="mt-10">
                <a href="#">
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-meetbutton px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-black dark:bg-meetbutton dark:hover:bg-blackho">
                  Vote for us!
                </button>
                </a>
              </div>
            </div>

            <div className="animate_right hidden md:w-2/3 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=UGO-1F29Tj6Icqpl" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
