import { Award, Briefcase, CheckCircle2, Users } from "lucide-react";
import React from "react";

const Overview = ({ collegeData }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">About {collegeData.collegeInfo.name}</h2>
        <div className="prose max-w-none text-gray-600 space-y-4">
          <p>{collegeData.collegeInfo.about}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col justify-center items-center">
          <Award className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
          <ul className="space-y-2 text-gray-600">
            {collegeData.academicExcellence?.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>{item.accreditation} Accredited</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl flex flex-col justify-center items-center p-6">
          <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Industry Connect</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{collegeData.placements.companiesVisited}+ Companies Visited</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{collegeData.placements.topRecruiters.length}+ Top Recruiters</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl flex flex-col justify-center items-center p-6">
          <div className="w-full flex justify-center">
            <Users className="w-8 h-8 text-blue-600 mb-4 text-center" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Student Life</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{collegeData.collegeInfo.students}+ Students</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{collegeData.hostels.length} Hostels</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;