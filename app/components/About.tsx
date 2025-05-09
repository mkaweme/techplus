import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-black h-[85vh] sm:h-[80vh] md:h-[95vh] lg:h-[110vh] pb-10">
      <div className="flex flex-row items-center my-10">
        <div className="flex flex-col justify-center lg:justify-end pt-3 lg:pt-0 items-end mr-1 w-[50px] h-[40px]">
          <hr className="w-full color-white h-2"/>
          <hr className="w-[60%] color-white h-2"/>
        </div>
        <h1 className="text-[#F89E3E] text-[24px] lg:text-[44px]">ABOUT
          <span className="text-white font-bold"> TECHPLUS</span>
        </h1>
        <div className="flex flex-col justify-center lg:justify-end pt-3 lg:pt-0 ml-1 w-[50px] h-[40px] ">
          <hr className="w-full color-white h-2"/>
          <hr className="w-[60%] color-white h-2"/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row relative">
        <div className="absolute top-36 -left-16 border-[20px] border-[#57575744] w-48 lg:w-[480PX] h-96 z-0"></div>
        <Image src="/about.jpeg" alt="about" width={1600} height={994} className="w-[350px] md:w-[650px] lg:w-[800px] h-auto z-10" />
        <div className="flex flex-col justify-center md:justify-start md:items-center md:self-center absolute bg-white md:w-96 lg:w-[40%] p-4 mx-6 lg:mx-0 h-90 md:h-[550px] lg:h-96 top-48 md:top-96 lg:top-40 lg:-right-48 z-10">
          <h1 className="text-[27px] font-bold">Commitment to excellence</h1>
          <p className="text-[13px] md:text-[18px] lg:text-[13px] text-justify font-medium my-5">Our team is guided by a steadfast commitment to integrity, 
            professionalism, and adherence to the ethical standards outlined in the Project Management Institute&apos;s
            (PMI) Code of Ethics. We prioritize customer satisfaction as our paramount objective, leveraging lean 
            principles and resource optimization techniques to ensure the efficient utilization of materials and resources. 
            By aligning our project delivery with strategic business objectives, we strive to drive operational excellence, 
            enhance stakeholder value, and foster long-term partnerships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;