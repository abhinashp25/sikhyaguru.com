import React from "react";

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

  return (
    <section className="bg-gradient-to-br from-black  via-blue-950 to-purple-700 text-white py-10 overflow-hidden  ">
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
              className={`flex   items-center gap-4 shadow-md bg-gradient-to-br from-black  via-blue-950 to-purple-900 p-6 rounded-lg ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              {/* Step Number */}
              <div className="flex-shrink-0 relative -top-7 ">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-black  via-blue-950 to-purple-700 text-white font-bold rounded-full">
                  {step.id}
                </div>
              </div>
              {/* Step Details */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-md ">{step.description}</p>
                <button className="bg-gradient-to-br from-black  via-blue-950 to-purple-700 float-right text-sm text-gray-200 px-4 py-2 rounded hover:bg-purple-700">
                  {step.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Assistance Section */}
        <div data-aos="fade-up" className="mt-12 text-center bg-gradient-to-br from-black  via-blue-950 to-purple-700 py-6 px-4 rounded-lg">
          <p className="text-lg font-semibold text-gray-200 mb-4">
            Need Assistance? Our admission counselors are here to guide you
            through every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200">
              Call Now
            </button>
            <button className="bg-black text-white border border-white px-4 py-2 rounded hover:bg-gray-800">
              Chat with Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionGuide;
