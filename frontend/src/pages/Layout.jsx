import React, { useState } from 'react'
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
      <div className="flex h-screen poppins-font">
        {/* Sidebar */}

        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
  
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
           <Outlet/>
          <Footer/>
        </div>
      </div>
    );
}

export default Layout
