import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const About = () => {

  return (
    <>
      <div className="flex flex-col items-center mx-4 lg:mx-24">
        <div className="flex flex-col items-center my-20">
          <div className="flex flex-row items-center my-6 lg:my-12">
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
        </div>
        <div className="flex flex-col items-center my-20">
          <div className="flex flex-row items-center my-6 lg:my-12">
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
          <p className="text-center">At Techplus, we are dedicated to providing top-notch goods and services 
            while upholding the highest standards of ethics, professionalism, and client care. We 
            make use of available resources, uphold strategic alliances, and constantly meet 
            deadlines.
          </p>
        </div>
        <div className="flex flex-col items-center my-20">
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
      </div>
      <div className="flex flex-col items-center mx-4 lg:mx-24 my-20">
        <div className="flex flex-col items-center my-20">
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
          <div className="flex flex-col lg:flex-row items-center gap-x-10 my-6">
            <p className="text-center lg:text-left">We have a fully qualified and dedicated team with vast experience in a wide range of sectors. We understand that 
              our clients desire excellent service delivery and that is why we take every effort to his the right people. Our 
              staff are composed of members with a wide range of expertise including bricklayers, electricians, plumbers and 
              other technicians and craftsmen.
            </p>
            <Image src="/team.jpg" alt="team" width={756} height={697} className="w-[300px] lg:[500px] h-auto rounded-lg mt-12 lg:mt-0"/>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around mb-10 gap-y-20">
          <div className="flex flex-col lg:w-[25%] py-6 px-6 h-auto items-center shadow-xl">
            <Image src="/chasaya.jpeg" alt="Joseph Yoka" width={1080} height={975} className="rounded-full w-[220px] h-[200px]"/>
            <h4 className="text-[17px] font-bold mt-4 text-center">ENG. ANDREW CHASAYA</h4>
            <p className="text-[12px] lg:text-[14px] italic">MANAGING DIRECTOR</p>
            <p className="text-[14px] text-justify mt-4">Andrew is the Managing Managing Director of Techplus
              Engineering Limited. He oversees operations of the company such as strategic planning and 
              development. He holds a Bachelor&apos; Degree in Electrical Engineering from the Copperbelt 
              University and has over 20 years experience in Maintenance, Design, Operations, System 
              studies, installation of equipment and Project Management in the Mining, General Construction, 
              Power Generation plants, manufacturing and telecommunications sectors.
            </p>
          </div>
          <div className="flex flex-col lg:w-[25%] py-6 px-6 h-auto items-center shadow-xl">
            <div className="flex w-[200px] h-[200px] justify-center items-center rounded-full bg-black">
              <Icon icon="mdi:user" width={100} height={100} color="white"/>
            </div>
            <h4 className="text-[17px] font-bold mt-4 text-center">ENG. ALBERT M. NKANDU</h4>
            <p className="text-[12px] lg:text-[14px] italic">OPERATIONS DIRECTOR</p>
            <p className="text-[14px] text-justify mt-4">Albert is a founding member of Techplus Engineering 
              Limited and serves as it&apos;s Operations Director. He oversees all operational aspects
              of the company such as coordinating logistics and supervising works. He holds a Bachelor&apos;s 
              Degree in Electrical Engineering from the Copperbelt University and has over 5 years
              experience in maintenance, design and installation of equipment in the Mining, Construction
              and telecommunication sectors.
            </p>
          </div>
          <div className="flex flex-col lg:w-[25%] py-6 px-6 h-auto items-center shadow-xl">
            <Image src="/yoka.jpeg" alt="Joseph Yoka" width={812} height={762} className="rounded-full w-[200px] h-[200px]"/>
            <h4 className="text-[17px] font-bold mt-4 text-center">ENG. JOSEPH YOKA</h4>
            <p className="text-[12px] lg:text-[14px] italic">TECHNICAL DIRECTOR</p>
            <p className="text-[14px] text-justify mt-4">Joseph is a founding member of Techplus Engineering 
              Limited and serves as it&apos;s Technical Director. He oversees all technical
              operations of the company such as approving designs. He holds a Bachelor&apos;s Degree in
              Electrical Engineering from the Copperbelt University and has over 5 years
              experience in Mining, Construction and Manufacturing sectors.
            </p>
          </div>
        </div> 
      </div>
    </>
  );
}

export default About;