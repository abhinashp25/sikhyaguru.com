import React from "react";
import Button from "../common/Button";

const AdmissionGuide = () => {
  const steps = [
    {
      id: 1,
      title: "Entrance Exam Preparation",
      animation : "fade-right",
      description:
        "Prepare for competitive exams like JEE, NEET, CAT, etc., with our comprehensive study materials and mock tests.",
      buttonText: "View  Calendar",
    },
    {
      id: 2,
      title: "College Selection",
      animation : "fade-left",
      description:
        "Compare colleges based on rankings, placements, fees, and infrastructure to make an informed decision.",
      buttonText: "Compare Colleges",
    },
    {
      id: 3,
      title: "Application Process",
      animation : "fade-right",
      description:
        "Complete online applications, submit required documents, and track your application status.",
      buttonText: "Start Application",
    },
    {
      id: 4,
      title: "Counseling & Admission",
      animation : "fade-left",
      description:
        "Attend counseling sessions, secure your seat, and complete the admission formalities.",
      buttonText: "Book Counseling",
    },
  ];


  //bg-gradient-to-br  from-blue-100 via-purple-200 to-blue-100
  return (
    <section className=" py-10  overflow-hidden  ">
      <div className=" px-6 md:px-10">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Admission Guide
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Your step-by-step guide to securing admission in top colleges
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              data-aos={step.animation}
              key={step.id}
              className={`flex   items-center gap-4 shadow-md bg-slate-100 p-6 rounded-lg ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              {/* Step Number */}
              <div className="flex-shrink-0 relative -top-8 ">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-blue-700  via-blue-900 to-blue-700 text-white font-bold rounded-full">
                  {step.id}
                </div>
              </div>
              {/* Step Details */}
              <div>
                <h3 className="text-lg md:text-xl text-gray-800  font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-md ">{step.description}</p>
                <button className="bg-gradient-to-br from-blue-700  via-blue-900 to-blue-700 float-right text-sm text-gray-200 px-4 py-2 rounded hover:bg-purple-700">
                  {step.buttonText}
                </button>
                
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
};

export default AdmissionGuide;
