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

  //Create state variables
  const [mNavOpen, setMNavOpen] = useState<boolean>(false);
  const pathName = usePathname();

  return (
    <>
      <nav className="flex flex-col w-full z-20">
        <div className="flex flex-row w-full justify-between items-center lg:items-end bg-[#350F2B] z-10">
          <Link href="/" className="ml-6">
            <Image src="/logo.png" alt="logo" width={80} height={80} className="hidden lg:block"/>
            <Image src="/logo_mini.png" alt="logo" width={80} height={80} onClick={() => setMNavOpen(false)} className="block lg:hidden mr-10"/>
          </Link>
          {
            mNavOpen ? (
              <Icon icon="line-md:menu-to-close-transition" width="30" height="30" color="#D9D2D6" onClick={() => setMNavOpen(false)} className="lg:hidden cursor-pointer mr-5"/>
            ) : (
              <Icon icon="line-md:close-to-menu-transition" width="30" height="30" color="#D9D2D6" onClick={() => setMNavOpen(true)} className="lg:hidden cursor-pointer mr-5"/>
            )
          }
          <div className="hidden lg:flex gap-x-20 mr-48 h-full">
            {NAVLINKS.map((link, index) => {
              const isActive = pathName.endsWith(link.link);
              return (
                <Link key={index} href={link.link} className={isActive ? "text-[#F89E3E] font-bold text-[14px] border-b-[3px] border-[#F89E3E] pb-3 px-1": "font-semibold text-[14px] text-[#D9D2D6] hover:text-[#F89E3E] pb-3 px-1"}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
        { mNavOpen && (
          <div onClick={() => setMNavOpen(false)} className="bg-white">
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