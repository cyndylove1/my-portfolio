"use client";

import React, { useEffect } from "react";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursorDot = document.querySelector(
      "[data-cursor-dot]"
    ) as HTMLDivElement | null;

    const cursorOutline = document.querySelector(
      "[data-cursor-outline]"
    ) as HTMLDivElement | null;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorOutline) {
        cursorOutline.animate(
          [
            {
              left: `${posX}px`,
              top: `${posY}px`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      }
    };

    const hoverableElements = document.querySelectorAll(
      "a, button, [data-hoverable]"
    );
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorOutline?.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursorOutline?.classList.remove("cursor-hover");
      });
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot />
      <div className="cursor-outline" data-cursor-outline />
    </>
  );
};

export default CustomCursor;
