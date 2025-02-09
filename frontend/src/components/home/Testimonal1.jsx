// import React, { useState, useEffect } from 'react';
// import { Building2, GraduationCap, DollarSign, Quote } from 'lucide-react';



// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Chen",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
//     role: "Software Engineer",
//     company: "Google",
//     package: "185,000",
//     quote: "The rigorous computer science program prepared me perfectly for my role at Google. The practical projects and internship opportunities were invaluable.",
//     college: "Stanford University",
//     batch: "2023"
//   },
//   {
//     id: 2,
//     name: "James Wilson",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
//     role: "Product Manager",
//     company: "Microsoft",
//     package: "165,000",
//     quote: "The entrepreneurship courses and leadership programs gave me the perfect foundation for product management.",
//     college: "MIT",
//     batch: "2023"
//   },
//   {
//     id: 3,
//     name: "Priya Patel",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
//     role: "Data Scientist",
//     company: "Amazon",
//     package: "175,000",
//     quote: "The advanced analytics curriculum and real-world projects helped me land my dream role in data science.",
//     college: "UC Berkeley",
//     batch: "2023"
//   }
// ];

// function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//         setIsAnimating(false);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const current = testimonials[currentIndex];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
//       <div className="max-w-4xl w-full">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-900">
//           Success Stories from Our Alumni
//         </h2>
        
//         <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
//           {/* Decorative elements */}
//           <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full -mr-20 -mt-20 opacity-50" />
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full -ml-16 -mb-16 opacity-50" />
          
//           <div className={`relative z-10 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               <div className="relative">
//                 <img
//                   src={current.image}
//                   alt={current.name}
//                   className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-lg"
//                 />
//                 <Quote className="absolute -bottom-2 -right-2 text-indigo-600 w-8 h-8 bg-white rounded-full p-1 shadow-lg" />
//               </div>
              
//               <div className="flex-1 text-center md:text-left">
//                 <p className="text-gray-700 italic text-lg mb-6">"{current.quote}"</p>
                
//                 <div className="space-y-3">
//                   <h3 className="text-xl font-semibold text-indigo-900">{current.name}</h3>
                  
//                   <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600">
//                     <div className="flex items-center justify-center md:justify-start gap-2">
//                       <Building2 className="w-4 h-4 text-indigo-600" />
//                       <span>{current.role} at {current.company}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-center md:justify-start gap-2">
//                       <GraduationCap className="w-4 h-4 text-indigo-600" />
//                       <span>{current.college}, {current.batch}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-center md:justify-start gap-2">
//                       <DollarSign className="w-4 h-4 text-indigo-600" />
//                       <span>${current.package}/year</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Navigation dots */}
//           <div className="flex justify-center gap-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'bg-indigo-600 w-6'
//                     : 'bg-gray-300 hover:bg-indigo-400'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, useCallback, TouchEvent } from 'react';
import { Building2, GraduationCap, DollarSign, Quote, ChevronLeft, ChevronRight } from 'lucide-react';


const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    role: "Software Engineer",
    company: "Google",
    package: "185,000",
    quote: "The rigorous computer science program prepared me perfectly for my role at Google opportunities were invaluable.",
    college: "Stanford University",
    batch: "2023"
  },
  {
    id: 2,
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    role: "Product Manager",
    company: "Microsoft",
    package: "165,000",
    quote: "The entrepreneurship courses and leadership programs gave me the perfect foundation for product management.",
    college: "MIT",
    batch: "2023"
  },
  {
    id: 3,
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    role: "Data Scientist",
    company: "Amazon",
    package: "175,000",
    quote: "The advanced analytics curriculum and real-world projects helped me land my dream role in data science.",
    college: "UC Berkeley",
    batch: "2023"
  }
];

function TestimonalFinal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const navigate = useCallback((direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === 'next') {
          return (prev + 1) % testimonials.length;
        } else {
          return prev === 0 ? testimonials.length - 1 : prev - 1;
        }
      });
      setIsAnimating(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      navigate('next');
    }, 5000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        navigate('next');
      } else {
        navigate('prev');
      }
    }
    setTouchStart(null);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-900">
          Success Stories from Our Alumni
        </h2>
        
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full -mr-20 -mt-20 opacity-50" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full -ml-16 -mb-16 opacity-50" />
          
          {/* Navigation Arrows */}
          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-600" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-indigo-600" />
          </button>
          
          <div 
            className={`relative z-10 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-lg"
                />
                <Quote className="absolute -bottom-2 -right-2 text-indigo-600 w-8 h-8 bg-white rounded-full p-1 shadow-lg" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-700 italic text-lg mb-6">"{current.quote}"</p>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-indigo-900">{current.name}</h3>
                  
                  <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Building2 className="w-4 h-4 text-indigo-600" />
                      <span>{current.role} at {current.company}</span>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <GraduationCap className="w-4 h-4 text-indigo-600" />
                      <span>{current.college}, {current.batch}</span>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <DollarSign className="w-4 h-4 text-indigo-600" />
                      <span>${current.package}/year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-indigo-600 w-6'
                    : 'bg-gray-300 hover:bg-indigo-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonalFinal;