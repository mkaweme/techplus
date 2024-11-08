import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services_Section = () => {

  return (
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
      <section className="flex flex-col w-full" id="construction">
        <div className="flex w-full justify-center align-middle items-center bg-[url('/work_together_background.png')] bg-cover bg-fixed h-[200px] lg:h-[300px]">
          <h3 className="text-[22px] lg:text-[36px] font-bold text-white text-center mx-1 lg:mx-0">
            CIVIL CONSTRUCTION WORKS AND MAINTENANCE SERVICES
          </h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mx-6 lg:mx-20 my-8 lg:my-16">
          <div className="lg:w-[60%]">
            <p className="text-[16px] lg:text-[20px] mx-1 lg:mx-6 my-6 lg:my-0">Techplus offers construction services from design to commissioning. We have an 
              expert team of civil engineers, technicians and bricklayers who can construct the following;
            </p>
            <ul className="flex flex-col mx-1 lg:mx-12 gap-y-3 mt-4 text-[16px] lg:text-[18px]">
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> Pavements</li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> Residential, commercial and industrial infrastructure</li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> Drainage systems</li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> Road networks</li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> Substation civil structure</li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> Renovation of Buildings/ monuments/ landmarks and Painting</li>
            </ul>
          </div>
          <div>
            <Image src="/construction.png" alt="Construction" width={500} height={500} className="border-[6px] lg:border-[14px] border-[#F89E3E]"/>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full" id="electrical">
        <div className="flex w-full justify-center align-middle items-center bg-[url('/work_together_background.png')] bg-cover bg-fixed h-[200px] lg:h-[300px]">
          <h3 className="text-[22px] lg:text-[36px] font-bold text-white text-center mx-1 lg:mx-0">
            ELECTRICAL INSTALLATION AND MAINTENANCE SERVICES
          </h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mx-6 lg:mx-20 my-8 lg:my-16">
          <div className="lg:w-[60%]">
            <p className="text-[16px] lg:text-[20px] mx-1 lg:mx-6 my-6 lg:my-0">Techplus can undertake a very wide scale of electrical projects ranging from 
              residential and domestic size projects and 240V to industrial and commercial projects of 66KV. This includes;
            </p>
            <ul className="flex flex-col mx-1 lg:mx-12 gap-y-3 mt-4 text-[16px] lg:text-[18px]">
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> 
                Design and complete wiring of households, commercial and industrial infrastructure
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> 
                Design and commision of overhead lines from 0.4KV to 66KV
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> 
                Design and installation of solar systems
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> 
                Design and installation of backup battery power systems complete with an inverter
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> 
                Design, test and commisioning of substations from 25KVA to 10MVA at a highest rated voltage of 33KV
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> 
                Maintenance of power transformers at a highest rating of 10MVA and switchgear at a highest rated voltage of 33KV
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/> 
                Supply and installation of Gensets
              </li>
            </ul>
          </div>
          <div>
            <Image src="/electrical.png" alt="electrical_intallation" width={500} height={500} className="border-[6px] lg:border-[14px] border-[#F89E3E]"/>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full" id="telecommunication">
        <div className="flex w-full justify-center align-middle items-center bg-[url('/work_together_background.png')] bg-cover bg-fixed h-[200px] lg:h-[300px]">
          <h3 className="text-[22px] lg:text-[36px] font-bold text-white text-center mx-1 lg:mx-0">
            TELECOMMUNICATION INSTALLATION & MAINTENANCE SERVICES
          </h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mx-6 lg:mx-20 my-8 lg:my-16">
          <div className="lg:w-[60%]">
            <p className="text-[16px] lg:text-[20px] mx-1 lg:mx-6 my-6 lg:my-0">
              We have an expert team of engineers, technicians and riggers which enables us to offer out the 
              following services in the telecommication sector;
            </p>
            <ul className="flex flex-col mx-1 lg:mx-12 gap-y-3 mt-4 text-[16px] lg:text-[18px]">
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/>
                Telecommunication tower installation and maintenance
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/>
                Installaton of light, Medium and heavy-duty self-supporting Angular, Tubular and Hybrid towers 
                for rooftop and ground base applications
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/>
                Installation of telecommunication towers from a height of 6m to 150m while maintaining a high 
                quality of installation and service delivery.
              </li>
              <li className="flex flex-row"><Icon icon="octicon:dash-16" width="24" height="24" color="#F89E3E"/>
                Installation of optic fiber networks and underground cables unsing horizontal directional 
                drilling (HDD) machines.
              </li>
            </ul>
          </div>
          <div>
            <Image src="/telecommunication.png" alt="electrical_intallation" width={500} height={500} className="border-[6px] lg:border-[14px] border-[#F89E3E]"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services_Section;