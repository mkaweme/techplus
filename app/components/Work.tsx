import React from "react";
import Link from "next/link";

const Work = () => {
  return (
    <>
      <div className="flex my-32 items-center justify-center">
        <div className="flex flex-col w-full lg:w-[1440px] h-[383px] bg-[url('/work_together_background.png')]">
          <div className="flex flex-col gap-y-1 w-full lg:w-[1440px] h-[383px] justify-center items-center bg-[#FF84009A]">
            <h3 className="text-[18px] lg:text-[22px] font-medium">Let&apos;s work together</h3>
            <h2 className="text-[24px] lg:text-[40px] text-white font-semibold">(+260)-976-055210</h2>
            <h3 className="text-[18px] lg:text-[22px] text-center font-medium">
              Plot 1080, Off Nationalist Road, Kamwala South, Lusaka
            </h3>
            <div className="flex flex-row relative mt-8 lg:mt-8">
              <div className="absolute -top-2 -left-2">
                <div className="w-[38px] h-[2px] bg-[#323131]"></div>
                <div className="w-[2px] h-[38px] bg-[#323131]"></div>
              </div>
              <Link href="/contact" className="py-3 px-7 bg-[#323131]">
                <p className="text-white text-[14px]">CONTACT US</p>
              </Link>
              <div className="flex flex-col absolute items-end top-3 -right-2">
                <div className="w-[2px] h-[38px] bg-[#323131]"></div>
                <div className="w-[38px] h-[2px] bg-[#323131]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;