// TestimonialSlider.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "I got placed at TCS as a Software Engineer. The training provided by my college helped me a lot.",
    name: "John Deo",
    title: "Software Engineer",
    company: "TCS",
    image: "https://via.placeholder.com/150", // Replace with actual images
  },
  {
    id: 2,
    text: "Thanks to the college's support, I secured a position at Wipro as a UI/UX Designer.",
    name: "Jane Smith",
    title: "UI/UX Designer",
    company: "Wipro",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    text: "I am thrilled to join Amazon as a Frontend Developer. It was a dream come true.",
    name: "Alex Johnson",
    title: "Frontend Developer",
    company: "Amazon",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    text: "With the training provided, I got an amazing role at Infosys.",
    name: "Emily Davis",
    title: "Backend Developer",
    company: "Infosys",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    text: "Happy to announce my placement in Google as a Full Stack Developer!",
    name: "Chris Brown",
    title: "Full Stack Developer",
    company: "Google",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 relative">
      <h2 className="text-center text-2xl font-bold mb-8">Our Success Stories</h2>
      <motion.div
        className="relative bg-white shadow-lg rounded-lg p-6 text-center"
        key={testimonials[current].id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset }) => {
          if (offset.x > 100) prevSlide();
          if (offset.x < -100) nextSlide();
        }}
      >
        <p className="text-gray-600 italic">"{testimonials[current].text}"</p>
        <div className="mt-4">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="mx-auto w-16 h-16 rounded-full"
          />
          <h4 className="font-bold mt-2">{testimonials[current].name}</h4>
          <p className="text-sm text-gray-500">
            {testimonials[current].title} at {testimonials[current].company}
          </p>
        </div>
      </motion.div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default TestimonialSlider;
