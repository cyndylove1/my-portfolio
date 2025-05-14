"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

interface ButtonProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
}

export default function Button({ className, text, showIcon }: ButtonProps) {
  return (
    <>
      <button
        className={`py-2 border-[1px] text-white bg-transparent flex items-center justify-center gap-2 border-(--accent) rounded-[50px] hover:bg-(--accent) border-[1px] border-(--accent) hover:text-white transition-all duration-300 ease-in-out ${className}`}
      >
        {text}
        <motion.div
          animate={{
            y: [0, -2.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          {showIcon && <FiDownload />}
        </motion.div>
      </button>
    </>
  );
}
