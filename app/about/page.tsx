import React from "react";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-4 lg:mx-24">
        <div className="flex flex-row items-center my-6 lg:my-10">
          <div className="flex flex-col items-end gap-y-2 lg:gap-y-3 mr-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">About  
            <span className="text-black font-bold"> Us</span>
          </h1>
          <div className="flex flex-col gap-y-2 lg:gap-y-3 ml-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        <p className="text-center">Techplus Engineering Limited, a Zambian-owned company which excels as industrial 
          suppliers and contractors, specializing in Electrical, Civil, Mechanical, 
          Telelcommunication, IT services and general supply of goods and services. Our reputation
          is built on trust, professionalism and superior performance, driven by directors with 
          high-level expertise. We strictly adhere to quality checks, safety regulations, and 
          industrial compliance, ensuring excellence in project implementation.
        </p>
        <div className="flex flex-row items-center my-6 lg:my-10">
          <div className="flex flex-col items-end gap-y-2 lg:gap-y-3 mr-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">Our  
            <span className="text-black font-bold"> Mission</span>
          </h1>
          <div className="flex flex-col gap-y-2 lg:gap-y-3 ml-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        <p className="text-center">Techplus Engineering Limited is dedicated to providing top-notch goods and services 
          while upholding the highest standards of ethics, professionalism, and client care. We 
          make use of available resources, uphold strategic alliances, and constantly meet 
          deadlines.
        </p>
        <div className="flex flex-row items-center my-6 lg:my-10">
          <div className="flex flex-col items-end gap-y-2 lg:gap-y-3 mr-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">Our  
            <span className="text-black font-bold"> Vision</span>
          </h1>
          <div className="flex flex-col gap-y-2 lg:gap-y-3 ml-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        <p className="text-center">Our goal is to become the leading supplier of industrial hardware and equipment, 
          encompassing diverse industries globally, through strategic partnerships and exceptional 
          customer service.
        </p>
      </div>
      <div className="flex flex-col items-center mx-4 lg:mx-24">
      <div className="flex flex-row items-center my-6 lg:my-10">
          <div className="flex flex-col items-end gap-y-2 lg:gap-y-3 mr-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">Our  
            <span className="text-black font-bold"> Team</span>
          </h1>
          <div className="flex flex-col gap-y-2 lg:gap-y-3 ml-1">
            <div className="w-[55px] lg:w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[30px] lg:w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around mb-10">
          <div className="flex flex-col lg:w-[40%] py-6 px-4 h-auto items-center shadow-xl">
            <div className="flex w-[200px] h-[200px] justify-center items-center rounded-full bg-black">
              <Icon icon="mdi:user" width={100} height={100} color="white"/>
            </div>
            <h4 className="text-[17px] font-bold mt-4 text-center">ENG. ALBERT M. NKANDU</h4>
            <p className="text-[12px] lg:text-[14px] italic">MANAGING DIRECTOR</p>
            <p className="text-center my-4">Albert is a founding member of Techplus Engineering 
              Limited and serves as it&apos;s Managing Director. He oversees all technical and 
              administrative operations of the company. He holds a Bachelor&apos; Degree in
              Electrical Enginnering from the Copperbelt University and has over 5 years
              experience in mining and contracting sectors.
            </p>
          </div>
          <div className="flex flex-col lg:w-[40%] py-6 px-4 h-auto items-center shadow-xl">
            <div className="flex w-[200px] h-[200px] justify-center items-center rounded-full bg-black">
              <Icon icon="mdi:user" width={100} height={100} color="white"/>
            </div>
            <h4 className="text-[17px] font-bold mt-4 text-center">ENG. JOSEPH YOKA</h4>
            <p className="text-[12px] lg:text-[14px] italic">TECHNICAL DIRECTOR</p>
            <p className="text-center my-4">Joseph is a founding member of Techplus Engineering 
              Limited and serves as it&apos;s Technical Director. He oversees all technical
              operations of the company suh as approving designs and supervising works. He holds a Bachelor&apos; Degree in
              Electrical Enginnering from the Copperbelt University and has over 5 years
              experience in mining and contracting sectors.
            </p>
          </div>
        </div> 
      </div>
    </>
  );
}

export default About;