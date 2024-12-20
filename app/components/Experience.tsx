import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
      <div className="flex flex-col lg:flex-row justify-between m-10 lg:m-20">
        <div className="lg:relative lg:w-[30%] lg:pl-16">
          <div className="hidden lg:block bg-[#F89E3E] w-[337px] h-[383px] lg:h-[430px] lg:absolute top-10 left-5 z-0"></div>
          <div className="lg:absolute z-10 border-[14px] lg:border-0 border-[#F89E3E]">
            <Image src="/experience.jpg" alt="experience" width={533} height={680} className="w-[533px] h-auto"/>
          </div>
        </div>
        <div className="flex flex-col lg:w-[30%] mt-10 lg:mt-0 lg:mb-32 justify-start items-start">
          <div className="flex flex-col justify-center align-middle pl-3 border-[#F89E3E] border-l-[14px]">
            <h1 className="text-[#F89E3E] font-bold text-[60px] bg-[url(/experience_background.png)]">5</h1>
            <p className="font-bold text-[22px]">Years of Experience</p>
          </div>
          <h3 className="text-[30px] font-bold my-2">Our commitment to our customers</h3>
          <p className="text-[17px]">We have been operating for 5 years and have gathered experience in carrying
            out projects in different sectors such as Mining, Medicine, Construction, Power Generation plants
            Manufacturing, Telecommunications and Wood processing. Our experience allows us to provide top-notch
            goods and services while upholding the highest standards of ethics, professionalism, and client
            care.
          </p>
        </div>
        <div className="flex flex-col lg:w-[30%] mt-10 lg:mt-0 lg:mb-32 items-center">
          <Image src="/chasaya_md.jpeg" alt="chasaya_md" width={300} height={300} className="rounded-md"/>
          <div className="flex flex-col lg:flex-row items-center mt-4 gap-x-6">
            <Image src="/signature.png" alt="signature" width={150} height={50}/>
            <div>
              <p className="text-[18px] font-semibold">Eng. Andrew Chasaya</p>
              <p className="text-[14px] font-light italic">Managing Director</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Experience;