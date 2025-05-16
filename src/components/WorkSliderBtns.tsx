"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderBtns() {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex justify-end gap-2 mt-4 lg:flex hidden ">
        <button
          className="bg-black/50 h-[25px] w-[25px] flex cursor-pointer transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out items-center justify-center rounded-[3px]"
          onClick={() => swiper.slidePrev()}
        >
          <PiCaretLeftBold className="text-white" />
        </button>
        <button
          className="bg-black/50 h-[25px] w-[25px] transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out flex cursor-pointer items-center justify-center rounded-[3px]"
          onClick={() => swiper.slideNext()}
        >
          <PiCaretRightBold className="text-white" />
        </button>
      </div>
    </>
  );
}
