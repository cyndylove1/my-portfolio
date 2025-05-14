"use client";
import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import Header from "@/components/Header";



export default function Home() {


  return (
    <section>
      <Header />
      <div className="xl:mx-20 md:mx-6 h-full pb-[3rem] custom-cursor">
        <div className=" min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between pb-[3rem]">
            {/* Text and icon section */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-none mx-2 lg:mt-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <span className="text-xl text-white">Frontend Developer</span>
              <h2 className="text-[38px] text-white md:text-[60px] leading-[1.1] font-semibold">
                Hello I&#39;m <br />
                <span className="text-(--accent)">Nweke Cynthia</span>
              </h2>
              <p className="md:max-w-[500px] text-white md:mb-6 mb-4">
                I am a Frontend Developer, I can provide clean code and pixel
                perfect design.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8">
                <a
                  href="Nweke Cynthia Chinenye Resume.pdf"
                  download="Nweke Cynthia Chinenye Resume.pdf"
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
              className="order-1 md:order-none"
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
