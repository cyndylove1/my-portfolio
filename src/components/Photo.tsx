"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../assets/mixed-race-girl.png";

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
              className="w-full md:h-[398px] h-[420px] absolute"
            >
              <motion.div className="pt-12 flex justify-center">
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
