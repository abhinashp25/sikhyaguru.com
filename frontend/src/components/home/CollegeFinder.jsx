import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Brain, Building2, Users, Stethoscope, FlaskRound, Hotel,
  MonitorSmartphone, BookOpen, Radio, Syringe, GraduationCap,
  Gavel, HeartPulse, Smile, Palette, School, AlertCircle
} from "lucide-react";
import NoCollegesFound from "../college/NoCollegesFound";

const categoryIcons = {
  Engineering: Brain,
  "Commerce & Banking": Building2,
  Management: Users,
  Medical: Stethoscope,
  Sciences: FlaskRound,
  "Hotel Management": Hotel,
  "Information Technology": MonitorSmartphone,
  "Arts & Humanities": BookOpen,
  "Mass Communication": Radio,
  Nursing: Syringe,
  Agriculture: GraduationCap,
  Design: Palette,
  Pharmacy: HeartPulse,
  Law: Gavel,
  Paramedical: HeartPulse,
  Dental: Smile,
  "Performing Arts": Palette,
  Education: School,
};

export default function CollegeFinder() {
  const [activeTab, setActiveTab] = useState("colleges");
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.REACT_APP_BACKEND_URI}/api/v0/colleges`)
      .then((res) => {
        setCollegeData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching college data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);
  const categoryCounts = Object.keys(categoryIcons).map((categoryName) => {
    const count = collegeData.filter(college => college.collegeType === categoryName).length;
    return {
      icon: categoryIcons[categoryName],
      name: categoryName,
      count: count,
      colleges: count === 0 ? "No colleges" : `${count} ${count === 1 ? 'College' : 'Colleges'}`,
    };
  });

  const handleCategoryClick = (category) => {
    if (category.count === 0) {
      setSelectedCategory(category.name);
    } else {
      navigate("/colleges", { state: { filter: category.name } });
    }
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <NoCollegesFound />;
  }

  if (selectedCategory) {
    return (
      <NoCollegesFound onBack={handleBackToCategories} />
    );
  }

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

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("colleges")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "colleges"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Colleges
              </button>
              <button
                onClick={() => setActiveTab("exams")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "exams"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Exams
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categoryCounts.map((category, index) => (
            <motion.div
              onClick={() => handleCategoryClick(category)}
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-lg p-4 text-center border hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300"
                  whileHover={{
                    y: [-2, 2, -2, 0],
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
                <p className={`text-sm ${category.count === 0 ? 'text-gray-500' : 'text-gray-600'}`}>
                  {category.colleges}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}