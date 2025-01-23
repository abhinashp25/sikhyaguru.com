import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function Testimonial() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'John Doe',
      text: 'This product has significantly improved my workflow.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'I highly recommend this to anyone looking for a solution.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'David Lee',
      text: 'The customer support is exceptional.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 1,
      name: 'John Doe',
      text: 'This product has significantly improved my workflow.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'I highly recommend this to anyone looking for a solution.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'David Lee',
      text: 'The customer support is exceptional.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 1,
      name: 'John Doe',
      text: 'This product has significantly improved my workflow.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'I highly recommend this to anyone looking for a solution.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'David Lee',
      text: 'The customer support is exceptional.',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const { scrollYProgress } = useViewportScroll();

  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 0 }}
              animate={{ y: testimonial.id % 2 === 0 ? y1 : y2 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-16 h-16 mx-auto mb-4"
              />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="text-center text-gray-500">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;