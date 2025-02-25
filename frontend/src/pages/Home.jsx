import React from "react";
import CompareColleges from "../components/home/CompareColleges";
import FAQAccordion from "../components/home/Faq";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import NewsTicker from "../components/home/NewsTicker";
import Ab from "../components/home/Ab";
import CollegeFinder from "../components/home/CollegeFinder";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import TestimonalFinal from "../components/home/Testimonal1";
import LoginPopup from "../components/common/LoginPopup";
import EnrollFormModal from "../components/common/EnrollFormModal";



const Home = () => {
  return (
    <div className="bg-slate-100">
      <FloatingSocials />
      <HeroSection />
      <NewsTicker />
      <CollegeFinder />
      <Ab />
      <AboutSection />
      <CompareColleges />
      <HowItWorks />
      <TestimonalFinal />
      <FAQAccordion />
      {/* <EnrollFormModal/> */}
      <LoginPopup/> 
    </div>
  );
};

export default Home;


const FloatingSocials = () => {
  return (
    <div className="hidden  fixed z-50 top-[45%] right-4 md:flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <MessageCircle size={30} />
      </a>

      {/* Instagram */}
      {/* <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
      >
        <Instagram size={30} />
      </a> */}

      {/* Mail */}
      <a
        href="mailto:your@email.com"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        <Mail size={30} />
      </a>
    </div>
  );
};