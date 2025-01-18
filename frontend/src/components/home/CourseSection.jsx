// import React from "react";

// const CourseSection = () => {
//   const courses = [
//     {
//       category: "Engineering",
//       title: "B.Tech Computer Science",
//       duration: "4 Years",
//       eligibility: "10+2 with PCM",
//       fee: "₹2.5L - 4L/year",
//     },
//     {
//       category: "Medical",
//       title: "MBBS",
//       duration: "5.5 Years",
//       eligibility: "NEET Qualified",
//       fee: "₹5L - 15L/year",
//     },
//     {
//       category: "Management",
//       title: "MBA",
//       duration: "2 Years",
//       eligibility: "Graduation + CAT/MAT",
//       fee: "₹8L - 20L/year",
//     },
//   ];

//   return (
//     <section className="bg-white py-8">
//       <div className="h-auto mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-orange-600">
//           Explore Popular Courses
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           Discover your perfect course from our comprehensive catalog.
//         </p>
//         <div className="flex justify-center space-x-4 mb-8">
//           {
//             ["All Courses", "Engineering", "Medical", "Management"].map((category, index) => (
//               <button key={index} className="bg-orange-600 text-white  p-2 md:px-4 md:py-2 rounded">
//               {category}
//             </button>
//             ))
//           }
          
//         </div>
//         <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-6 rounded shadow hover:shadow-lg"
//             >
//               <h3 className="text-lg font-semibold text-orange-600 mb-2">
//                 {course.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-2">{course.category}</p>
//               <p className="text-sm text-gray-600 mb-2">Duration: {course.duration}</p>
//               <p className="text-sm text-gray-600 mb-2">
//                 Eligibility: {course.eligibility}
//               </p>
//               <p className="text-sm text-gray-600 mb-4">Average Fee: {course.fee}</p>
//               <button className="bg-orange-600 text-white px-4 py-2 rounded">
//                 Explore Course
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CourseSection;

import React, { useState } from "react";

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const courses = {
    all: [
      { name: "B.Tech in Computer Science", category: "Engineering" },
      { name: "MBBS", category: "Medical" },
      { name: "B.Com", category: "Commerce" },
      { name: "B.A. in English", category: "Arts" },
      { name: "B.Tech in Mechanical Engineering", category: "Engineering" },
      { name: "B.Sc in Nursing", category: "Medical" },
    ],
    engineering: [
      { name: "B.Tech in Computer Science" },
      { name: "B.Tech in Mechanical Engineering" },
      { name: "B.E. in Civil Engineering" },
    ],
    medical: [
      { name: "MBBS" },
      { name: "BDS (Dental Surgery)" },
      { name: "B.Sc in Nursing" },
    ],
    commerce: [
      { name: "B.Com" },
      { name: "M.Com" },
      { name: "BBA" },
    ],
    arts: [
      { name: "B.A. in English" },
      { name: "B.A. in History" },
      { name: "BFA (Fine Arts)" },
    ],
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="max-w-7xl mx-auto my-10 p-6">
      {/* Tabs */}
      <div className="flex justify-center overflow-x-auto gap-4 mb-8">
        {["All Courses", "Engineering", "Medical", "Commerce", "Arts"].map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category.toLowerCase())}
            className={`py-2 px-6 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === category.toLowerCase()
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
        {courses[activeCategory].map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
            <p className="text-gray-600">Category: {course.category || activeCategory}</p>
            <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;

