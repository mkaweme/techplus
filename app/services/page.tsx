import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center my-6">
          <div className="flex flex-col items-end gap-y-3 mr-1">
            <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">ALL  
            <span className="text-[#000000] font-bold"> SERVICES</span>
          </h1>
          <div className="flex flex-col gap-y-3 ml-1">
            <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-l-[14px] border-[#F89E3E] pl-10">
            <h3 className="text-[24px] font-bold">CIVIL CONSTRUCTION WORKS AND MAINTENANCE SERVICES</h3>
            <p className="w-[80%]">Techplus offers construction services from design to commissioning. We have an 
              expert team of civil engineers, technicians and bricklayers who can construct the 
              following;
            </p>
          </div>
          <ul>
            <li>- Bricklaying</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;