import { motion } from "framer-motion";
import {
  Brain,
  Building2,
  Users,
  Stethoscope,
  FlaskRound,
  Hotel,
  MonitorSmartphone,
  BookOpen,
  Radio,
  Syringe,
  GraduationCap,
  Gavel,
  HeartPulse,
  Smile,
  Palette,
  School,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { icon: Brain, name: "Engineering", colleges: "6077 Colleges" },
  { icon: Building2, name: "Commerce & Banking", colleges: "4432 Colleges" },
  { icon: Users, name: "Management", colleges: "7027 Colleges" },
  { icon: Stethoscope, name: "Medical", colleges: "2421 Colleges" },
  { icon: FlaskRound, name: "Sciences", colleges: "5037 Colleges" },
  { icon: Hotel, name: "Hotel Management", colleges: "1309 Colleges" },
  {
    icon: MonitorSmartphone,
    name: "Information Technology",
    colleges: "5205 Colleges",
  },
  { icon: BookOpen, name: "Arts & Humanities", colleges: "5227 Colleges" },
  { icon: Radio, name: "Mass Communication", colleges: "2168 Colleges" },
  { icon: Syringe, name: "Nursing", colleges: "1195 Colleges" },
  { icon: GraduationCap, name: "Agriculture", colleges: "444 Colleges" },
  { icon: Palette, name: "Design", colleges: "955 Colleges" },
  { icon: HeartPulse, name: "Pharmacy", colleges: "1892 Colleges" },
  { icon: Gavel, name: "Law", colleges: "1015 Colleges" },
  { icon: HeartPulse, name: "Paramedical", colleges: "1507 Colleges" },
  { icon: Smile, name: "Dental", colleges: "350 Colleges" },
  { icon: Palette, name: "Performing Arts", colleges: "707 Colleges" },
  { icon: School, name: "Education", colleges: "4561 Colleges" },
];

export default function CollegeFinder() {
  const [activeTab, setActiveTab] = useState("colleges");
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shikyaguru Finder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore 25000+ Colleges, 200+ Exams & More
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Reset your research strategy by browsing through our lists of top
            colleges, exams, courses and careers based on your area of interest!
          </p>

          {/* Custom Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("colleges")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "colleges"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Colleges
              </button>
              <button
                onClick={() => setActiveTab("exams")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "exams"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Exams
              </button>
              {/* <button
                onClick={() => setActiveTab("abroad")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "abroad" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Study Abroad
              </button> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((category, index) => (
            // <motion.div
            // onClick={() => navigate("/colleges")}
            //   key={index}
            //   variants={itemVariants}
            //   whileHover={{ scale: 1.05 }}
            //   className="group relative bg-white rounded-lg p-4 text-center border hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            // >
            //   <div className="flex flex-col items-center gap-3">
            //     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
            //       <category.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
            //     </div>
            //     <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            //       {category.name}
            //     </h3>
            //     <p className="text-sm text-gray-500">{category.colleges}</p>
            //   </div>
            // </motion.div>

            // <motion.div
            //   onClick={() => navigate("/colleges")}
            //   key={index}
            //   variants={itemVariants}
            //   whileHover={{ scale: 1.05 }}
            //   className="group relative bg-white rounded-lg p-4 text-center border hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            // >
            //   <div className="flex flex-col items-center gap-3">
            //     <motion.div
            //       className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300"
            //       whileHover={{
            //         y: [0, -3, 3, -3, 0], // Creates an up-down vibration effect
            //         transition: {
            //           duration: 0.3,
            //           repeat: Infinity,
            //           ease: "easeInOut",
            //         },
            //       }}
            //     >
            //       <category.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
            //     </motion.div>
            //     <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            //       {category.name}
            //     </h3>
            //     <p className="text-sm text-gray-500">{category.colleges}</p>
            //   </div>
            // </motion.div>

            // <motion.div
            //   onClick={() => navigate("/colleges")}
            //   key={index}
            //   variants={itemVariants}
            //   whileHover={{ scale: 1.05 }}
            //   className="group relative bg-white rounded-lg p-4 text-center border hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            // >
            //   <div className="flex flex-col items-center gap-3">
            //     <motion.div
            //       className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300"
            //       animate={{ x: [0, -2, 2, -2, 0] }} // Side-to-side vibration effect
            //       transition={{
            //         duration: 0.2,
            //         repeat: Infinity,
            //         ease: "easeInOut",
            //       }}
            //     >
            //       <category.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
            //     </motion.div>
            //     <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            //       {category.name}
            //     </h3>
            //     <p className="text-sm text-gray-500">{category.colleges}</p>
            //   </div>
            // </motion.div>

            <motion.div
              onClick={() => navigate("/colleges")}
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              
              className="group relative bg-white rounded-lg p-4 text-center border hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  className="w-12 h-12 flex items-center   justify-center rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300"
                  whileHover={{
                    y: [-2, 2, -2, 0], // Up-down vibration effect
                    transition: {
                      duration: 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <category.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
                </motion.div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.colleges}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
