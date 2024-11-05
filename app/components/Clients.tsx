import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-10">
        <div className="flex flex-row items-center mt-10">
          <div className="flex flex-col items-end gap-y-3 mr-1">
            <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">OUR  
            <span className="text-black font-bold"> CLIENTS</span>
          </h1>
          <div className="flex flex-col gap-y-3 ml-1">
            <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        <p className="text-[18px] mx-2 lg:mx-0 text-centermb-2">These are some of our esteemed clients.We take pride in the strong 
          relationships we&apos;ve built with these exceptional companies.
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-7 gap-10 lg:gap-20 mx-3 lg-0">
          <Image src={"/dr_javias.png"} alt="Dr Javias" width={100} height={100} />
          <Image src={"/chisambatc.png"} alt="Chisamba Town Council" width={100} height={100} />
          <Image src={"/mylan_2.png"} alt="Mylan" width={100} height={100} />
          <Image src={"/chavumatc.png"} alt="Chavuma Town Council" width={100} height={100} />
          <Image src={"/national_assemblies.png"} alt="National Assembly" width={100} height={100} />
          <Image src={"/chirundutc.png"} alt="Chirundu Town Coucil" width={100} height={100} />
          <Image src={"/incon.png"} alt="Incon Enterprises" width={100} height={100} />
        </div>
      </div>
    </>
  );
};

export default Clients;