"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Project = {
  title: string;
  description_1: string;
  description_2: string;
  scope: string[],
  type: string;
  images: { pic: string, title: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Installation of a 315kVA, 11/0.4kV Transformer GMT – indoor type complete with an 11kV Ring Main Unit (RMU)",
    description_1: `This project encompassed the detailed design, procurement, and installation of a 315kVA, 11/0.4kV Ground
     Mounted Transformer (GMT) indoor type at Dr. Javia's Medical Center, located at Stand Number 9564, Nationalist Road, 
     Lusaka, adjacent to the University Teaching Hospital. `,
    description_2: `The project was executed in accordance with industry best practices, incorporating rigorous quality 
      control measures to guarantee a high-quality, reliable, and safe electrical infrastructure solution, tailored to 
      support the medical center's operations and patient care services. `,
     scope: [
      "Substation design and installation of a 315kVA transformer, configured to meet the medical center's electrical load requirements, ensuring reliable and efficient power distribution.",
      "Supply and installation of a three-way Ring Main Unit (RMU), facilitating need transformer protection, flexible and secure electrical distribution, with provision for future expansion and maintenance.",
      "Installation of a 400A ZESCO-type Feeder-Pillar, enabling safe and efficient connection to the national grid, while ensuring compliance with relevant electrical standards and regulations.",
    ],
    type:"electrical",
    images: [
    { pic: "/dr_javias/completed_substation.jpg", title: "Complete and Energised 315KVA Substation" },
    { pic: "/dr_javias/civil_works.jpg", title: "Civil Works" },
    { pic: "/dr_javias/tx_inspection.jpg", title: "Transformer Inspections" },
    { pic: "/dr_javias/rmu_inspection.jpg", title: "Ring Main Unit Inspections" },
    { pic: "/dr_javias/rmu_inspection_2.jpg", title: "Ring Main Unit Inspections" },
    { pic: "/dr_javias/rmu_terminations.jpg", title: "Ring Main Unit Cable Terminations" },
    { pic: "/dr_javias/tx_terminations.jpg", title: "Transformer Cable Terminations" },
    { pic: "/dr_javias/feeder_pillar.jpg", title: "400A ZESCO type Feeder-Pillar" },
    { pic: "/dr_javias/rmu_room.jpg", title: "Ring Main Unit Room" },
    { pic: "/dr_javias/tx_room.jpg", title: "Transformer Room" },
    ],
  },
  {
    title: "Swapping of 200KVA and 500KVA Transformers at Damust Farms",
    description_1: `This project entailed the strategic relocation and replacement of two electrical transformers at Damust 
      Farms in Mkushi, involving a meticulous swap of a 200kVA and a 500kVA transformer. The scope of work comprised:`,
    description_2: `The transformer swap was executed in a systematic and controlled manner, ensuring minimal disruption to 
      farm operations and maintaining the integrity of the electrical distribution system. The project required precise 
      planning, coordination, and technical expertise to guarantee a safe, efficient, and successful relocation of the 
      transformers, ultimately enhancing the overall electrical infrastructure and power supply reliability at Damust Farms.`,
    scope: [
      "Decommissioning and dismantling of the existing 200kVA transformer structure from its initial location at the workshop, followed by its careful transportation and reinstallation at Pump Station 2",
      "Decommissioning and dismantling of the existing 500kVA transformer structure from its initial location at Pump Station 2, followed by its careful transportation and reinstallation at the workshop",
    ],
    type: "electrical",
    images: [
      { pic: "/damust_farms/completed_work.jpg", title: "Completed Works at the Pump Station 2" },
      { pic: "/damust_farms/site_inspection_1.jpg", title: "Site Inspections" },
      { pic: "/damust_farms/site_inspection_2.jpg", title: "Site Inspections" },
      { pic: "/damust_farms/cable_preparation.jpg", title: "Cable Preparation (Terminations)" },
      { pic: "/damust_farms/200kva_tx_before.jpg", title: "200KVA Transformer at the workshop before swapping" },
      { pic: "/damust_farms/500kva_tx_before.jpg", title: "500KVA Transformer at Pump Station 2 before swapping" },
      { pic: "/damust_farms/500kva_tx_offloading.jpg", title: "Offloading 500KVA Transformer at the workshop" },
      { pic: "/damust_farms/500kva_tx_terminations.jpg", title: "Terminations works on the 500KVA transformer works" },
      { pic: "/damust_farms/200kva_tx_loading.jpg", title: "Loading 200KVA Transformer to be installed at Pump Station 2" },
      { pic: "/damust_farms/final_inspection.jpg", title: "Inspecting final works at the workshop" },
    ]
  },
]

const Projects = () => {

  //Define state variables for the current image and the fade
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("fade-in");

  //Create a use-effect to change the image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade("fade-out");
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % PROJECTS[0].images.length);
        setFade("fade-in");
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div id="projects" className="flex flex-col items-center bg-black">
        <div className="flex flex-row items-center my-6 lg:my-10">
          <div className="flex flex-col items-end gap-y-3 mr-1">
            <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">OUR  
            <span className="text-white font-bold"> PROJECTS</span>
          </h1>
          <div className="flex flex-col gap-y-3 ml-1">
            <div className="w-[65px] h-[2px] bg-[#d29a5e]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        {PROJECTS.map((project, projectIndex) => (
          <section key={projectIndex} className="flex flex-col items-center w-full">
            <div className="flex flex-col lg:flex-row items-center w-full max-w-screen-xl">    
              <div className="flex flex-col text-[15px] justify-center lg:w-1/2 bg-white mx-4 lg:mx-0 lg:ml-16 shadow-lg rounded-md p-6"> 
                <h2 className="font-bold text-[18px] lg:text-[22px] m-3 text-center">{project.title}</h2>
                <p className="mb-2">{project.description_1}</p>
                <p className="mb-2">The scope of the project included:</p>
                <ul className="list-none space-y-1">
                  {project.scope.map((scopeItem, scopeIndex) => (
                    <li key={scopeIndex} className="flex items-start gap-2">
                      <Icon icon="icon-park-outline:dot" width="24" height="24" />
                      <span>{scopeItem}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">{project.description_2}</p>
              </div>
              <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] flex justify-center items-center mt-8 lg:mt-0">
                {project.images.map((pic, imageIndex) => (
                  <div key={imageIndex} className={`absolute transition-opacity duration-1000 ease-in-out w-full flex flex-col items-center
                    ${imageIndex === currentImage ? "opacity-100" : "opacity-0"}`}>
                    <Image src={pic.pic} alt={pic.title} width={600} height={600} 
                      className={`w-[90%] max-h-[400px] sm:max-h-[400px] lg:h-[500px] object-contain mb-2 ${fade}`} />
                    <p className="text-xs lg:text-sm font-semibold text-white text-center">{pic.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr className="w-[96%] mx-6 h-1 bg-[#F89E3E] border-0 rounded my-8 lg:my-0"></hr>
          </section>
        ))}
      </div>
  );
};

export default Projects;