import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-around px-6 lg:px-0 py-10 bg-gradient-to-t from-[#EE4036] to-[#000000DE]" >
      <div className="flex flex-col lg:w-[25%] gap-y-4">
        <Link href="/">
          <Image src="/logo_mini.png" alt="logo" width={378} height={320} className="w-[100px] h-auto"/>
        </Link>
        <p className="text-white">We love to hear from you. You can reach out to us on our social media platforms</p>
        <div className="flex flex-row lg:mt-4 gap-x-4">
          <a href="https://web.facebook.com/p/Techplus-Engineering-Limited-100064281394107/?_rdc=1&_rdr#" aria-label="link to facebook page" className="flex w-[40px] h-[40px] justify-center items-center border-[1px] border-[#00000045]">
            <Icon icon="ri:facebook-fill" width="30" height="30" color="#F89E3E" />
          </a>
          <a href="https://www.x.com" aria-label="link to twitter" className="flex w-[40px] h-[40px] justify-center items-center border-[1px] border-[#00000045]">
            <Icon icon="pajamas:twitter" width="30" height="30" color="#F89E3E" />
          </a>
          <a href="https://www.linkedin.com/in/techplus-engineering-limited-078140235/?originalSubdomain=zm" aria-label="link to linkedin profile" className="flex w-[40px] h-[40px] justify-center items-center border-[1px] border-[#00000045]">
            <Icon icon="ri:linkedin-fill" width="30" height="30" color="#F89E3E" />
          </a>
          <a href="https://www.instagram.com" aria-label="link to instagram" className="flex w-[40px] h-[40px] justify-center items-center border-[1px] border-[#00000045]">
            <Icon icon="mdi:instagram" width="30" height="30" color="#F89E3E" />
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:w-[25%] text-white gap-y-3">
        <h3 className="text-[22px] font-bold my-6">CONTACT US</h3>
        <p>Plot 002, Off Mungwi Road, Chikondano Lusaka West, Lusaka</p>
        <p>info@techplus.co.zm</p>
        <p>(+260)-977-369442</p>
        <p>(+260)-976-055210</p>
        <p>(+260)-974-963639</p>
      </div>
      <div className="flex flex-col lg:w-[25%] text-white gap-y-3">
        <h3 className="text-[22px] font-bold my-6">LINKS</h3>
        <Link href="/services" className="border-dashed border-b-2 border-[#FFFFFF56] pb-3">Services</Link>
        <Link href="/services#projects" className="border-dashed border-b-2 border-[#FFFFFF56] pb-3">Projects</Link>
        <Link href="/about" className="border-dashed border-b-2 border-[#FFFFFF56] pb-3">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

    </footer>
  );
};

export default Footer;