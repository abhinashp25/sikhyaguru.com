// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import Button from "../common/Button";
// import Header from "../common/Header";
// import heroVideo from "../../assests/heroVideo1.mp4";

// const HeroSection = () => {
//   const backgroundVideo = heroVideo;
//   // "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with your video URL
//   const backgroundImage = "https://source.unsplash.com/random/1920x1080"; // Replace with your image URL

//   return (
//     <section className="relative  overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 object-cover w-full h-full"
//         src={backgroundVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//         poster={backgroundImage} // Fallback image
//       ></video>

//       <Header />

//       {/* Overlay to add slight darkness */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
//         {/* Typing Animation */}
//         <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-5xl">
//           <Typewriter
//             words={[
//               "Find Your Perfect College Path",
//               "Find Your Perfect College Way",
//             ]}
//             loop={true}
//             cursor
//             cursorStyle="_"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </h1>
//         <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
//           Compare colleges, explore hostels, check fees, and make informed
//           decisions about your academic future.
//         </p>

//         {/* Search Bar */}
//         <div className="flex justify-center w-full mt-4">
//           <input
//             type="text"
//             placeholder="Search for colleges, courses, or hostels..."
//             className="w-full max-w-lg px-4 py-3 text-gray-900 rounded-l-md focus:outline-none"
//           />
//           <button
//             type="button"
//             className="px-6 py-3 text-white bg-blue-600 rounded-r-md hover:bg-blue-700"
//           >
//             Search
//           </button>
//         </div>

//         <div className="grid grid-cols-2 gap-4 justify-center mt-8">
//           {/* <Button title={"Get Started"} /> */}
// <div className="px-8 py-3 text-lg font-semibold rounded bg-gradient-to-br from-blue-700  via-blue-900 to-blue-700 text-gray-100">
//   Get Started
// </div>
// <button
//   type="button"
//   className="px-8 py-3  text-lg border rounded border-gray-200 text-white hover:bg-gray-700"
// >
//   Learn more
// </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "../common/Button";

import heroVideo1 from "../../assests/heroVideo.mp4";
import heroVideo2 from "../../assests/heroVideo1.mp4";
import heroVideo3 from "../../assests/heroVideo2.mp4";

const HeroSection = () => {
  // Array of videos and images
  const media = [
    {
      video: heroVideo1,
      image: "https://source.unsplash.com/random/1920x1080",
    },
    {
      video: heroVideo2,
      image: "https://source.unsplash.com/1920x1080/?nature,landscape",
    },
    {
      video: heroVideo3,
      image: "https://source.unsplash.com/1920x1080/?education,books",
    },
  ];

  const [currentMedia, setCurrentMedia] = useState(2);

  // Cycle through videos and images every 10 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentMedia((prev) => (prev + 1) % media.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [media.length]);

  return (
    <section className="relative  overflow-hidden">
      {/* Background Video */}
      <video
        key={currentMedia} // Forces re-render when media changes
        className="absolute inset-0 object-cover w-full h-full"
        src={media[currentMedia].video}
        autoPlay
        loop
        muted
        playsInline
        poster={media[currentMedia].image} // Fallback image
      ></video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
        {/* Typing Animation */}
        <h1 className=" font-bold h-24 md:h-fit leading-none md:text-5xl text-4xl xl:max-w-7xl">
          <Typewriter
            words={["Find Your Perfect College Path"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
          Compare colleges, explore hostels, check fees, and make informed
          decisions about your academic future.
        </p>

        {/* Search Icon */}
        {/* Search Bar */}
        <div className="flex justify-center w-full mt-4">
          <input
            type="text"
            placeholder="Search for colleges, courses, or hostels..."
            className="w-full max-w-lg px-4 py-3 text-gray-900 rounded-l-md focus:outline-none"
          />
          <button
            type="button"
            className="px-6 py-3 text-white bg-blue-600 rounded-r-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-2 mt-8">
          <button className="px-8 py-3 text-xs md:text-lg font-semibold rounded bg-gradient-to-br from-blue-700  via-blue-900 to-blue-700 text-gray-100">
            Get Started
          </button>
          <button
            type="button"
            className="px-8 py-3  text-xs md:text-lg border rounded border-gray-200 text-white hover:bg-gray-900"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
