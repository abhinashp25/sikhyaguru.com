import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const CollegeCard = ({ college , isNameOnly = false}) => {
  // console.log("College Card", college);
  const navigate = useNavigate();
  const [collegeDetails, setCollegeDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchCollegeDetails = async (collegeId) => {
    try {
      setLoading(true);
      let collegeId = college._id;
      if (isNameOnly && !college._id) {
        const searchResponse = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URI}/api/v0/colleges?name=${encodeURIComponent(college.name)}`
        );
        if (searchResponse.data.data.length > 0) {
          collegeId = searchResponse.data.data[0]._id; 
        } else {
          throw new Error("College not found");
        }
      }

      const response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URI}/api/v0/colleges/${collegeId}`
      );
      navigate("/college", { state: { collegeData: response.data.data } });
    } catch (error) {
      console.error("Error fetching college details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 cursor-pointer rounded-md shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 md:p-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <img
              src={college.logo}
              alt={`${college.name} campus`}
              className="w-full h-36 md:w-full md:h-48 rounded-lg object-cover mb-4"
            />
            <div className="flex items-center justify-between md:justify-between mb-2 w-full">
              <div className="flex items-center text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 font-medium">{(college?.rating)?.toFixed(1)}/5.0
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium
                ${college?.status === 'Accepting' ? 'bg-green-100 text-green-800' : ''}
                ${college?.status === 'Closed' ? 'bg-red-100 text-red-800' : ''}
                ${college?.status === 'Closing Soon' ? 'bg-yellow-100 text-yellow-800' : ''}
              `}
              >
                {college?.status}
              </span>

            </div>
          </div>

          <div className="md:w-2/3">
            {/* {console.log("College Details", college)} */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
              {college.name}
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-slate-400" />
                <span>{college.city}, {college.state}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-slate-400" />
                <span>{college.studentCount} Students</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-slate-400" />
                <span>{college?.placementRate}  Placement Rate</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-slate-400" />
                <span>Est. {college.established}</span>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4 mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Courses Offered</h4>
              <div className="flex flex-wrap gap-2">
                {[...new Set(college?.courses?.map(course => course.type))].map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full border border-blue-200"
                  >
                    {type || "N/A"}
                  </span>
                ))}
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

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => fetchCollegeDetails(college._id)}
                disabled={loading}
                className="bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm md:text-base"
              >
                {loading ? "Loading..." : "View Details"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;