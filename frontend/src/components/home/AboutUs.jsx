import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-blue-950 to-purple-700 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            fillOpacity="0.3"
            d="M0,160L40,186.7C80,213,160,267,240,288C320,309,400,299,480,261.3C560,224,640,160,720,144C800,128,880,160,960,176C1040,192,1120,192,1200,202.7C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-10 leading-relaxed">
          We are a college committed to shaping the future of our students
          through education, innovation, and a culture of inclusivity. Our
          mission is to empower individuals to achieve their dreams and make a
          difference in the world.
        </p>
      </div>

      {/* Core Values */}
      <div className="relative z-10 max-w-7xl mx-auto p-10">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Mission",
              description: "To empower every student to realize their potential.",
              icon: "🚀",
            },
            {
              title: "Vision",
              description: "To lead with innovation and inclusivity in education.",
              icon: "🌟",
            },
            {
              title: "Values",
              description:
                "We believe in integrity, collaboration, and lifelong learning.",
              icon: "💡",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              <div className="text-5xl text-blue-500 mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="relative z-10 bg-white py-10">
        <h3 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Meet Our Team
        </h3>
        <div className="flex overflow-x-auto gap-6 px-6">
          {[
            { name: "Lalita Kumar", role: "CEO", image: "https://via.placeholder.com/150" },
            { name: "Rashmi Singh", role: "Head of Academics", image: "https://via.placeholder.com/150" },
            { name: "Arjun Mehta", role: "Head of Innovation", image: "https://via.placeholder.com/150" },
            { name: "Priya Sharma", role: "Student Coordinator", image: "https://via.placeholder.com/150" },
          ].map((teamMember, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-gray-100 text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
            >
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold text-center">{teamMember.name}</h4>
              <p className="text-center text-sm">{teamMember.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
