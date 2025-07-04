import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// Props Type
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 x-[1000] bg-[#307532] opacity-70 w-full h-screen`}
      ></div>
      {/* NavLinks */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#307532] space-y-6 z-[10000]`}
      >
        {navLinks.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url}>
              <p
                onClick={closeNav}
                className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-[#000] sm:text-[30px]"
              >
                {navlink.label}
              </p>
            </Link>
          );
        })}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-black"
        />
      </div>
    </div>
  );
};

export default MobileNav;
