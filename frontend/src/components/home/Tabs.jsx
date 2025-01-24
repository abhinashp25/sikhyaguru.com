// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Book,
//   GraduationCap,
//   Stethoscope,
//   Code,
//   Briefcase,
//   Atom,
//   Globe,
//   User,
//   Calculator,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("courses");
//   const navigate = useNavigate();

//   const courses = [
//     {
//       icon: GraduationCap,
//       title: "Engineering",
//       description: "Explore the world of engineering.",
//     },
//     {
//       icon: Stethoscope,
//       title: "Medical",
//       description: "Learn medical sciences and healthcare.",
//     },
//     {
//       icon: Atom,
//       title: "Science",
//       description: "Dive into physics, chemistry, and biology.",
//     },
//     {
//       icon: Calculator,
//       title: "Commerce",
//       description: "Master accounting, finance, and business.",
//     },
//     {
//       icon: Code,
//       title: "Computer Science",
//       description: "Learn programming and algorithms.",
//     },
//     {
//       icon: Briefcase,
//       title: "Management",
//       description: "Develop leadership and managerial skills.",
//     },
//     {
//       icon: Globe,
//       title: "Geography",
//       description: "Understand the Earth's features and cultures.",
//     },
//     {
//       icon: Book,
//       title: "History",
//       description: "Study past events and civilizations.",
//     },
//     {
//       icon: User,
//       title: "Psychology",
//       description: "Learn human behavior and mental processes.",
//     },

//   ];

//   const exams = [
//     {
//       icon: GraduationCap,
//       title: "JEE Main",
//       description: "Prepare for engineering entrance exams.",
//     },
//     {
//       icon: Stethoscope,
//       title: "NEET",
//       description: "Medical entrance preparation.",
//     },
//     {
//       icon: Calculator,
//       title: "CPT",
//       description: "Commerce professional training.",
//     },
//     {
//       icon: Code,
//       title: "Coding Competitions",
//       description: "Test your programming skills.",
//     },
//     {
//       icon: Atom,
//       title: "Science Olympiad",
//       description: "Participate in science challenges.",
//     },
//     {
//       icon: Globe,
//       title: "Geography Quiz",
//       description: "Test your knowledge of world geography.",
//     },
//     {
//       icon: Book,
//       title: "History Exam",
//       description: "Evaluate your understanding of history.",
//     },
//     {
//       icon: User,
//       title: "Psychology Test",
//       description: "Test your knowledge of psychology.",
//     },
//     {
//       icon: Briefcase,
//       title: "MBA Entrance",
//       description: "Management studies preparation.",
//     },

//   ];

//   return (
//     <div className="container mx-auto p-4">
//       {/* Tab Buttons */}
//       {/* <div className="flex justify-center space-x-4 mb-6">
//         <button
//           className={`py-2 px-6 rounded-lg text-white ${activeTab === "courses" ? "bg-blue-600" : "bg-gray-500"}`}
//           onClick={() => setActiveTab("courses")}
//         >
//           Courses
//         </button>
//         <button
//           className={`py-2 px-6 rounded-lg text-white ${activeTab === "exams" ? "bg-blue-600" : "bg-gray-500"}`}
//           onClick={() => {
//             setActiveTab("exams");
//           //  navigate("/exams"); // Redirect to exams page
//           }}
//         >
//           Exams
//         </button>
//       </div> */}

//       <div className="flex justify-center space-x-6 mb-8 mt-10">
//         <button
//           className={`py-2 px-8 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ${
//             activeTab === "courses"
//               ? "bg-blue-600 text-white scale-110 shadow-blue-300"
//               : "bg-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("courses")}
//         >
//           Courses
//         </button>
//         <button
//           className={`py-2 px-8 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ${
//             activeTab === "exams"
//               ? "bg-blue-600 text-white scale-110 shadow-blue-300"
//               : "bg-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//           }`}
//           onClick={() => {
//             setActiveTab("exams");
//             // navigate("/exams"); // Uncomment to enable navigation
//           }}
//         >
//           Exams
//         </button>
//       </div>

