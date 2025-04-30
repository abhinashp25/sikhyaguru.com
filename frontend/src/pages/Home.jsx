// Home.js
import React, { useEffect, useRef, useState } from "react";
import CompareColleges from "../components/home/CompareColleges";
import FAQAccordion from "../components/home/Faq";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import NewsTicker from "../components/home/NewsTicker";
import Ab from "../components/home/Ab";
import CollegeFinder from "../components/home/CollegeFinder";
import { MessageCircle, Mail } from "lucide-react";
import TestimonalFinal from "../components/home/Testimonal1";
import LoginPopup from "../components/common/LoginPopup";
import AdmissionGuide from "../components/home/AdmissionGuide";

const Home = () => {
  const compareCollegesRef = useRef(null);
  const counselingRef = useRef(null);
  const [allColleges, setAllColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchAllColleges = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URI}/api/v0/colleges`);
        const data = await response.json();

        if (data.success) {
          const transformed = data.data.map(apiCollege => ({
            _id: apiCollege._id,
            name: apiCollege.name || 'College Name',
            logo: apiCollege.logo || 'https://via.placeholder.com/150',
            coverImage: apiCollege.coverImage || 'https://via.placeholder.com/800x400',
            city: apiCollege.city || '',
            state: apiCollege.state || '',
            location: [apiCollege.city, apiCollege.state].filter(Boolean).join(', ') || 'Location not specified',
            established: apiCollege.established || 'N/A',
            area: apiCollege.area ? `${apiCollege.area} acres` : '0',
            courses: apiCollege.courses || [],
            collegeType: apiCollege.collegeType || 'General',
            rating: apiCollege.rating || 0,
            reviews: apiCollege.reviews || 0,
            placements: apiCollege.placements || 0,
            
          }));
          setAllColleges(transformed);
        }
      } catch (error) {
        console.error('Error fetching colleges:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllColleges();
  }, []);

  const scrollToCompareColleges = () => {
    compareCollegesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCounseling = () => {
    counselingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-100">
      <FloatingSocials />
      <HeroSection  colleges={allColleges}/>
      <NewsTicker />
      <CollegeFinder />
      <Ab 
      scrollToCompareColleges={scrollToCompareColleges}
      scrollToCounseling={scrollToCounseling}
      />
      <AboutSection />
      
      {/* <AdmissionGuide 
        scrollToCompareColleges={scrollToCompareColleges}
        scrollToCounseling={scrollToCounseling}
      /> */}
      
      <div ref={compareCollegesRef}>
        <CompareColleges />
      </div>
      
      <HowItWorks />
      <TestimonalFinal />
      
      <div ref={counselingRef}>
        <FAQAccordion />
      </div>
      
      <LoginPopup /> 
    </div>
  );
};

export default Home;

const FloatingSocials = () => {
  return (
    <div className="hidden fixed z-50 top-[45%] right-4 md:flex flex-col gap-3">
      <a
        href="https://wa.me/8249828396"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <MessageCircle size={30} />
      </a>
      <a
        href="mailto:your@email.com"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        <Mail size={30} />
      </a>
    </div>
  );
};