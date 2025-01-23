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
          <h3 className="text-[30px] font-bold my-2">Commitment to our customers</h3>
          <p className="text-[14px]">With over five years (05) of operational expertise, our organization has cultivated a 
            diverse portfolio of project experience spanning multiple industries, including mining, healthcare, 
            construction, power generation, manufacturing, telecommunications, and wood processing. This 
            broad-based experience has enabled us to develop a unique understanding of the complex challenges and 
            opportunities inherent to each sector, allowing us to deliver bespoke solutions that meet the highest 
            standards of quality, reliability, and client satisfaction. Our commitment to excellence is underscored by our 
            adherence to rigorous ethical principles, unwavering professionalism, and a client-centric approach that 
            prioritizes tailored support and exceptional service delivery.
          </p>
        </div>
        <div className="flex flex-col lg:w-[30%] mt-10 lg:mt-0 lg:mb-32 items-center">
          <Image src="/chasaya_md.jpeg" alt="chasaya_md" width={841} height={1019} className="w-[300px] h-auto rounded-md"/>
          <div className="flex flex-col lg:flex-row items-center mt-4 gap-x-6">
            <Image src="/signature.png" alt="signature" width={709} height={461} className="w-[150px] h-auto"/>
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