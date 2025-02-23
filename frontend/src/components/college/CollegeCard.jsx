import {
  School,
  MapPin,
  Star,
  TrendingUp,
  DollarSign,
  Filter,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  Globe,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const CollegeCard = ({ college }) => {
  const navigate= useNavigate();
  return (
    <div
     
      className="bg-white border border-gray-200 cursor-pointer rounded-md shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-4 md:p-6">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* College Image and Basic Info */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <img
              src={college.logo}
              alt={`${college.name} campus`}
              className="w-full h-36 md:w-full md:h-48 rounded-lg object-cover mb-4"
            />
            <div className="flex items-center justify-between md:justify-between mb-2 w-full">
              <div className="flex items-center text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 font-medium">{college.rating}/5.0</span>
              </div>
              <span
                className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${
                    college.status === "Accepting"
                      ? "bg-green-100 text-green-800"
                      : college.status === "Closing Soon"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }
                `}
              >
                {college.status}
              </span>
            </div>
          </div>

          {/* College Details */}
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
              {college.name}
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-slate-400" />
                <span>{college.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-slate-400" />
                <span>{college.studentCount} Students</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-slate-400" />
                <span>{college.placementRate} Placement Rate</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-slate-400" />
                <span>{college.ranking}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Placement Statistics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                  <div>
                    <span className="block text-xs">Highest Package</span>
                    <span className="font-semibold text-gray-900">
                      {college.highestPlacement}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                  <div>
                    <span className="block text-xs">Median Package</span>
                    <span className="font-semibold text-gray-900">
                      {college.medianPlacement}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex  justify-end">
              <button
                onClick={() => navigate("/college")}
                className="bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm md:text-base"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
