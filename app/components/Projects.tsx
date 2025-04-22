"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  pic: string;
  w: number;
  h: number;
}

const PROJECTS: Project[] = [
  {
    title: "Installation of 315KVA mini-substation at Dr Javia's, Lusaka",
    pic: "/dr_javias/completed_substation.jpg",
    w: 624,
    h: 828,
  },
  {
    title: "Swapping of 200KVA and 500KVA Transformers at Damust Farms, Mkushi",
    pic: "/damust_farms/completed_work.jpg",
    w: 624,
    h: 790,
  },
]

const Projects = () => {

  //Create state variables for the current image and the fade
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [fade, setFade] = useState<string>("fade-in");

  //Create a use-effect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade("fade-out");
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % PROJECTS.length);
        setFade("fade-in");
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-black h-[70vh] lg:h-[110vh]" id="projects">
      <div className="flex flex-row items-center my-8">
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
      <div className="relative flex flex-col w-full sm:w-[300px] md:w-[400px] lg:w-[600px]">
        {PROJECTS.map((project, index) => (
          <div key={index} className={`absolute flex flex-col transition-opacity duration-1000 ease-in-out align-middle w-full
            ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
            <Image src={project.pic} alt={project.title} width={project.w} height={project.h} 
              className={`w-auto h-[430px] md:h-[650px] lg:h-[500px] ${fade} self-center`} />
            <p className="text-white font-bold text-[14px] lg:text-[20px] my-10 text-center">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;