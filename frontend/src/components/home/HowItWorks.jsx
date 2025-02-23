import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import workItWorksImg from "../../assests/HowItWorkS.jpg";

const HowItWorks = () => {
  const { ref: stepsRef, inView: stepsInView } = useInView({
    triggerOnce: false, // Allow animations to trigger every time the component is in view
    threshold: 0.3, // Trigger when 10% of the component is in view
  });

  const steps = [
    "Tell us about your College / Course & Location preferences.",
    "An Expert Counsellor will be assigned to you.",
    "Discuss your options with your counsellor.",
    "Apply online through our COMMON APPLICATION FORM platform.",
    "Your counselor will ensure seat allocation for you.",
    "Deposit your fee. If you need, avail Education Loan at 0% Interest Rate.",
    "Yippie! your dream college is right there waiting for you to join!",
  ];

  // bg-gradient-to-br  from-blue-100 via-purple-200 to-purple-200
  return (
    <div className="py-16 px-6 sm:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        How it Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div ref={stepsRef} className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-4 top-12 bottom-0 w-1 bg-gray-300"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="flex items-start gap-4 relative"
            >
              {/* Step Number */}
              <div className="flex-none w-8 h-8 bg-teal-500 rounded-full flex justify-center items-center z-10">
                <span className="text-white font-bold">{index + 1}</span>
              </div>

              {/* Connecting line to the next step */}
              {/* {index < steps.length - 1 && (
              <div className="absolute left-8 top-full h-12 w-1 bg-gray-300"></div>
            )} */}

              {/* Step Description */}
              <p className="text-lg text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className=" w-full h-full">
          {" "}
          <img
            src={workItWorksImg}
            alt="How It Works"
            className="w-fit h-full object-contain"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-fit justify-center items-center gap-4 mt-12">
          <a
            href="https://wa.me/+917735381142?text=Hii I am Interested to join College"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.01 }}
              className="w-full bg-gradient-to-br from-blue-700 via-blue-900 to-blue-700 hover:bg-pink-600 text-white px-6 py-3 rounded shadow-lg transition"
            >
              Talk to our Experts
            </motion.button>
          </a>
          <motion.button
            whileHover={{ scale: 1.01 }}
            className=" text-center justify-center border border-gray-500 text-black hover:text-white hover:bg-gray-700 px-6 py-3 rounded shadow-lg transition flex items-center gap-2"
          >
            <span>▶</span> Watch Video
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
