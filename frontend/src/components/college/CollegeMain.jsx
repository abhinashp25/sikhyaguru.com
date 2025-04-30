import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  GraduationCap,
  Building2,
  Users,
  Home,
  DollarSign,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  Library,
  Wifi,
  Coffee,
  Dumbbell,
  Bus,
  Trophy,
  Award,
  Briefcase,
  Clock,
  Calendar,
  BookOpen,
  Building,
  Users2,
} from "lucide-react";
import Overview from "./college-page/Overview";
import FeesAndCourses from "./college-page/FeesAndCourses";
import Placements from "./college-page/Placements";
import Facilities from "./college-page/Facilities";
import Hostels from "./college-page/Hostels";
import Reviews from "./college-page/Reviews";
import Gallery from "./college-page/Gallery";

function CollegeMain() {
  const location = useLocation();
  const [collegeData, setCollegeData] = useState(location.state?.collegeData || null);
  const [loading, setLoading] = useState(!location.state?.collegeData);
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "fees", label: "Fees & Courses" },
    { id: "placements", label: "Placements" },
    { id: "facilities", label: "Facilities" },
    { id: "hostels", label: "Hostels" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
  ];

  useEffect(() => {

    if (!location.state?.collegeData) {
      const fetchCollegeData = async () => {
        const collegeId = new URLSearchParams(window.location.search).get('id');
        try {
          setLoading(true);
          const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/v0/colleges/${collegeData?._id}`);
          setCollegeData(response.data.data);
        } catch (error) {
          console.error("Error fetching college data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCollegeData();
    }
  }, [location.state]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading college data...</div>;
  }

  if (!collegeData) {
    return <div className="flex justify-center items-center h-screen">College data not available</div>;
  }

  return (
    <div className="bg-gray-50">
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-black/80"></div>
        {console.log("collegeData", collegeData)}
        <img
          src={collegeData?.collegeInfo?.logo || "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"}
          alt="College Campus"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className=" bg-white rounded-lg w-20 h-20  flex items-center justify-center">
                  <img
                    src={collegeData.collegeInfo.coverImage}

                    alt="College Logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {collegeData.collegeInfo.name}
                  </h1>
                  <div className="flex items-center gap-4 text-white/90 text-xs md:text-lg">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {collegeData.collegeInfo.city}, {collegeData.collegeInfo.state}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> Est. {collegeData.collegeInfo.established}
                    </span>
                    {collegeData.academicExcellence?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {collegeData.academicExcellence.map((item, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-500/20 text-green-100 rounded-full text-sm font-semibold"
                          >
                            {item.accreditation}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Users2 className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">{collegeData.collegeInfo.students}+</div>
                  <div className="text-sm opacity-80">Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Building className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">{collegeData.collegeInfo.area} Acres</div>
                  <div className="text-sm opacity-80">Campus Area</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Trophy className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">{collegeData.placements.rate}%</div>
                  <div className="text-sm opacity-80">Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 mt-8">
        <div className="bg-white rounded-xl shadow-lg mb-6 overflow-x-auto">
          <div className="flex min-w-max border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-medium transition-colors ${activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-2 mb-8">
          {console.log("collegeData", collegeData)}
          {activeTab === "overview" && <Overview collegeData={collegeData} />}
          {activeTab === "fees" && <FeesAndCourses collegeData={collegeData} />}
          {activeTab === "placements" && <Placements collegeData={collegeData} />}
          {activeTab === "facilities" && <Facilities collegeData={collegeData} />}
          {activeTab === "hostels" && <Hostels collegeData={collegeData} />}
          {activeTab === "gallery" && <Gallery collegeData={collegeData} />}
          {activeTab === "reviews" && <Reviews collegeData={collegeData} />}
        </div>
      </div>
    </div>
  );
}

export default CollegeMain;