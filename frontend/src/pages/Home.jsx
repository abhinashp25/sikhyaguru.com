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

const Home = () => {
  return (
    <div className='bg-slate-100'> 
      {/* <CourseSection/> */}
     

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
     
      <TestimonalSection/>
    
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