//       {/* Content */}
//       <motion.div
//         key={activeTab}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         {activeTab === "courses" ? (
//           <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {courses.map((course, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <course.icon className="text-blue-500 w-12 h-12" />
//                 <div>
//                   <h3 className="text-xl font-semibold">{course.title}</h3>
//                   <p className="text-gray-600">{course.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {exams.map((exam, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <exam.icon className="text-green-500 w-12 h-12" />
//                 <div>
//                   <h3 className="text-xl font-semibold">{exam.title}</h3>
//                   <p className="text-gray-600">{exam.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Tabs;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Book,
  GraduationCap,
  Stethoscope,
  Code,
  Briefcase,
  Atom,
  Globe,
  User,
  Calculator,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const navigate = useNavigate();

  const courses = [
    {
      icon: GraduationCap,
      title: "Engineering",
      description: "Explore the world of engineering.",
    },
    {
      icon: Stethoscope,
      title: "Medical",
      description: "Learn medical sciences and healthcare.",
    },
    {
      icon: Atom,
      title: "Science",
      description: "Dive into physics, chemistry, and biology.",
    },
    {
      icon: Calculator,
      title: "Commerce",
      description: "Master accounting, finance, and business.",
    },
    {
      icon: Code,
      title: "Computer Science",
      description: "Learn programming and algorithms.",
    },
    {
      icon: Briefcase,
      title: "Management",
      description: "Develop leadership and managerial skills.",
    },
    {
      icon: Globe,
      title: "Geography",
      description: "Understand the Earth's features and cultures.",
    },
    {
      icon: Book,
      title: "History",
      description: "Study past events and civilizations.",
    },
    {
      icon: User,
      title: "Psychology",
      description: "Learn human behavior and mental processes.",
    },
  ];

  const exams = [
    {
      icon: GraduationCap,
      title: "JEE Main",
      description: "Prepare for engineering entrance exams.",
      link: "https://jeemain.nta.nic.in/",
    },
    {
      icon: Stethoscope,
      title: "NEET",
      description: "Medical entrance preparation.",
      link: "https://neet.nta.nic.in/",
    },
    {
      icon: Calculator,
      title: "CPT",
      description: "Commerce professional training.",
      link: "https://icai.org/",
    },
    {
      icon: Code,
      title: "Coding Competitions",
      description: "Test your programming skills.",
      link: "https://www.codechef.com/",
    },
    {
      icon: Atom,
      title: "Science Olympiad",
      description: "Participate in science challenges.",
      link: "https://sofworld.org/",
    },
    {
      icon: Globe,
      title: "Geography Quiz",
      description: "Test your knowledge of world geography.",
      link: "https://www.nationalgeographic.org/",
    },
    {
      icon: Book,
      title: "History Exam",
      description: "Evaluate your understanding of history.",
      link: "https://www.history.com/",
    },
    {
      icon: User,
      title: "Psychology Test",
      description: "Test your knowledge of psychology.",
      link: "https://psychcentral.com/",
    },
    {
      icon: Briefcase,
      title: "MBA Entrance",
      description: "Management studies preparation.",
      link: "https://www.mba.com/",
    },
  ];

  return (
    <div className="px-6 md:px-10 py-10 container mx-auto">
      {/* Heading and Description */}
      <div className="text-center mb-6 mt-8">
        {activeTab === "courses" ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Explore Our Courses
            </h2>

            <p className="text-gray-600">
              Discover a variety of courses across multiple fields, designed to
              help you achieve your goals.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Prepare for Exams
            </h2>

            <p className="text-gray-600">
              Ace your exams with the right guidance and resources tailored for
              your success.
            </p>
          </>
        )}
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center space-x-6 mb-8 mt-10">
        <button
          className={`py-2 px-8 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ${
            activeTab === "courses"
              ? "bg-blue-600 text-white scale-110 shadow-blue-300"
              : "bg-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("courses")}
        >
          Courses
        </button>
        <button
          className={`py-2 px-8 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ${
            activeTab === "exams"
              ? "bg-blue-600 text-white scale-110 shadow-blue-300"
              : "bg-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("exams")}
        >
          Exams
        </button>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "courses" ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.02 }}
              >
                <course.icon className="text-blue-500 w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => window.open(exam.link, "_blank")}
              >
                <exam.icon className="text-green-500 w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">{exam.title}</h3>
                  <p className="text-gray-600">{exam.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Tabs;
