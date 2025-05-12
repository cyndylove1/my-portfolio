"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutMe, { skills } from "../about/data";
import Header from "@/components/Header";

type ContentType = "about" | "skills";

const About = () => {
  const [activeContent, setActiveContent] = useState<ContentType>("about");

  const renderContent = () => {
    switch (activeContent) {
      case "about":
        return (
          <div className="">
            <h3 className="text-[30px] md:text-start pb-2 text-center pt-[5rem] md:pt-0 font-bold text-(--accent)">
              {AboutMe.title}
            </h3>
            <p className="text-white ">{AboutMe.description}</p>
          </div>
        );
      case "skills":
        return (
          <div className="">
            <h3 className="text-[30px] md:text-start pb-2 text-center pt-[5rem] md:pt-0 font-bold text-(--accent)">
              {skills.title}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {skills.skillList.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div className="tooltip" data-tip={skill.name}>
                    <div
                      key={index}
                      className="h-[138px] text-center bg-[#27272c] rounded-lg pt-8"
                    >
                      <div className="flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="text-6xl text-white hover:text-(--accent) transition-all duration-300 ease-in-out" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="min-h-screen"
      >
        <div className="xl:mx-20 mx-4 md:mx-6 rounded-lg overflow-hidden">
          <div className="md:flex flex-col md:flex-row gap-[5rem] pt-10">
            {/* Left Navigation */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="md:w-1/3"
            >
              <nav className="space-y-4">
                <button
                  onClick={() => setActiveContent("about")}
                  className={`block text-center w-full px-4 py-2 rounded cursor-pointer ${
                    activeContent === "about"
                      ? "bg-(--accent) text-black"
                      : "bg-[#27272c] text-white hover:text-(--accent) transition-all duration-300 ease-in-out"
                  }`}
                >
                  {AboutMe.title}
                </button>

                <button
                  onClick={() => setActiveContent("skills")}
                  className={`block text-center w-full px-4 py-2 rounded cursor-pointer ${
                    activeContent === "skills"
                      ? "bg-(--accent) text-black"
                      : "bg-[#27272c] text-white hover:text-(--accent) transition-all duration-300 ease-in-out"
                  }`}
                >
                  My Skills
                </button>
              </nav>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="md:w-2/3 overflow-y-auto custom-scrollbar max-h-[80vh] pb-[8rem] md:pb-0"
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
