"use client";
import { motion } from "framer-motion";
import { SiConekta } from "react-icons/si";
import Link from "next/link";
import Navbar from "./Navbar";
import Button from "./Button";
import MobileNavbar from "./MobileNavbar";
export default function Header() {
  return (
    <>
      <header className="pt-8 pb-14 text-white xl:mx-20 mx-4 md:mx-6 overflow-hidden">
        <div className="mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold tracking-[-5px] text-(--accent) flex items-center">
              <div className="h-[40px] w-[40px] bg-(--accent) rounded-[5px] flex items-center justify-center">
                <span className="text-black text-2xl">
                  <SiConekta />
                </span>
              </div>

              <motion.span
                className="text-white inline-block mx-4"
                animate={{ x: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                .
                
              </motion.span>
            </h1>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Navbar />
            <Link href="/contact">
              <Button text="Hire Me" className="px-6" showIcon={false} />
            </Link>
          </div>
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </header>
    </>
  );
}
