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
        <iframe title="map" allowFullScreen={true} loading="lazy" className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3847.1821818201497!2d28.179948375121278!3d-15.366616685215627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIxJzU5LjgiUyAyOMKwMTAnNTcuMSJF!5e0!3m2!1sen!2szm!4v1732676730718!5m2!1sen!2szm"></iframe>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-5 w-full mt-14 mx-20 justify-center text-[14px] text-[#626262]">
        <div className="relative flex flex-col lg:w-[18%] items-center pt-16 border-[1px] p-3 my-9 mx-12 lg:m-3 h-48">
          <Icon icon="mdi:location" width="100" height="100" color="#F89E3E" className="absolute border-[1px] p-6 rounded-full -top-12 bg-white"/>
          <h6 className="my-1 text-black font-semibold">Office location</h6>
          <p>Plot 002</p>
          <p>Off Mungwi Road</p>
          <p>Chikondano Lusaka West</p>
          <p>Lusaka</p>
        </div>
        <div className="relative flex flex-col lg:w-[18%] items-center pt-16 border-[1px] p-3 my-9 mx-12 lg:m-3 h-48">
          <div className="absolute border-[1px] p-6 rounded-full -top-12 bg-white">
            <Icon icon="mdi:clock" width="50" height="50" color="#F89E3E"/>
          </div>
          <h1 className="my-1 text-black font-semibold">Office Hours</h1>
          <p>Mon-Fri: 08:00 - 17:00Hrs</p>
          <p>Sat: 08:00 - 12:30Hrs</p>
          <p>Sun: Closed</p>
        </div>
        <div className="relative flex flex-col lg:w-[18%] items-center pt-16 border-[1px] p-3 my-9 mx-12 lg:m-3 h-48">
          <div className="absolute border-[1px] p-6 rounded-full -top-12 bg-white">
            <Icon icon="ic:baseline-phone" width="50" height="50" color="#F89E3E"/>
          </div>
          <h1 className="text-black my-1 font-semibold">Call Us</h1>
          <p>+260 974963639</p>
          <p>+260 976055210</p>
        </div>
        <div className="relative flex flex-col lg:w-[18%] items-center pt-16 border-[1px] p-3  my-9 mx-12 lg:m-3 h-48">
          <div className="absolute border-[1px] p-6 rounded-full -top-12 bg-white">
            <Icon icon="uiw:mail" width="50" height="50" color="#F89E3E"/>
          </div>
          <h1 className="text-black my-1 font-semibold">Email Us</h1>
          <p>techplusengineeringltd@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;