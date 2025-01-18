import React from 'react'
import CourseSection from '../components/home/CourseSection'
import AdmissionGuide from '../components/home/AdmissionGuide'
import CompareColleges from '../components/home/CompareColleges'
import TestimonialSection from '../components/home/Testimonals'
import ContactSection from '../components/home/ContactSection'
import FAQAccordion from '../components/home/Faq'
import InteractiveSections from '../components/home/InteractiveSection'
import AboutUs from '../components/home/AboutUs'
import AboutSection from '../components/home/AboutSection'
import NewsSection from '../components/home/NewsSection'
import PlacementHighlights from '../components/home/PlacementHighlights'
import HeroSection from '../components/home/HeroSection'
import ContactUS from '../components/home/ContactUS'

const Home = () => {
  return (
    <div> 
      {/* <CourseSection/> */}
     
      <HeroSection/>
      <AdmissionGuide/>
     
      <CompareColleges/>
      <AboutSection/>
      {/* <ContactSection/> */}
      {/* <NewsSection/> */}
      {/* <PlacementHighlights/> */}
      <ContactUS/>
      {/* <AboutUs/> */}

      {/* <TestimonialSection/> */}
      <FAQAccordion/>
      {/* <InteractiveSections/> */}
    </div>
  )
}

export default Home
