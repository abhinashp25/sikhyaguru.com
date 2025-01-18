import React, { useState } from "react";

const InteractiveSections = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="max-w-7xl mx-auto my-10 p-6">
      {/* Section Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["About Us", "News Update", "Video", "Q&A"].map((section, index) => (
          <button
            key={index}
            onClick={() => handleSectionChange(section.toLowerCase().replace(" ", ""))}
            className={`py-2 px-6 rounded-lg font-medium transition-all duration-300 ${
              activeSection === section.toLowerCase().replace(" ", "")
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="relative overflow-hidden bg-white shadow-md rounded-lg p-6">
        {/* About Us */}
        {activeSection === "about" && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600">
              Welcome to our college, a place where education meets excellence. Our mission is to nurture talent,
              inspire creativity, and create a community of future leaders. With a strong focus on holistic development,
              we offer state-of-the-art facilities and a vibrant campus life.
            </p>
          </div>
        )}

        {/* News Update */}
        {activeSection === "newsupdate" && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">News Updates</h2>
            <ul className="text-gray-600 space-y-3">
              <li>🎓 Admission for 2025 batch starts from March 1st, 2025.</li>
              <li>🏆 Our robotics team won the National Championship.</li>
              <li>📢 Upcoming webinar on AI and Machine Learning on Jan 25th, 2025.</li>
            </ul>
          </div>
        )}

        {/* Video */}
        {activeSection === "video" && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our College Video</h2>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="College Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Q&A */}
        {activeSection === "qa" && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="font-medium cursor-pointer">What programs does the college offer?</summary>
                <p className="text-gray-600 mt-2">
                  We offer a variety of undergraduate, postgraduate, and diploma programs across disciplines.
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="font-medium cursor-pointer">Are scholarships available?</summary>
                <p className="text-gray-600 mt-2">
                  Yes, we offer merit-based and need-based scholarships. Visit our scholarships page for details.
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg">
                <summary className="font-medium cursor-pointer">How can I contact admissions?</summary>
                <p className="text-gray-600 mt-2">
                  Email us at admissions@college.edu or call (123) 456-7890.
                </p>
              </details>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveSections;
