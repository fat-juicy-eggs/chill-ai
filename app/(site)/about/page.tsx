"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <section id="support" className="px-4 md:px-8 2xl:px-0">
          <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
            <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47]"></div>
            <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
              <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
                  className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
                >
                  <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                    Send a message
                  </h2>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
