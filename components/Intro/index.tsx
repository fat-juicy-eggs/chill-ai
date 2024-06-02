"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Intro = () => {
  return (
    <>
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Urban Heat Islands
            </h2>
            <p className="mb-2 text-dark font-bold">
              What are they?
            </p>
            <ul className="list-disc ml-10 font-medium text-dark mb-5">
              <li>
                Metropolitan areas warmer than the surrounding environment
              </li>
              <li>
                Caused by natural land being replaced with artificial heat-retaining materials
              </li>
              <li>
                Drastically increases health risks from high temperatures and air pollution
              </li>
            </ul>
            <br></br><br></br>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              CHILL AI
            </h2>
            <p className="mb-2 text-dark font-bold">
              What do we do about them?
            </p>
            <ul className="list-disc ml-10 font-medium text-dark mb-5">
              <li>
                Using satellite thermal imagery and available weather data
              </li>
              <li>
                Generate maps to track and identify urban heat islands
              </li>
              <li>
                Governments and urban planners can create cooler, healthier, and sustainable environments
              </li>
            </ul>
            <br></br><br></br>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Intro;
