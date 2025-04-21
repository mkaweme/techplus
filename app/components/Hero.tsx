import React from "react";
import Image from "next/image";
import Work from "@/public/work.png"

const Hero = () => {
  return (
    <>
      <div className="lg:h-[85vh]">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col relative lg:w-[50%] ml-10 lg:mx-20 my-10 lg:my-20 h-96 justify-center gap-y-8">
            <h1 className="text-[34px] lg:text-[52px] font-black lg:font-bold ml-10 lg:ml-16 z-10">WE BUILD YOUR DREAM</h1>
            <p className="text-[13px] ml-10 lg:ml-16 z-10">As a premier engineering contracting and industrial supply firm, we specialize
              in delivering comprehensive solutions that cater to the diverse needs of our clients. With a strong focus on 
              technical expertise, innovative problem-solving, and exceptional customer service, we have 
              established ourselves as a trusted partner for industries seeking reliable and efficient engineering and supply
              chain solutions.
            </p>
            <div className="absolute top-0 border-[20px] border-[#F89E3E] w-48 lg:w-72 h-96 z-0"></div>
          </div>
          <Image src={Work} alt="work" className="px-8 lg:px-0 h-[25%] my-10 lg:mt-20 justify-center content-center self-center"/>
        </div>
      </div>
    </>
  );
}

export default Hero;