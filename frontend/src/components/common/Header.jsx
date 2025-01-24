import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { useLocation } from "react-router-dom";


const Header = ({ setIsSidebarOpen }) => {
  const {pathname} = useLocation();


  console.log("pathName",pathname);


  return (
    <div className={` ${pathname == "/" && "absolute z-20"} flex w-full items-center  justify-between  px-6 md:px-10 py-3  lg:h-20`}>
      {/* Hamburger icon for mobile */}

      <h2 className="  text-3xl font-extrabold text-gray-800 text-center ">
          <span className="text-blue-300 ">Sikshya<span className="text-gray-100">Guru</span></span>
      </h2>
      <button
        className="md:hidden  "
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <CiMenuFries size={25} className={`${pathname ==="/" && "text-white"} font-bold `} />
      </button>

      <button className="hidden md:block bg-gradient-to-br from-blue-800 rounded-md via-blue-950 to-blue-700 py-2 px-6  hover:text-purple-200 text-white">
        Login
      </button>
    </div>
  );
};

export default Header;
