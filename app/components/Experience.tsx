import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row m-10 lg:m-20">
        <div className="lg:relative lg:w-[40%] lg:pl-16">
          <div className="hidden lg:block bg-[#F89E3E] w-[270px] lg:w-[381px] h-[360px] lg:h-[481px] lg:absolute top-10 left-5 z-0"></div>
          <div className="lg:absolute z-10 border-[14px] lg:border-0 border-[#F89E3E]">
            <Image src="/experience.jpg" alt="experience" width={381} height={486}/>
          </div>
        </div>
        <div className="flex flex-col lg:w-[60%] mt-10 lg:mt-0 lg:mb-32 justify-start items-start">
          <div className="flex flex-col justify-center align-middle pl-3 border-[#F89E3E] border-l-[14px]">
            <h1 className="text-[#F89E3E] font-bold text-[60px] bg-[url(/experience_background.png)]">5</h1>
            <p className="font-bold text-[22px]">Years of Experience</p>
          </div>
          <h3 className="text-[32px] font-bold my-4">Our Commitment to our customers</h3>
          <p className="text-[17px]">We have been operating for just about 5 years and have gathered wide experience
            in carrying out various projects in different sectors such as Mining, Hospitals, General Construction, 
            Power Generation plants, Manufacturing, Telecommunications and Wood processing. Our experience allows us to 
            provide top-notch goods and services while upholding the highest standards of ethics, professionalism, and 
            client care.
          </p>
          <div className="mt-4">
            <p className="text-[18px] font-semibold">Eng. Andrew Chasaya</p>
            <p className="text-[14px] font-light italic">Founder and M.D</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;