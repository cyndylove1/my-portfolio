"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../assets/laptop.png";

export default function Photo () {
  return (
    <>
      <div className="relative md:mt-[6rem] lg:mt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          <motion.div
            className="flex justify-center"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [0.9, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                delay: 2.4,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="md:w-[500px] w-full h-[398px] absolute"
            >
              <motion.div className="pt-12 flex justify-center">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#00d3bb"
                    d="M60.4,-3.5C60.4,23.4,30.2,46.8,-0.6,46.8C-31.4,46.8,-62.7,23.4,-62.7,-3.5C-62.7,-30.4,-31.4,-60.8,-0.6,-60.8C30.2,-60.8,60.4,-30.4,60.4,-3.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.div>
              <Image
                src={profile}
                priority
                quality={100}
                fill
                alt=""
                className="object-contain"
              />
            </motion.div>
            <motion.svg
              className="w-full md:w-[450px] h-[450px]"
              fill="transparent"
              viewBox="0 0 586 586"
              xmlns="https://www.w3.org/2008/svg"
            ></motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
