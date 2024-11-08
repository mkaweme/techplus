"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Contruction of dam and storage tank",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.`,
    type: "construction",
    images: [
    { pic: "/about.jpeg" },
    { pic: "/construction.png" },
    { pic: "/construction_2.png" },
    ],
  },
  {
    title: "100 meter bridge contruction in Luanshya",
    description: `Suspendisse lacinia erat a fringilla ornare. Sed lobortis ipsum eu metus 
      blandit, sed tincidunt metus congue. Morbi quis turpis eget justo efficitur laoreet. Cras 
      eget purus lorem. Donec cursus, tellus ut feugiat volutpat, est dui hendrerit est, nec 
      porttitor dui velit non lacus. Maecenas vel enim mi. In eget eros finibus, viverra eros et, 
      efficitur augue. Phasellus tempor facilisis diam eu gravida. Donec convallis est a aliquet 
      maximus.`,
    type: "construction",
    images: [
      { pic: "/experience.jpg" },
      { pic: "/project_1.jpg" },
      { pic: "/project_2.jpg" },
    ]
  },
  {
    title: "Installation of 45KW solar grid in Mumbwa",
    description: `Donec sed dui tincidunt, ullamcorper lacus at, fermentum libero. Mauris 
      laoreet sagittis urna et lobortis. Quisque ut augue consectetur, malesuada quam eget, 
      facilisis tortor. Phasellus dapibus magna non tincidunt laoreet. Curabitur volutpat in dui
      ac ornare. Fusce eu ultrices magna. Vivamus quis felis turpis. Integer faucibus 
      sollicitudin sollicitudin. In commodo tempor turpis ac dignissim. Phasellus sollicitudin 
      orci vel ligula pulvinar, nec vehicula nunc ornare. Vivamus ac lobortis sem, quis ultrices
      est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
      curae; Pellentesque ornare urna eros, sed pretium lorem sollicitudin quis.`,
    type: "electrical",
    images: [
      { pic: "/electrical.png" },
      { pic: "/telecommunication.png" },
      { pic: "/telecommunication_2.png" },
    ]
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center bg-black h-screen">
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
        <section className="relative flex flex-col lg:flex-row w-full">
          <div className="flex flex-col lg:w-[40%] bg-white ml-6 px-1 shadow-lg"> 
            <h2 className="font-bold text-[14px] lg:text-[20px] lg:my-3 text-center">{PROJECTS[0].title}</h2>
            <p className="my-3">{PROJECTS[0].description}</p>
          </div>
          <div className="bg-pink-500">
            {PROJECTS[0].images.map((pic, index) => (
              <div key={index} className={`absolute transition-opacity w-full duration-1000 ease-in-out 
                ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
                <Image src={pic.pic} alt={PROJECTS[0].title} width={300} height={300} 
                  className={` object-contain ${fade}`} />
              </div>
            ))}
          </div>
          
        

        </section>
      </div>
    </>
  );
};

export default Projects;