import React, { useState } from "react";
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

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-8 h-8 text-blue-600 mb-3" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}

let count = 0;
function CollegeMain() {
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

  console.log("Lalit", count++);

  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <div className="relative  h-[600px]">
        <div className="absolute inset-0 bg-black/80"></div>
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
          alt="College Campus"
          className="w-full h-full   object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    EduExcel University
                  </h1>
                  <div className="flex items-center gap-4 text-white/90 text-xs md:text-lg">
                    <span className="flex items-center gap-1 ">
                      <MapPin className="w-4 h-4 " /> New York, USA
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> Est. 1995
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-100 rounded-full text-sm font-semibold">
                      NAAC A+
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Users2 className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">15,000+</div>
                  <div className="text-sm opacity-80">Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Building className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm opacity-80">Acres Campus</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Trophy className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">#1</div>
                  <div className="text-sm opacity-80">in Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-6 md:px-10 mt-8">
        {/* Stats Section */}
        {/* <div className="  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={GraduationCap} title="Students" value="10,000+" />
            <StatCard icon={Users} title="Faculty" value="500+" />
            <StatCard icon={Trophy} title="Rankings" value="#1 in Region" />
            <StatCard icon={Building2} title="Campus Area" value="100 Acres" />
          </div>
        </div> */}
        {/* Quick Stats */}
        {/* <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center text-yellow-400 mb-2">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5" />
              </div>
              <div className="text-sm text-gray-600">4.2/5 Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">150+</div>
              <div className="text-sm text-gray-600">Companies Visit</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Research Centers</div>
            </div>
          </div>
        </div> */}

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-6 overflow-x-auto">
          <div className="flex min-w-max border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl p-2 mb-8">
          {/* Overview Tab */}
          {activeTab === "overview" && <Overview />}

          {/* Fees & Courses Tab */}
          {activeTab === "fees" && <FeesAndCourses />}

          {/* Placements Tab */}
          {activeTab === "placements" && (
            <Placements />
            // <div className="space-y-8">
            //   <div>
            //     <h2 className="text-2xl font-bold mb-6">
            //       Placement Statistics
            //     </h2>
            //     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            //       {[
            //         {
            //           label: "Average Package",
            //           value: "$75,000",
            //           icon: <DollarSign />,
            //         },
            //         {
            //           label: "Highest Package",
            //           value: "$150,000",
            //           icon: <Trophy />,
            //         },
            //         { label: "Placement Rate", value: "95%", icon: <Users /> },
            //         {
            //           label: "Companies Visited",
            //           value: "150+",
            //           icon: <Building2 />,
            //         },
            //       ].map((stat, index) => (
            //         <div
            //           key={index}
            //           className="bg-blue-50 rounded-xl p-6 text-center"
            //         >
            //           <div className="text-blue-600 flex justify-center mb-3">
            //             {stat.icon}
            //           </div>
            //           <div className="text-3xl font-bold text-blue-600 mb-2">
            //             {stat.value}
            //           </div>
            //           <div className="text-gray-600">{stat.label}</div>
            //         </div>
            //       ))}
            //     </div>
            //   </div>

            //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            //     <div>
            //       <h3 className="text-xl font-semibold mb-4">
            //         Sector-wise Placements
            //       </h3>
            //       <img
            //         src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            //         alt="Placement Statistics"
            //         className="w-full h-64 object-cover rounded-xl mb-4"
            //       />
            //       <div className="grid grid-cols-2 gap-4">
            //         {[
            //           { sector: "Technology", percentage: "45%" },
            //           { sector: "Finance", percentage: "25%" },
            //           { sector: "Consulting", percentage: "15%" },
            //           { sector: "Others", percentage: "15%" },
            //         ].map((sector, index) => (
            //           <div key={index} className="bg-gray-50 rounded-lg p-4">
            //             <div className="text-lg font-semibold">
            //               {sector.percentage}
            //             </div>
            //             <div className="text-gray-600">{sector.sector}</div>
            //           </div>
            //         ))}
            //       </div>
            //     </div>

            //     <div>
            //       <h3 className="text-xl font-semibold mb-4">Top Recruiters</h3>
            //       <div className="grid grid-cols-2 gap-6">
            //         {[
            //           {
            //             name: "Tech Giants",
            //             companies: ["Google", "Microsoft", "Amazon", "Apple"],
            //           },
            //           {
            //             name: "Finance",
            //             companies: [
            //               "Goldman Sachs",
            //               "JP Morgan",
            //               "Morgan Stanley",
            //             ],
            //           },
            //           {
            //             name: "Consulting",
            //             companies: ["McKinsey", "BCG", "Bain & Company"],
            //           },
            //           {
            //             name: "Others",
            //             companies: ["Adobe", "Intel", "Qualcomm", "Samsung"],
            //           },
            //         ].map((group, index) => (
            //           <div key={index}>
            //             <h4 className="font-semibold mb-2">{group.name}</h4>
            //             <ul className="space-y-2">
            //               {group.companies.map((company, idx) => (
            //                 <li key={idx} className="flex items-center gap-2">
            //                   <Building2 className="w-4 h-4 text-blue-600" />
            //                   <span>{company}</span>
            //                 </li>
            //               ))}
            //             </ul>
            //           </div>
            //         ))}
            //       </div>
            //     </div>
            //   </div>

            //   <div>
            //     <h3 className="text-xl font-semibold mb-4">
            //       Placement Process
            //     </h3>
            //     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            //       {[
            //         {
            //           step: "1",
            //           title: "Pre-Placement",
            //           desc: "Resume building, Mock interviews, Aptitude training",
            //         },
            //         {
            //           step: "2",
            //           title: "Company Presentations",
            //           desc: "Company visits, Job role discussions, Q&A sessions",
            //         },
            //         {
            //           step: "3",
            //           title: "Selection Process",
            //           desc: "Written test, Technical rounds, HR interviews",
            //         },
            //         {
            //           step: "4",
            //           title: "Offer Roll-out",
            //           desc: "Job offer, Package negotiation, Documentation",
            //         },
            //       ].map((step, index) => (
            //         <div key={index} className="border rounded-lg p-4">
            //           <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
            //             {step.step}
            //           </div>
            //           <h4 className="font-semibold mb-2">{step.title}</h4>
            //           <p className="text-gray-600 text-sm">{step.desc}</p>
            //         </div>
            //       ))}
            //     </div>
            //   </div>
            // </div>
          )}

          {/* Facilities Tab */}
          {activeTab === "facilities" && <Facilities />}

          {/* Hostels Tab */}
          {activeTab === "hostels" && <Hostels />}

          {activeTab === "gallery" && <Gallery />}

          {/* Reviews Tab */}
          {activeTab === "reviews" && <Reviews />}
        </div>
      </div>
    </div>
  );
}

export default CollegeMain;
