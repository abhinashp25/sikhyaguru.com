import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

const routes = [
  { name: "Home", path: "/" },
  { name: "College", path: "/college" },
  { name: "Colleges", path: "/colleges" },
];

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed thin-scrollbar z-40 inset-y-0 overflow-y-auto h-[300vh] left-0 bg-gray-100 text-black w-64 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static lg:w-0`}
      >
        <div>
          <button
            className="lg:hidden absolute top-4 right-2 text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoMdCloseCircle />
          </button>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mt-3 text-left px-4 mb-5">
          <span className="text-blue-400">Sikshya<span className="text-gray-950">Guru</span></span>
        </h2>
        
        <ul className="space-y-4 p-4">
          {routes.map((route) => (
            <li 
             onClick={() => {setIsSidebarOpen(false)}}
             key={route.path}>
              <NavLink
                to={route.path}
                
                className={({ isActive }) =>
                  `p-2 rounded block ${isActive ? " text-black" : "hover:bg-gray-700"
                  }`
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
