"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

type navlink = {
  title: string;
  link: string;
}

const NAVLINKS: navlink[] = [
  { title: "HOME", link: "/" },
  { title: "SERVICES", link: "/services/" },
  { title: "ABOUT", link: "/about/" },
  { title: "CONTACT US", link: "/contact/" },
];
const Navbar = () => {

  //Create state variables
  const [mNavOpen, setMNavOpen] = useState<boolean>(false);
  const pathName: string = usePathname();

  return (
      <nav className="flex flex-col w-full z-20">
        <div className="flex flex-row w-full justify-between items-center lg:items-end bg-[#350F2B] z-10">
          <Link href="/" className="ml-8 lg:ml-20">
            <Image src="/logo.png" alt="logo" width={496} height={496} className="hidden lg:block lg:w-20 lg:h-auto"/>
            <Image src="/logo_mini.png" alt="logo" width={378} height={320} onClick={() => setMNavOpen(false)} className="block lg:hidden mr-10 w-20 h-auto"/>
          </Link>
          {
            mNavOpen ? (
              <Icon icon="line-md:menu-to-close-transition" width="30" height="30" color="#D9D2D6" onClick={() => setMNavOpen(false)} className="lg:hidden cursor-pointer mr-5"/>
            ) : (
              <Icon icon="line-md:close-to-menu-transition" width="30" height="30" color="#D9D2D6" onClick={() => setMNavOpen(true)} className="lg:hidden cursor-pointer mr-5"/>
            )
          }
          <div className="hidden lg:flex gap-x-16 mr-20 h-full">
            {NAVLINKS.map((link, index) => {
              return (
                <Link key={index} href={link.link} className={ (pathName === link.link) ? "text-[#F89E3E] font-bold text-[14px] border-b-[3px] border-[#F89E3E] pb-3 px-1": "font-semibold text-[14px] text-[#D9D2D6] hover:text-[#F89E3E] pb-3 px-1"}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
        { mNavOpen && (
          <div onClick={() => setMNavOpen(false)} className="bg-[#ffffffee]">
            <MobileNavbar pathName={pathName}/>
          </div>
        )}
      </nav>
  );
}

export default Navbar;

type MobileNavbarProps = {
  pathName: string
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ pathName }) => {
  return (
    <div className="flex flex-col gap-y-4 mt-4 mx-4">
      {NAVLINKS.map((link, index) => {
        const isActive: boolean = pathName === link.link;
        return (
          <Link key={index} href={link.link} className={ isActive ? "font-semibold text-[#F89E3E] border-b-2" :"hover:text-[#F89E3E] font-semibold text-[14px] border-b-2"}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};