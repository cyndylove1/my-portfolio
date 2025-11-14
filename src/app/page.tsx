"use client";
import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import Button from "@/components/Button";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section>
      <div className="xl:mx-20 md:mx-6 mx-4 custom-cursor md:mt-[6rem] mt-[3rem] lg:mt-0">
        <div className="min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text and icon section */}
            <motion.div
              className="text-start lg:mt-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <span className="text-xl text-white">Frontend Developer</span>
              <h2 className="text-[38px] text-white md:text-[60px] leading-[1.1] font-semibold">
                Hello I&#39;m <br />
                <span className="text-(--accent)">Nweke Cynthia</span>
              </h2>
              <p className="xl:max-w-[500px] text-white md:mb-6 mb-4">
                I am a Frontend Developer,I can provide clean code and pixel
                perfect designs.
              </p>
              <div className="flex flex-row items-center md:gap-8 gap-4">
                <a
                  href="Nweke Cynthia  Resume.pdf"
                  download="Nweke Cynthia  Resume.pdf"
                >
                  <Button text="Download Cv" className="px-6" showIcon={true} />
                </a>
                <div>
                  <Socials />
                </div>
              </div>
            </motion.div>

            {/* Photo section */}
            <motion.div
              className=""
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Photo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
