import React from "react";
import Image from "next/image";

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
            <p className="text-[16px] lg:text-[18px] mx-1 lg:mx-6 my-6 lg:my-0">TechPlus Engineering delivers comprehensive construction solutions, encompassing 
              design, execution and commissioning of complex infrastructure projects. Our multidisciplinary team of expert civil engineers, skilled technicians 
              and specialized bricklayers possesses the technical expertise to design and construct a wide range of assets, including:
            </p>
            <ul className="flex flex-col mx-1 lg:mx-12 gap-y-3 my-4 text-[14px] lg:text-[16px]">
              <li className="flex flex-row">
                - Pavement systems for highways, airports, and industrial facilities.
              </li>
              <li className="flex flex-row">
                - Residential, commercial, and industrial infrastructure, such as buildings, warehouses and factories
              </li>
              <li className="flex flex-row">
                - Drainage systems, including stormwater management and wastewater treatment facilities.
              </li>
              <li className="flex flex-row">
                - Road networks, comprising highways, urban roads and rural infrastructure.
              </li>
              <li className="flex flex-row">
                - Substation civil structures, supporting power transmission and distribution systems.
              </li>
              <li className="flex flex-row">
                - Renovation and restoration of existing buildings, monuments and landmarks, leveraging heritage preservation techniques.
              </li>
              <li className="flex flex-row">
                - Painting and finishing services, ensuring durable and aesthetically pleasing coatings for various infrastructure assets.
              </li>
            </ul>
            <p>
              By integrating cutting-edge technology, innovative design principles and rigorous quality control measures TechPlus ensures the delivery of high-performance, sustainable and resilient infrastructure solutions that meet the 
              evolving needs of our clients and stakeholders.
            </p>
          </div>
          <div className="flex justify-center">
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
            <p className="text-[16px] lg:text-[20px] mx-1 lg:mx-6 my-6 lg:my-0">
              Techplus possesses the technical expertise and capabilities to undertake a diverse range of electrical projects, spanning residential, commercial, 
              and industrial sectors, with voltage ranges of Distribution and Transmission. Our comprehensive service portfolio includes:
            </p>
            <ul className="flex flex-col mx-1 lg:mx-12 gap-y-3 my-4 text-[14px] lg:text-[16px]">
              <li className="flex flex-row">
                - Design and installation of electrical wiring systems for households, commercial, and industrial 
                infrastructure, ensuring compliance with relevant electrical codes and standards
              </li>
              <li className="flex flex-row">
                - Design, commissioning and testing of overhead power distribution and transmission lines by 
                utilizing cutting-edge technologies and materials.
              </li>
              <li className="flex flex-row">
                - Design, installation, and commissioning of solar photovoltaic (PV) systems, optimized for maximum
                energy yield and efficiency.
              </li>
              <li className="flex flex-row">
                - Design, installation and commissioning of backup battery power systems, incorporating advanced 
                inverter technologies and energy storage solutions.
              </li>
              <li className="flex flex-row">
                - Design, testing and commissioning of electrical distribution and transmission substations 
                ensuring reliable and efficient power dissipation with allowable future expansion. 
              </li>
              <li className="flex flex-row">
                - Maintenance, repair and overhaul services for power and distribution transformers and associated 
                switchgear to ensure optimal performance and extended lifespan.
              </li>
              <li className="flex flex-row">
                - Supply, installation and commissioning of generator sets (Gensets), tailored to meet specific client requirements and applications.
              </li>
            </ul>
            <p className="text-[16px] lg:text-[18px] mx-1 lg:mx-6 my-6 lg:my-0">
              By leveraging our expertise in electrical engineering, project management, and technology, Techplus
              delivers high-quality, reliable and efficient electrical solutions that meet the complex needs of 
              our clients across various industries.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/electrical.jpeg" alt="electrical_intallation" width={500} height={500} className="border-[6px] lg:border-[14px] border-[#F89E3E]"/>
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
            <p className="text-[16px] lg:text-[18px] mx-1 lg:mx-6 my-6 lg:my-0">
              Our multidisciplinary team of expert engineers, technicians, and riggers enable us to deliver a 
              comprehensive range of telecommunications services, including:
            </p>
            <ul className="flex flex-col mx-1 lg:mx-12 gap-y-3 my-4 text-[14px] lg:text-[16px] list-disc">
              <li className="flex flex-row">
                - Design, installation and maintenance of telecommunication towers, utilizing cutting-edge 
                technologies and materials to ensure optimal structural integrity and reliability.
              </li>
              <li className="flex flex-row">
                - Installation of self-supporting towers, including angular, tubular and hybrid configurations, 
                tailored to meet specific rooftop and ground-based application requirements, with load-bearing 
                capacities ranging from light to heavy-duty.
              </li>
              <li className="flex flex-row">
                - Erection of telecommunication towers spanning heights of 6m to 150m, with a focus on precision 
                engineering, quality control, and adherence to international safety standards, ensuring seamless 
                integration with existing infrastructure.
              </li>
              <li className="flex flex-row">
                - Deployment of optic fiber networks and underground cables, leveraging advanced horizontal 
                directional drilling (HDD) machines and trenchless technology to minimize environmental disruption
                and ensure high-speed data transmission
              </li>
              <li className="flex flex-row">
                - Our team&apos;s expertise in telecommunications engineering, combined with our state-of-the-art 
                equipment and rigorous quality assurance processes, enables us to deliver high-performance, 
                reliable, and scalable telecommunications infrastructure solutions that meet the evolving needs 
                of our clients.
              </li>
            </ul>
            <p className="text-[16px] lg:text-[18px] mx-1 lg:mx-6 my-6 lg:my-0">
              By integrating technical expertise, innovative solutions, and a customer-centric approach, we provide 
              end-to-end telecommunications services that support the growth and development of modern 
              communication networks.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/telecommunication.png" alt="electrical_intallation" width={500} height={500} className="border-[6px] lg:border-[14px] border-[#F89E3E]"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services_Section;