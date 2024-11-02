"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

type Navlink = {
  title: string;
  link: string;
}

const NAVLINKS: Navlink[] = [
  { title: "HOME", link: "/" },
  { title: "SERVICES", link: "/services" },
  { title: "ABOUT", link: "/about" },
  { title: "CONTACT US", link: "/contact" },
];
const Navbar = () => {

  const [mNavOpen, setMNavOpen] = useState<boolean>(false);
  const pathName = usePathname();

  return (
    <>
      <nav className="flex flex-col w-full top-0">
        <div className="hidden lg:flex flex-row bg-[#EE4036] w-full roboto">
          <div className="flex flex-row w-[50%] ml-20 justify-around">
            <div className="flex flex-row items-center">
              <div className="flex flex-row p-1 m-2 bg-[#F89E3E]">
                <Icon icon="uiw:mail" width="16" height="16" color="#FFFFFF"/>
              </div>
              <p className="text-white font-[500] text-[13px]">contact@techplus.com</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row p-1 m-2 bg-[#F89E3E]">
                <Icon icon="mage:phone-fill" width="16" height="16" color="#FFFFFF"/>
              </div>
              <p className="text-white font-[500] text-[13px]">+260974963639</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row p-1 m-2 bg-[#F89E3E]">
                <Icon icon="mdi:clock-outline" width="16" height="16" color="#FFFFFF" />
              </div>
              <p className="text-white font-[500] text-[13px]">Mon-Fri 08:00 - 17:00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between items-center sticky top-0 lg:items-end bg-[#00000011] border-b-2 border-[#00000033] z-10">
          <Link href="/" className="ml-6">
            <Image src="/logo.png" alt="logo" width={80} height={80} className="hidden lg:block"/>
            <Image src="/logo_mini.png" alt="logo" width={80} height={80} onClick={() => setMNavOpen(false)} className="block lg:hidden mr-10"/>
          </Link>
          {
            mNavOpen ? (
              <Icon icon="line-md:menu-to-close-transition" width="30" height="30" onClick={() => setMNavOpen(false)} className="lg:hidden cursor-pointer mr-5"/>
            ) : (
              <Icon icon="line-md:close-to-menu-transition" width="30" height="30" onClick={() => setMNavOpen(true)} className="lg:hidden cursor-pointer mr-5"/>
            )
          }
          <div className="hidden lg:flex gap-x-20 mr-48 mb-3">
            {NAVLINKS.map((link, index) => {
              const isActive = pathName.endsWith(link.link);
              return (
                <Link key={index} href={link.link} className={isActive ? "text-[#F89E3E] font-bold text-[14px]": "font-semibold text-[14px] text-[#575757] hover:text-[#F89E3E]"}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
        { mNavOpen && (
          <div onClick={() => setMNavOpen(false)}>
            <MobileNavbar/>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="flex flex-col gap-y-4 mt-4 mx-4">
      {NAVLINKS.map((link, index) => {
        return (
          <Link key={index} href={link.link} className={"hover:text-[#F89E3E] font-semibold text-[14px] border-b-2"}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};