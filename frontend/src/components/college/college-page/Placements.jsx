import React from "react";
import {
  DollarSign,
  Trophy,
  Users,
  Building2
} from "lucide-react";
import HorizontalLogoSlider from "./HorizontanlPlacement";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Placements = ({ collegeData }) => {
  const placementStats = collegeData.placements;
  
  const placementData = placementStats.lastFourYears?.map(yearData => ({
    year: yearData.year,
    placements: yearData.placements
  })) || [];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Placement Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {[
            {
              label: "Average Package",
              value: placementStats.mid + " " + "LPA" || "N/A",
              icon: <DollarSign />,
              symbol: "$",
              position: "prefix"
            },
            {
              label: "Highest Package",
              value: placementStats.highest + " " + "LPA" || "N/A",
              icon: <Trophy />,
              symbol: "$",
              position: "prefix"
            },
            {
              label: "Placement Rate",
              value: placementStats.rate || "N/A",
              icon: <Users />,
              symbol: "%",
              position: "suffix"
            },
            {
              label: "Companies Visited",
              value: placementStats.companiesVisited || "N/A",
              icon: <Building2 />,
              symbol: "+",
              position: "suffix"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-blue-600 flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value !== "N/A"
                  ? stat.position === "prefix"
                    ? `${stat.symbol}${stat.value}`
                    : `${stat.value}${stat.symbol}`
                  : stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Top Recruiters</h2>
          <HorizontalLogoSlider companyNames={collegeData.placements.topRecruiters} />
        </div>

        {placementData.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Year-wise Placement Statistics</h2>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={placementData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`${value} %`, 'Placements']}
                    labelFormatter={(label) => `Year: ${label}`}
                  />
                  <Bar
                    dataKey="placements"
                    name="Placements"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

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