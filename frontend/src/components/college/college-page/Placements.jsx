import React from "react";
import {
  BarChart,
  Briefcase,
  Building2,
  CheckCircle,
  DollarSign,
  Trophy,
  Users,
} from "lucide-react";
import HorizontalLogoSlider from "./HorizontanlPlacement";

const Placements = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="">
        {/* Section Header */}

        <h2 className="text-2xl font-bold mb-6"> Placement Highlights</h2>

        {/* Stats Section */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {[
            {
              label: "Average Package",
              value: "$75,000",
              icon: <DollarSign />,
            },
            {
              label: "Highest Package",
              value: "$150,000",
              icon: <Trophy />,
            },
            { label: "Placement Rate", value: "95%", icon: <Users /> },
            {
              label: "Companies Visited",
              value: "150+",
              icon: <Building2 />,
            },
          ].map((stat, index) => (
            <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-blue-600 flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            {
              label: "Highest Package Offered",
              value: "₹42 LPA",
              icon: <Briefcase size={40} className="text-purple-600" />,
            },
            {
              label: "Average Package",
              value: "₹12.5 LPA",
              icon: <BarChart size={40} className="text-blue-600" />,
            },
            {
              label: "Placement Rate",
              value: "95%",
              icon: <CheckCircle size={40} className="text-green-600" />,
            },
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
        </div> */}

        {/* Top Recruiters */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Top Recruiters</h2>
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="h-20 bg-gray-200 rounded-lg flex items-center justify-center"
                >
                 
                  <span className="text-gray-400">Logo {index + 1}</span>
                </div>
              ))}
          </div> */}
          <HorizontalLogoSlider />
        </div>

        {/* Year-wise Placement Statistics */}
        <div className="mt-12">
        

          <h2 className="text-2xl font-bold mb-6">  Year-wise Placement Statistics</h2>

          
          <div className="relative w-full h-64 bg-gray-100 rounded-lg ">
            <div className="flex justify-between items-end h-full">
              {[
                { year: "2019", value: 90, color: "bg-blue-400" },
                { year: "2020", value: 120, color: "bg-blue-600" },
                { year: "2021", value: 80, color: "bg-blue-700" },
                { year: "2022", value: 130, color: "bg-blue-800" },
                { year: "2023", value: 190, color: "bg-blue-900" },
              ].map((data, index) => (
                <div
                  key={index}
                  className={`flex flex-col w-[100%] ${data.color}  items-center`}
                >
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
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Download Placement Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Placements;
