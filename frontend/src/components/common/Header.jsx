import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

import { CiMenuFries } from "react-icons/ci";


const Header = ({ setIsSidebarOpen }) => {
  return (
    <div className=" flex w-full items-center justify-between  px-6 md:px-10 py-3  lg:h-20">
      {/* Hamburger icon for mobile */}

      <h2 className="  text-3xl font-extrabold text-gray-800 text-center ">
          <span className="text-blue-600 ">Sikshya<span className="text-gray-800">Guru</span></span>
      </h2>
      <button
        className="md:hidden"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <CiMenuFries size={25} className="font-bold" />
      </button>

      <button className="hidden md:block bg-gradient-to-br from-blue-800 rounded-md via-blue-950 to-blue-700 py-2 px-4  hover:bg-purple-700 text-white">
        Login
      </button>
    </div>
  );
};

export default Header;
