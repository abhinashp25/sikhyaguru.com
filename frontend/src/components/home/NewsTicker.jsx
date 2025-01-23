// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// const NewsTicker = () => {
//   const dummyData = [
//     { title: "1 UG Exam 2024", url: "https://www.ugexam.com" },
//     { title: "2 PG Admission 2024", url: "https://www.pgadmission.com" },
//     { title: "3 GATE 2024 Results", url: "https://www.gate2024.com" },
//     { title: "4 NEET UG 2024", url: "https://www.neetug.com" },
//     { title: "5 JEE Main 2024", url: "https://www.jeemain.com" },
//     { title: "6 Common Application Form", url: "https://www.commonform.com" },
//     { title: "7 Nation Exam", url: "https://www.7.com" },
//     { title: "8 Nation Exam", url: "https://www.7.com" },
//     { title: "9 Nation Exam", url: "https://www.7.com" },
//     { title: "10 Nation Exam", url: "https://www.7.com" },
//   ];

//   const [hovering, setHovering] = useState(false);
//   const [newsItems, setNewsItems] = useState(dummyData);

//   const controls = useAnimation();

//   // Animation for infinite loop cycling
//   const scrollAnimation = {
//     x: [0, -100],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 1,
//         ease: "linear",
//       },
//     },
//   };

//   const handleMouseEnter = () => {
//     setHovering(true);
//     controls.stop();
//   };

//   const handleMouseLeave = () => {
//     setHovering(false);
//     controls.start(scrollAnimation);
//   };

//   useEffect(() => {
//     // Start animation on load
//     controls.start(scrollAnimation);
//   }, [controls]);

//   // Function to cycle items: Moves the first item to the end
//   useEffect(() => {
//     if (!hovering) {
//       const interval = setInterval(() => {
//         setNewsItems((prevItems) => {
//           const [first, ...rest] = prevItems;
//           return [...rest, first]; // Re-add the first item to the end
//         });
//       }, 3000); // Adjust interval speed to match the scroll speed

//       return () => clearInterval(interval);
//     }
//   }, [hovering]);

//   return (
//     <div className="relative w-full bg-yellow-100 py-2 flex items-center">
//       {/* Trending Label */}
//       <div className="flex items-center gap-2 bg-yellow-300 px-3 py-1 rounded-r-md shadow">
//         <span className="text-sm font-bold text-gray-700">Trending Today</span>
//         <span role="img" aria-label="megaphone">
//           📢
//         </span>
//       </div>

//       {/* News Ticker */}
//       <div
//         className="overflow-hidden w-full ml-2"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <motion.div
//           className="flex gap-8"
//           animate={controls}
//           style={{ whiteSpace: "nowrap" }}
//         >
//           {newsItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 text-sm hover:underline"
//             >
//               {item.title}
//             </a>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default NewsTicker;




import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const NewsTicker = () => {
  const dummyData = [
    { title: "1 UG Exam 2024", url: "https://www.ugexam.com" },
    { title: "2 PG Admission 2024", url: "https://www.pgadmission.com" },
    { title: "3 GATE 2024 Results", url: "https://www.gate2024.com" },
    { title: "4 NEET UG 2024", url: "https://www.neetug.com" },
    { title: "5 JEE Main 2024", url: "https://www.jeemain.com" },
    { title: "6 Common Application Form", url: "https://www.commonform.com" },
    { title: "7 Nation Exam", url: "https://www.7.com" },
    { title: "8 Nation Exam", url: "https://www.7.com" },
    { title: "9 Nation Exam", url: "https://www.7.com" },
    { title: "10 Nation Exam", url: "https://www.7.com" },
  ];

  const [hovering, setHovering] = useState(false);

  const controls = useAnimation();

  // Scroll Animation for seamless looping
  const scrollAnimation = {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15, // Adjust duration for smoothness
        ease: "linear",
      },
    },
  };

  const handleMouseEnter = () => {
    setHovering(true);
    controls.stop(); // Stop animation on hover
  };

  const handleMouseLeave = () => {
    setHovering(false);
    controls.start(scrollAnimation); // Restart animation
  };

  useEffect(() => {
    // Start animation on load
    controls.start(scrollAnimation);
  }, [controls]);

  return (
    <div className="relative w-full bg-yellow-100 py-2 flex items-center">
      {/* Trending Label */}
      <div className="flex items-center gap-2 bg-yellow-300 px-3 py-1 rounded-r-md shadow">
        <span className="text-sm font-bold text-gray-700">Trending Today</span>
        <span role="img" aria-label="megaphone">
          📢
        </span>
      </div>

      {/* News Ticker */}
      <div
        className="overflow-hidden w-full ml-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-8"
          animate={controls}
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Duplicate news items for seamless looping */}
          {[...dummyData, ...dummyData].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline"
            >
              {item.title}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsTicker;
