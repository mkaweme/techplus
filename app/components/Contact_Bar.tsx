import React from "react";
import { Icon } from "@iconify/react";
const Contact_Bar = () => {

  return (
      <div className="hidden lg:flex flex-row bg-[#EE4036] w-full roboto">
        <div className="flex flex-row w-[60%] ml-40 gap-x-10">
          <div className="flex flex-row items-center">
            <div className="flex flex-row p-1 m-2 bg-[#F89E3E]">
              <Icon icon="uiw:mail" width="16" height="16" color="#FFFFFF"/>
            </div>
            <p className="text-white font-[500] text-[13px]">info@techplus.co.zm</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row p-1 m-2 bg-[#F89E3E]">
              <Icon icon="mage:phone-fill" width="16" height="16" color="#FFFFFF"/>
            </div>
            <p className="text-white font-[500] text-[13px]">+260974963639</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row p-1 m-2 bg-[#F89E3E]">
              <Icon icon="mdi:clock-outline" width="16" height="16" color="#FFFFFF" />
            </div>
            <p className="text-white font-[500] text-[13px]">Mon-Fri: 08:00 - 17:00Hrs</p>
          </div>
        </div>
      </div>
  );
};

export default Contact_Bar;