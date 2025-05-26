import React, { useEffect, useState } from "react";
import Svg from "./Svg";
import { MENU_LINKS } from "../../Utils/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handelResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Always show menu on large screens
      } else {
        setIsOpen(false); // Hide menu by default on small screens
      }
    };
    // set initial state based on screen size
    handelResize();
    // Listen to resize events
    window.addEventListener("resize", handelResize);
    // Cleanup listner on component unmount
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return (
    <>
      <nav className="container mx-auto px-4 sticky top-5 z-10">
        <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#B100FF] backdrop-blur-[10px] m-5 p-3 md:p-0">
          {/* logo */}
          <div className="h-7 ml-0 -mb-1">
            <Svg />
          </div>
          {/* hamburger icon */}
          <button
            className="block md:hidden text-[#333] mr-6 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Nvaigation links */}
          <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
            {MENU_LINKS.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    activeClass="active"
                    to={item.to}
                    smooth
                    spy
                    offset={item.offset}
                    className="menu-item"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* hire me button */}
          <button className=" hidden md:block h-12 text-[15px] font-medium text-white bg-[linear-gradient(to_right,_#B100FF,_#7F6FEA)] rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ">
            Hire Me
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
