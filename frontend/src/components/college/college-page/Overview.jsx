import { Award, Briefcase, CheckCircle2, Users } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">About EduExcel University</h2>
        <div className="prose max-w-none text-gray-600 space-y-4">
          <p>
            EduExcel University stands as a beacon of academic excellence and
            innovation since its establishment in 1995. Our institution has
            consistently ranked among the top universities globally, known for
            pioneering research, exceptional teaching methodologies, and
            producing industry-ready graduates.
          </p>
          <p>
            With a sprawling 200-acre campus in the heart of New York, we
            provide state-of-the-art facilities and a vibrant learning
            environment that fosters creativity, innovation, and academic
            growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col justify-center items-center">
          <Award className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>NAAC A+ Accreditation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>ISO 9001:2015 Certified</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>UGC Recognized</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl flex flex-col justify-center items-center p-6">
          <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Industry Connect</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>500+ Industry Partners</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Regular Industry Workshops</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Live Projects</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl flex flex-col justify-center items-center  p-6">
          <div className="w-full flex justify-center">
          <Users className="w-8 h-8 text-blue-600 mb-4 text-center" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Global Network</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>50+ Partner Universities</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>International Exchange Programs</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Global Research Projects</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Rankings & Recognition</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { rank: "#1", category: "Engineering" },
            { rank: "#3", category: "Business School" },
            { rank: "#5", category: "Research Impact" },
            { rank: "Top 10", category: "Innovation" },
          ].map((item, index) => (
            <div key={index} className="border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {item.rank}
              </div>
              <div className="text-gray-600">{item.category}</div>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <h3 className="text-xl font-bold mb-4">Campus Life</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
            alt="Campus Life"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
            alt="Campus Life"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80"
            alt="Campus Life"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Overview;
