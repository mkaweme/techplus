import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center pb-10 lg:pb-20">
      <div className="flex flex-row items-center my-10">
        <div className="flex flex-col items-end gap-y-3 mr-1">
          <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
          <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
        </div>
        <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">CONTACT 
          <span className="text-[#000000] font-bold"> US</span>
        </h1>
        <div className="flex flex-col gap-y-3 ml-1">
          <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
          <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
        </div>
      </div>
      <div className='flex justify-center items-center w-[90%] h-[400px] border-[14px] border-[#F89E3E]'>
         <h1>LOCATION</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-5 w-full mt-14 mx-20 justify-center text-[14px] text-[#626262]">
        <div className="relative flex flex-col lg:w-[15%] items-center pt-16 border-[1px] p-3 my-9 mx-12 lg:m-3 h-48">
          <Icon icon="mdi:location" width="100" height="100" color="#F89E3E" className="absolute border-[1px] p-6 rounded-full -top-12 bg-white"/>
          <h6 className="my-1 text-black font-semibold">Office location</h6>
          <p>Plot 002</p>
          <p>Off Mungwi Road</p>
          <p>Chikondano Lusaka West</p>
          <p>Lusaka</p>
        </div>
        <div className="relative flex flex-col lg:w-[15%] items-center pt-16 border-[1px] p-3 my-9 mx-12 lg:m-3 h-48">
          <div className="absolute border-[1px] p-6 rounded-full -top-12 bg-white">
            <Icon icon="mdi:clock" width="50" height="50" color="#F89E3E"/>
          </div>
          <h1 className="my-1 text-black font-semibold">Office Hours</h1>
          <p>Mon-Fri: 08:00 - 17:00Hrs</p>
          <p>Sat: 08:00 - 12:30Hrs</p>
          <p>Sun: Closed</p>
        </div>
        <div className="relative flex flex-col lg:w-[15%] items-center pt-16 border-[1px] p-3 my-9 mx-12 lg:m-3 h-48">
          <div className="absolute border-[1px] p-6 rounded-full -top-12 bg-white">
            <Icon icon="ic:baseline-phone" width="50" height="50" color="#F89E3E"/>
          </div>
          <h1 className="text-black my-1 font-semibold">Call Us</h1>
          <p>+260 974963639</p>
          <p>+260 976055210</p>
        </div>
        <div className="relative flex flex-col lg:w-[15%] items-center pt-16 border-[1px] p-3  my-9 mx-12 lg:m-3 h-48">
          <div className="absolute border-[1px] p-6 rounded-full -top-12 bg-white">
            <Icon icon="uiw:mail" width="50" height="50" color="#F89E3E"/>
          </div>
          <h1 className="text-black my-1 font-semibold">Email Us</h1>
          <p>josephyoka@gmail.com</p>
          <p>mushokenkandu3@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;