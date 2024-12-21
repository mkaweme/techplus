"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  type: string;
  images: { pic: string, title: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Installation of 315KVA mini-substation",
    description: `This project involved the design and implementation of 315KVA mini-substation
     at Dr Javia's Medical Center situated opposite University Teaching Hospital at stand 
     number 9564, Nationalist Road in Lusaka. The project included installing a 315KVA 
     transformer, Ring Main Unit (RMU) and 400A ZESCO type Feeder-Pillar.`,
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
    description: `This project involved the swapping of 2 transformers, a 200KVA and a 500KVA 
    transformer at Damust Farms in Mkushi. The 200KVA transformer which was initially located at the workshop was uninstalled 
    and moved to the pump station 2. The 500KVA transformer which was initially located at the pump station 2 was uninstalled 
    and moved to the workshop.`,
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

  //Create state variables for the current image and the fade
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
    <>
      <div id="projects" className="flex flex-col items-center bg-black pb-10">
        <div className="flex flex-row items-center my-6 lg:my-10">
          <div className="flex flex-col items-end gap-y-3 mr-1">
            <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">OUR  
            <span className="text-white font-bold"> PROJECTS</span>
          </h1>
          <div className="flex flex-col gap-y-3 ml-1">
            <div className="w-[65px] h-[2px] bg-[#F89E3E]"></div>
            <div className="w-[40px] h-[2px] bg-[#F89E3E]"></div>
          </div>
        </div>
        {PROJECTS.map((project, index) => (
          <section key={index} className="relative flex flex-col items-center">
            <div className="flex flex-col lg:flex-row items-center h-[105vh] lg:h-[90vh]">
              <div className="flex flex-col justify-center lg:w-[50%] bg-white mx-4 lg:mx-0 lg:ml-16 shadow-lg rounded-md"> 
                <h2 className="font-bold text-[18px] lg:text-[24px] m-3 text-center">{project.title}</h2>
                <p className="m-6">{project.description}</p>
              </div>
              <div className="flex flex-col lg:justify-center align-middle items-center lg:w-[50%]">
                {project.images.map((pic, index) => (
                  <div key={index} className={`absolute transition-opacity duration-1000 ease-in-out 
                    ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
                    <Image src={pic.pic} alt={pic.title} width={600} height={600} 
                      className={`w-[300px] lg:w-[500px] h-[400px] lg:h-[500px] object-contain my-3 lg:my-10 ${fade}`} />
                    <p className="text-[14px] text-white text-center">{pic.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr className="w-[90%] h-1 bg-[#F89E3E] border-0 rounded my-4 lg:my-0"></hr>
          </section>
        ))}
      </div>
    </>
  );
};

export default Projects;