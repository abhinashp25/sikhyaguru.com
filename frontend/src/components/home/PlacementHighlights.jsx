import { BarChart, Briefcase, CheckCircle } from "lucide-react";
import React from "react";

const PlacementHighlights = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className=" px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Placement Highlights</h2>
          <p className="mt-2 text-gray-600">
            Exceptional career opportunities and industry connections
          </p>
        </div>

        {/* Stats Section */}
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { label: "Highest Package Offered", value: "₹42 LPA", icon: <Briefcase size={40} className="text-purple-600" /> },
            { label: "Average Package", value: "₹12.5 LPA", icon: <BarChart size={40} className="text-blue-600" /> },
            { label: "Placement Rate", value: "95%", icon: <CheckCircle size={40} className="text-green-600" /> },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
            >
              {stat.icon}
              <p className="text-2xl font-bold mt-4">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Top Recruiters
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="h-20 bg-gray-200 rounded-lg flex items-center justify-center"
                >
                  {/* Add Recruiter Logos */}
                  <span className="text-gray-400">Logo {index + 1}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Year-wise Placement Statistics */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Year-wise Placement Statistics
          </h3>
          <div className="relative w-full h-64 bg-gray-100 rounded-lg p-6">
            <div className="flex justify-between items-end h-full">
              {[
                { year: "2019", value: 90 , color:"bg-purple-400" },
                { year: "2020", value: 120 ,color:"bg-purple-600" },
                { year: "2021", value: 80 ,  color:"bg-purple-700"},
                { year: "2022", value: 130 ,  color:"bg-purple-800" },
                { year: "2023", value: 190 ,  color:"bg-purple-900"},
              ].map((data, index) => (
                <div key={index} className={`flex flex-col w-[100%] ${data.color}  items-center`}>
                  <div
                    className={`bg-blue-500  rounded-t-lg`}
                    style={{ height: `${data.value}px` }}
                  ></div>
                  <p className="mt-2 text-sm text-gray-100">{data.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
            Download Placement Brochure 
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacementHighlights;
