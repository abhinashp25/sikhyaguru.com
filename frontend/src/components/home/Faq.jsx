import React, { useState } from "react";
import Button from "../common/Button";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What programs does the college offer?",
      answer:
        "We offer a variety of undergraduate, postgraduate, and diploma programs across disciplines such as engineering, arts, science, and management.",
    },
    {
      question: "What is the admission process?",
      answer:
        "The admission process involves filling out the online application form, submitting the required documents, and attending an interview or entrance test based on the program.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, we offer merit-based and need-based scholarships. Please visit our scholarships page for more details.",
    },
    {
      question: "What facilities are available on campus?",
      answer:
        "Our campus includes modern classrooms, state-of-the-art labs, a library, sports facilities, hostels, and a student center.",
    },
    {
      question: "How can I contact the admissions office?",
      answer:
        "You can reach the admissions office via email at admissions@college.edu or call us at (123) 456-7890.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-10 py-10 bg-gradient-to-br  from-purple-200 via-blue-200 to-purple-200 ">
      <div className=" lg:max-w-4xl mx-auto my-10 py-10 px-6 md:px-10  border border-gray-300    lg:shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 py-5">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-900 ">
            <button
              className="w-full text-left py-4 flex justify-between items-center text-gray-800 hover:text-blue-800 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Assistance Section */}

      <div
        data-aos="fade-up"
        className="mt-12 text-center bg-gradient-to-br  from-purple-300 via-blue-200 to-purple-300 text-black  py-6 px-4 rounded-lg"
      >
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Need Assistance? Our admission counselors are here to guide you
          through every step.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200">
            Call Now
          </button> */}

          {/*

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition">
            Call Now
          </button>
          <button className="ml-4 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg transition flex items-center gap-2">
            Chat with Counselor
          </button> */}

          

          <a
            href="https://wa.me/+917735381142?text=Hii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title={"Call Now"} />
          </a>
          {/* <button className="px-8 py-3 m-2 text-lg font-semibold rounded border border-gray-500  hover:bg-black hover:text-gray-200 ">Call Now</button> */}
          

          <a
            href="https://wa.me/+917735381142?text=Hii I am Intersted to join College"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded border border-gray-500  hover:bg-black hover:text-gray-200 ">
            Chat with Counselor
          </button>
          </a>
          
          {/* <button className="bg-black text-white border border-white px-4 py-2 rounded hover:bg-gray-800">
            Chat with Counselor
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
