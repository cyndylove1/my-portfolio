"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import work from "../work/data";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Header from "@/components/Header";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const sliderVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

export default function Work() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [project, setProject] = useState(work[0]);

  

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(work[currentIndex]);
  };

  return (
    <>
      <Header />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="flex flex-col justify-center min-h-screen"
      >
        <div className="xl:mx-20 text-white py-10 md:mx-6 mx-4">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <motion.div
              variants={textVariants}
              className="w-full lg:w-[50%] flex flex-col justify-between order-2 lg:order-none"
            >
              <div className="flex flex-col gap-[38px] h-[38%]">
                <div className="text-white transparent text-6xl leading-none font-extrabold">
                  {project.num}
                </div>
                <h2 className="text-xl text-(--accent)">{project.title}</h2>
                <h2 className="text-white">{project.description}</h2>
                <ul className="flex gap-4">
                  {project.stack?.map((items, index, array) => {
                    return (
                      <li key={index} className="text-md text-(--accent)">
                        {items.name}
                        {index !== array.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  {project.live && (
                    <Link href={project.live}>
                      <div className="h-[48px] w-[48px] transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-(--accent)" />
                      </div>
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-[48px] w-[48px] transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-2xl text-white group-hover:text-(--accent)" />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
            {/* SwiperSlide */}
            <motion.div
              variants={sliderVariants}
              className="w-full lg:w-[50%] relative"
            >
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="mb-12 "
                onSlideChange={handleSlideChange}
                onSwiper={(swiper: SwiperType) => {
                  swiperRef.current = swiper;
                }}
              >
                {work.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="md:h-[300px] h-[150px] relative group flex justify-center items-center bg-pink-50/28 rounded-[5px]">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          {project.image && (
                            <Image
                              src={project.image}
                              fill
                              className="object-cover w-full rounded-[5px]"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* button */}
                <WorkSliderBtns />

                <div className="justify-end gap-2 mt-4 ">
                  <button
                    className="bg-(--accent) h-[25px] cursor-pointer transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out w-[25px] lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-[3px]"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <PiCaretLeftBold className="text-black" />
                  </button>
                  <button
                    className="bg-(--accent) h-[25px] transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out cursor-pointer w-[25px] lg:hidden flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-[3px]"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <PiCaretRightBold className="text-black" />
                  </button>
                </div>
              </Swiper>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
