import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "This product has completely transformed how we approach our marketing campaigns. The results have been nothing short of amazing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    content: "The attention to detail and user experience is outstanding. It's rare to find a solution that's both powerful and intuitive.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Product Manager",
    content: "We've seen a 40% increase in productivity since implementing this solution. The ROI has been incredible.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CEO",
    content: "This has been a game-changer for our business. The support team is exceptional and always goes above and beyond.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
  },
 

];

//bg-gradient-to-br from-purple-200 via-blue-200 to-purple-100 

function TestimonalSection() {
  return (
    <div className="  py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of satisfied students worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                translateY: index % 2 === 0 ? [0, -80, 50,] : [0, 80, 0]
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                y: { duration: 3, repeat: Infinity, repeatType: "reverse" }
              }}
              className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-indigo-200 transform -rotate-12" />
                <p className="text-gray-700 italic pl-6">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonalSection;