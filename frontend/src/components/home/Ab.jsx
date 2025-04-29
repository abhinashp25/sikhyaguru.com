import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";
import AdmissionGuideBgImg from "../../assests/AdmissionGuideBgImg.webp";
import { Modal } from "antd";
import { useState } from "react";

export default function AdmissionGuide({ scrollToCompareColleges, scrollToCounseling }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const steps = [
    {
      number: 1,
      title: "Entrance Exam Preparation",
      description:
        "Prepare for competitive exams like JEE, NEET, CAT, etc. with our comprehensive study materials and mock tests.",
      buttonText: "View Exam Calendar",
      action: showModal, 
    },
    {
      number: 2,
      title: "College Selection",
      description:
        "Compare colleges based on rankings, placements, fees, and infrastructure to make an informed decision.",
      buttonText: "Compare Colleges",
      action: scrollToCompareColleges,
    },
    {
      number: 3,
      title: "Application Process",
      description: "Complete online applications, submit required documents, and track your application status.",
      buttonText: "Start Application",
    },
    {
      number: 4,
      title: "Counselling & Admission",
      description: "Attend counseling sessions, secure your seat, and complete the admission formalities.",
      buttonText: "Book Counseling",
      action: scrollToCounseling,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div  
      style={{ backgroundImage: `url(${AdmissionGuideBgImg}) ` }}
      className="min-h-screen bg-no-repeat bg-cover bg-black text-white p-6 md:p-12">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Admission Guide</h1>
          <p className="text-gray-400">Your step-by-step guide to securing admission in top colleges</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-600" />
          {steps.map((step, index) => (
            <div key={step.number} data-aos="fade-up">
              <motion.div
                variants={itemVariants}
                className={`relative mb-12 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8 bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 rounded-full flex items-center justify-center z-10"
                >
                  <span className="font-bold">{step.number}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-zinc-900 p-6 rounded-lg ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                >
                  <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                  <p className="text-gray-400 mb-4 text-sm">{step.description}</p>
                  <button 
                    onClick={step.action || (() => {})}
                    className="bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 float-right text-sm text-gray-200 px-4 py-2 rounded hover:bg-purple-700"
                  >
                    {step.buttonText}
                  </button>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
      <Modal 
        title="Academic Calendar" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <button key="back" onClick={handleCancel} className="bg-blue-600 text-white px-4 py-2 rounded">
            Close
          </button>,
          <a
            key="link"
            href="https://www.bput.ac.in/academic-calendar.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded ml-2"
          >
            Visit Website
          </a>
        ]}
      >
        <p>You're being redirected to the official academic calendar page of BPUT.</p>
        <p className="mt-2">URL: <a href="https://www.bput.ac.in/academic-calendar.html" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://www.bput.ac.in/academic-calendar.html</a></p>
      </Modal>
    </div>
  );
}