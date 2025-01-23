import React, { useState } from 'react'
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
      <div className="flex  w-full poppins-font bg-gradient-to-br  from-blue-100 via-purple-200 to-purple-200">
        {/* Sidebar */}

        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
  
        {/* Main content */}
        <div className="flex-1 w-full flex flex-col">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          <Outlet/>
          <Footer/>
        </div>
      </div>
    );
}

export default Layout
