import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      designation: "Software Engineer",
      image: "https://via.placeholder.com/80",
      feedback:
        "The platform helped me choose the best college for my career. Highly recommend it!",
    },
    {
      name: "Jane Smith",
      designation: "Student",
      image: "https://via.placeholder.com/80",
      feedback:
        "Amazing experience! The comparison tool is so easy to use and provides great insights.",
    },
    {
      name: "David Wilson",
      designation: "Parent",
      image: "https://via.placeholder.com/80",
      feedback:
        "It was a lifesaver for us while choosing the right college for our child. Loved the details provided!",
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What People Say
        </h2>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {/* Image */}
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s picture`}
                className="w-20 h-20 rounded-full mb-4"
              />
              {/* Name */}
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              {/* Designation */}
              <p className="text-sm text-orange-500 mb-4">
                {testimonial.designation}
              </p>
              {/* Feedback */}
              <p className="text-gray-300">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
