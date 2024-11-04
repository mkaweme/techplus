import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
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
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-20 my-10">
          <div className="flex flex-col w-[380px] py-6 h-auto items-center shadow-xl">
            <div className="flex w-[95px] h-[95px] justify-center items-center rounded-full bg-[#EE4036]">
              <Icon icon="fluent-emoji-high-contrast:building-construction" width="48" height="48" color="#FFFFFF" />
            </div>
            <h4 className="text-[17px] font-bold my-6">CIVIL AND CONSTRUCTION</h4>
            <p className="text-center">Techplus offers construction services from design to 
              commissioning. We have an expert team of civil engineers, technicians and 
              bricklayers. 
            </p>
            <Link href="/services" className="flex mt-6 font-semibold">
              <p>Read More</p>
              <Icon icon="lsicon:right-filled" width="24" height="24" />
            </Link>
          </div>
          <div className="flex flex-col w-[380px] py-6 h-auto items-center shadow-xl">
            <div className="flex w-[95px] h-[95px] justify-center items-center rounded-full bg-[#EE4036]">
            <Icon icon="mingcute:high-voltage-power-line" width="48" height="48" color="#FFFFFF" />
            </div>
            <h4 className="text-[17px] font-bold my-6 text-center">ELECTRICAL INSTALLATION & MAINTENANCE</h4>
            <p className="text-center">Our team is capapble of undertaking electrical projects that 
              cover a wide range from 240V to 66KV.</p>
            <Link href="/services" className="flex mt-6 font-semibold">
              <p>Read More</p>
              <Icon icon="lsicon:right-filled" width="24" height="24" />
            </Link>
          </div>
          <div className="flex flex-col w-[380px] py-6 h-auto items-center shadow-xl">
            <div className="flex w-[95px] h-[95px] justify-center items-center rounded-full bg-[#EE4036]">
              <Icon icon="maki:communications-tower" width="48" height="48" color="#FFFFFF"/>
            </div>
            <h4 className="text-[17px] font-bold my-6">TELECOMMUNICATION</h4>
            <p className="text-center">We offer a wide range of services in the telecommunications sector</p>
            <Link href="/services" className="flex mt-6 font-semibold">
              <p>Read More</p>
              <Icon icon="lsicon:right-filled" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;