import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-black h-screen">
        <div className="flex flex-row items-center">
          <div className="flex flex-col justify-center lg:justify-end pt-3 lg:pt-0 items-end mr-1 w-[50px] h-[40px]">
            <hr className="w-full color-white h-2"/>
            <hr className="w-[60%] color-white h-2"/>
          </div>
          <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px] my-6">ABOUT  
            <span className="text-white font-bold"> TECHPLUS</span>
          </h1>
          <div className="flex flex-col justify-center lg:justify-end pt-3 lg:pt-0 ml-1 w-[50px] h-[40px] ">
            <hr className="w-full color-white h-2"/>
            <hr className="w-[60%] color-white h-2"/>
          </div>
        </div>
        <div className="flex flex-row relative">
          <div className="absolute top-36 -left-16 border-[20px] border-[#57575744] w-48 lg:w-[480PX] h-96 z-0"></div>
          <Image src="/about.jpeg" alt="about" width={800} height={800} className="w-[400px] lg:w-[800px] z-10" />
          <div className="absolute bg-white lg:w-[40%] p-4 mx-6 lg:mx-0 h-72 lg:h-96 top-52 lg:top-32 lg:-right-48 z-10">
            <h1 className="text-[27px] font-bold">Commitment to excellence</h1>
            <p className="text-[14px] font-medium my-5">We are a team with integrity, professionalism and abide
              by the ethical codes of project management.
            </p>
            <p className="text-[14px]">
              Customer satisfaction is our utmost priority coupled with efficient use
              of materials to meet our business goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;