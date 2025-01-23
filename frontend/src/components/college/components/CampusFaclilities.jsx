import React from "react";
import {
    Building2,    // Hostel Facilities
    Book,         // Modern Library
    FlaskConical, // Research Labs
    Dumbbell,     // Sports Complex
    Utensils,     // Food Court
    Wifi,         // Smart Campus
  } from "lucide-react";
  
  const facilities = [
    {
      icon: <Building2 className="text-blue-600 w-8 h-8" />,
      title: "Hostel Facilities",
      features: [
        "Separate hostels for boys and girls",
        "24/7 security and surveillance",
        "Modern amenities and facilities",
        "In-house dining facility",
      ],
    },
    {
      icon: <Book className="text-purple-600 w-8 h-8" />,
      title: "Modern Library",
      features: [
        "Extensive collection of books",
        "Digital library access",
        "Reading rooms and study areas",
        "Online journal subscriptions",
      ],
    },
    {
      icon: <FlaskConical className="text-pink-600 w-8 h-8" />,
      title: "Research Labs",
      features: [
        "Well-equipped laboratories",
        "Advanced research facilities",
        "Industry-standard equipment",
        "Specialized research centers",
      ],
    },
    {
      icon: <Dumbbell className="text-green-600 w-8 h-8" />,
      title: "Sports Complex",
      features: [
        "Indoor sports facilities",
        "Olympic-size swimming pool",
        "Well-maintained grounds",
        "Professional coaching",
      ],
    },
    {
      icon: <Utensils className="text-orange-600 w-8 h-8" />,
      title: "Food Court",
      features: [
        "Multiple cuisine options",
        "Hygienic food preparation",
        "Comfortable seating area",
        "Affordable meal plans",
      ],
    },
    {
      icon: <Wifi className="text-teal-600 w-8 h-8" />,
      title: "Smart Campus",
      features: [
        "High-speed WiFi coverage",
        "Digital learning resources",
        "Smart classrooms",
        "IT infrastructure",
      ],
    },
  ];

const CampusFacilities = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Campus Facilities
        </h2>
        <p className="text-gray-600 mb-10">
          State-of-the-art infrastructure for holistic development
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start"
            >
              <div className="mb-4 text-center text-4xl">{facility.icon}</div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                {facility.title}
              </h3>
              <ul className="text-gray-600 text-left space-y-1">
                {facility.features.map((feature, idx) => (
                  <li className="" key={idx}>• {feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="text-blue-600 font-medium mt-4 inline-block"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
          Take Virtual Campus Tour
        </button>
      </div>
    </div>
  );
};

export default CampusFacilities;
