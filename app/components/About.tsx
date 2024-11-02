import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-black">
        <div className="flex flex-row items-center">
          <div className="flex flex-col justify-end items-end mr-1 w-[50px] h-[40px]">
            <hr className="w-full color-white h-2"/>
            <hr className="w-[60%] color-white h-[10px]"/>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px] my-6">ABOUT 
            <span className="text-white font-bold">TECHPLUS</span>
          </h1>
          <div className="flex flex-col justify-end ml-1 w-[50px] h-[40px] ">
            <hr className="w-full color-white h-2"/>
            <hr className="w-[60%] color-white h-[10px]"/>
          </div>
        </div>
        <div className="flex flex-row">
          <Image src="/about.jpeg" alt="about" width={800} height={800} className="w-[400px] lg:w-[800px]" />
          <p className="bg-white">At Techplus, customer satifcation is out utmost 
            priority. Our reputation is built on trust, professionism and 
            superior performance, driven by a team of highly skilled personnel.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;