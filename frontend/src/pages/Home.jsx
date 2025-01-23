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
import HowItWorks from '../components/home/HowItWorks'

const Home = () => {
  return (
    <div className='bg-gradient-to-br  from-blue-100 via-purple-200 to-purple-200 text-gray-900'> 
      {/* <CourseSection/> */}
     
      <HeroSection/>
      <AdmissionGuide/>
     
      <CompareColleges/>
      <AboutSection/>
      <HowItWorks/>
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
