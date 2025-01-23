import React from "react";
import { motion } from "framer-motion";
import HowItWorksImg from "../../assests/HowItWorka.jpg";

const steps = [
  "Tell us about your College / Course & Location preferences.",
  "An Expert Counsellor will be assigned to you.",
  "Discuss your options with your counsellor.",
  "Apply online through our COMMON APPLICATION FORM platform.",
  "Your counselor will ensure seat allocation for you.",
  "Deposit your fee. If you need, avail Education Loan at 0% Interest Rate.",
  "Yippie! your dream college is right there waiting for you to join!",
];

const features = [
  { icon: "👁️", title: "No Hidden Charges" },
  { icon: "🤝", title: "1 on 1 Counselling" },
  { icon: "🌐", title: "100% Online Process" },
  { icon: "👨‍🏫", title: "Best Experts in India" },
  { icon: "🏠", title: "No need to step out of home" },
  { icon: "💰", title: "Loan Support @ 0% Interest" },
];

const HowItWorks = () => {
  return (
    <div className=" text-white py-12 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        How it works
      </h2>

      {/* Steps */}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="space-y-4 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex-none w-6 h-6 bg-teal-500 rounded-full flex justify-center items-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <p className="text-lg text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>

        <div>
          {/* <img
            src={HowItWorksImg}
            alt="howItWorks"
            className="w-full h-full object-cover "
          /> */}
        </div>
      </div>

      {/* Features */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <p className="font-semibold">{feature.title}</p>
          </motion.div>
        ))}
      </div> */}

      {/* CTA */}
      <div className="flex justify-center items-center mt-12">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition">
          Talk to our Experts
        </button>
        <button className="ml-4 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg transition flex items-center gap-2">
          <span>▶</span> Watch video
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const steps = [
//   "Tell us about your College / Course & Location preferences.",
//   "An Expert Counsellor will be assigned to you.",
//   "Discuss your options with your counsellor.",
//   "Apply online through our COMMON APPLICATION FORM platform.",
//   "Your counselor will ensure seat allocation for you.",
//   "Deposit your fee. If you need, avail Education Loan at 0% Interest Rate.",
//   "Yippie! your dream college is right there waiting for you to join!",
// ];

// const features = [
//   { icon: "👁️", title: "No Hidden Charges" },
//   { icon: "🤝", title: "1 on 1 Counselling" },
//   { icon: "🌐", title: "100% Online Process" },
//   { icon: "👨‍🏫", title: "Best Experts in India" },
//   { icon: "🏠", title: "No need to step out of home" },
//   { icon: "💰", title: "Loan Support @ 0% Interest" },
// ];

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const HowItWorks = () => {
//   const { ref: stepsRef, inView: stepsInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const { ref: featuresRef, inView: featuresInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <div className="bg-gray-900 text-white py-16 px-6 sm:px-12">
//       <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>

//       {/* Steps Section */}
//       <div ref={stepsRef}>
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInVariants}
//             initial="hidden"
//             animate={stepsInView ? "visible" : "hidden"}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="flex items-start gap-4 mb-6"
//           >
//             <div className="flex-none w-8 h-8 bg-teal-500 rounded-full flex justify-center items-center">
//               <span className="text-white font-bold">{index + 1}</span>
//             </div>
//             <p className="text-lg">{step}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Features Section */}
//       <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-12">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInVariants}
//             initial="hidden"
//             animate={featuresInView ? "visible" : "hidden"}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
//           >
//             <div className="text-4xl mb-4">{feature.icon}</div>
//             <p className="font-semibold">{feature.title}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <div className="flex justify-center items-center mt-12">
//         <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition">
//           Talk to our Experts
//         </button>
//         <button className="ml-4 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg transition flex items-center gap-2">
//           <span>▶</span> Watch video
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;
