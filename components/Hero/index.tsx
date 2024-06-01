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
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[960/540] w-full z-2">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="dark:block"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
