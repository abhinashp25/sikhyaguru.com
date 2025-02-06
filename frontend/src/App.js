import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import CollegeList from './components/college/CollegeLis';
import College from './components/college/College';
import NotFound from './components/common/PageNotFound';
import ScrollToTop from './components/common/ScrollToTop';
import CollegeMain from './components/college/CollegeMain';




function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("I am running");
   // window.scrollTo(600, 0);
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      delay: 50,
    });

  }, [location.pathname]);
  return (
    <>
    <Routes>
     
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Home/>} />
        <Route path="colleges" element={<CollegeList/>} />
        <Route path="college1" element={<College/>} />
        <Route path="college" element={<CollegeMain/>} />
        
        <Route path="about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
       
      </Route>
    </Routes>
    </>
  );
}

export default App;
