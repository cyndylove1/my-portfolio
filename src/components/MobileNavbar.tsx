"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SiConekta } from "react-icons/si";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import Button from "./Button";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function MobileNavbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="lg:hidden">
        {isOpen ? (
          <LiaTimesSolid className="text-[32px] text-(--accent) fixed right-6 top-6 z-50" />
        ) : (
          <CiMenuFries className="text-[32px] text-(--accent)" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu (Now slides from the right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-(--primary) shadow-lg z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-8 p-8 mt-16 justify-center items-center">
          <div className="mt-10 mb-10 text-center">
            <Link href="/">
              <h1 className="text-4xl font-semibold gap-[5px] tracking-[-5px] text-(--accent) flex items-center">
                <div className="h-[40px] w-[40px] bg-(--accent) rounded-[5px] flex items-center justify-center">
                  <span className="text-white text-2xl">
                    <SiConekta />
                  </span>
                </div>

                <motion.span
                  className="text-white inline-block"
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
          </div>
          {links.map((link, index) => {
            return (
              <Link
                onClick={toggleMenu}
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-(--accent) border-b-2 border-(--accent) "
                } font-medium  hover:text-(--accent) transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button text="Hire Me" className="px-6" showIcon={false} />
          </Link>
        </nav>
      </div>
    </>
  );
}
