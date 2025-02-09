import React from 'react'
import CourseSection from '../components/home/CourseSection'
import AdmissionGuide from '../components/home/AdmissionGuide'
import CompareColleges from '../components/home/CompareColleges'
import ContactSection from '../components/home/ContactSection'
import FAQAccordion from '../components/home/Faq'
import InteractiveSections from '../components/home/InteractiveSection'
import AboutUs from '../components/home/AboutUs'
import AboutSection from '../components/home/AboutSection'
import NewsSection from '../components/home/NewsSection'
import PlacementHighlights from '../components/home/PlacementHighlights'
import HeroSection from '../components/home/HeroSection'
import ContactUS from '../components/home/ContactUS'
import HowItWorks from '../components/home/HowItWorks'

import TestimonalSection from '../components/home/TestimonalSection'
import NewsTicker from '../components/home/NewsTicker'
import Tabs from '../components/home/Tabs'
import TestimonialSlider from '../components/home/TestimonalSlider'
import Ab from '../components/home/Ab'
import CollegeFinder from '../components/home/CollegeFinder'



// const WhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/yourphonenumber"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed top-[50%] z-50 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//     >
//       <MessageCircle size={30} />
//     </a>
//   );
// };

import { MessageCircle, Instagram, Mail } from "lucide-react";
import TestimonalFinal from '../components/home/Testimonal1'

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






const Home = () => {
  return (
    <div className='bg-slate-100'> 
      {/* <CourseSection/> */}
     
     <FloatingSocials/>

      <HeroSection/>
      <NewsTicker/>
      <CollegeFinder/>
       
        
      {/* <AdmissionGuide/> */}
      {/* <Tabs/> */}
      <Ab/>
      {/* <AdmissionGuide/> */}
      <AboutSection/>
      <CompareColleges/>
      <HowItWorks/>
      {/* <TestimonialSlider/> */}
     
      {/* <TestimonalSection/> */}
      <TestimonalFinal/>

    
      {/* <ContactSection/> */}
      {/* <NewsSection/> */}
      {/* <PlacementHighlights/> */}
      {/* <ContactUS/> */}
      {/* <AboutUs/> */}

      {/* <TestimonialSection/> */}
      <FAQAccordion/>
      {/* <InteractiveSections/> */}
    </div>
  )
}

export default Home
