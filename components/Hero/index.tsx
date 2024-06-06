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
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Computational Heat Island Localization + Limitation
              </h1>
              <p className="text-dark font-bold text-2xl">
                Cooler cities, brighter futures
              </p>
              <div className="mt-10">
                <a href="https://app.moonshotpirates.com/vote/chill-ai">
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-black">
                  Vote for us!
                </button>
                </a>
              </div>
            </div>
            <div className="animate_right hidden md:w-2/3 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <iframe width="560" height="315" src="https://m.youtube.com/shorts/Pn9MuJHDx8k?si=Our3wcjomQ5aoJ62" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
