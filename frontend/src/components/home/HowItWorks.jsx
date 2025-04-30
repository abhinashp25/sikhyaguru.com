import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import workItWorksImg from "../../assests/HowItWorkS.jpg";
import { Modal } from "antd";

const HowItWorks = () => {
  const { ref: stepsRef, inView: stepsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const steps = [
    "Tell us about your College / Course & Location preferences.",
    "An Expert Counsellor will be assigned to you.",
    "Discuss your options with your counsellor.",
    "Apply online through our COMMON APPLICATION FORM platform.",
    "Your counselor will ensure seat allocation for you.",
    "Deposit your fee. If you need, avail Education Loan at 0% Interest Rate.",
    "Yippie! your dream college is right there waiting for you to join!",
  ];

  return (
    <div className="py-16 px-6 sm:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        How it Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div ref={stepsRef} className="relative space-y-12">
          <div className="absolute left-4 top-12 bottom-0 w-1 bg-gray-300"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="flex items-start gap-4 relative"
            >
              <div className="flex-none w-8 h-8 bg-teal-500 rounded-full flex justify-center items-center z-10">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <p className="text-lg text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>

        <div data-aos="fade-up" className=" w-full hidden md:block h-full">
          <img
            src={workItWorksImg}
            alt="How It Works"
            className="w-fit h-full object-contain"
          />
        </div>
      </div>
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
            onClick={showModal}
            whileHover={{ scale: 1.01 }}
            className="text-center justify-center border border-gray-500 text-black hover:text-white hover:bg-gray-700 px-6 py-3 rounded shadow-lg transition flex items-center gap-2"
          >
            <span>▶</span> Watch Video
          </motion.button>
        </div>
      </div>

      <Modal
        title="How It Works Video"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        centered
      >
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/5bM8qetHJxA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default HowItWorks;