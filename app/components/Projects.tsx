"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Marking out items in preparation for metal working",
    pic: "/about.jpeg",
  },
  {
    title: "Aligning metal rods",
    pic: "/experience.jpg",
  },
  {
    title: "Welding base plates during fabrication of metal supports",
    pic: "/project_1.jpg",
  },
  {
    title: "Oxyacetylene welding of joints during platform repair",
    pic: "/project_2.jpg",
  },
]

const Projects = () => {

  //Create state variables for the current image and the fade
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("fade-in");

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
    <>
      <div className="relative flex flex-col items-center bg-black h-screen" id="projects">
        <div className="flex flex-row items-center my-10">
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
        <div className="relative flex flex-col lg:flex-row w-[300px] lg:w-[600px]">
          {PROJECTS.map((project, index) => (
            <div key={index} className={`absolute transition-opacity w-full duration-1000 ease-in-out 
              ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
              <Image src={project.pic} alt={project.title} width={500} height={500} 
                className={`w-full h-[500px] object-contain ${fade}`} />
              <p className="text-white font-bold text-[14px] lg:text-[20px] lg:my-3 text-center">{project.title}</p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Projects;