// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { motion } from "framer-motion";

// const LoginPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState("");

//   // Form Handling
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   // Show popup every 30 seconds until user logs in
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!localStorage.getItem("userLoggedIn")) {
//         setIsOpen(true);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Submit Handler
//   const onSubmit = async (data) => {
//     setLoading(true);
//     setApiError("");

//     try {
//       const response = await axios.post("https://your-api.com/login", data);
//       localStorage.setItem("userLoggedIn", "true"); // Store login status
//       setIsOpen(false);
//       reset();
//     } catch (error) {
//       setApiError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-lg w-96"
//             initial={{ y: -50 }}
//             animate={{ y: 0 }}
//           >
//             <h2 className="text-xl font-semibold mb-4">Login</h2>

//             {apiError && <p className="text-red-500">{apiError}</p>}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               {/* Name Field */}
//               <div>
//                 <input
//                   type="text"
//                   {...register("name", { required: "Name is required" })}
//                   placeholder="Name"
//                   className={`w-full p-2 border ${
//                     errors.name ? "border-red-500" : "border-gray-300"
//                   } rounded`}
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm">{errors.name.message}</p>
//                 )}
//               </div>

//               {/* Email Field */}
//               <div>
//                 <input
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
//                   })}
//                   placeholder="Email"
//                   className={`w-full p-2 border ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   } rounded`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email.message}</p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <input
//                   type="tel"
//                   {...register("phone", {
//                     required: "Phone number is required",
//                     pattern: { value: /^[0-9]{10}$/, message: "Invalid phone" },
//                   })}
//                   placeholder="Phone"
//                   className={`w-full p-2 border ${
//                     errors.phone ? "border-red-500" : "border-gray-300"
//                   } rounded`}
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm">{errors.phone.message}</p>
//                 )}
//               </div>

//               {/* City Field */}
//               <div>
//                 <input
//                   type="text"
//                   {...register("city", { required: "City is required" })}
//                   placeholder="City"
//                   className={`w-full p-2 border ${
//                     errors.city ? "border-red-500" : "border-gray-300"
//                   } rounded`}
//                 />
//                 {errors.city && (
//                   <p className="text-red-500 text-sm">{errors.city.message}</p>
//                 )}
//               </div>

//               {/* Interested Course */}
//               <div>
//                 <select
//                   {...register("course", { required: "Course is required" })}
//                   className={`w-full p-2 border ${
//                     errors.course ? "border-red-500" : "border-gray-300"
//                   } rounded`}
//                 >
//                   <option value="">Select Course</option>
//                   <option value="BTech">BTech</option>
//                   <option value="MTech">MTech</option>
//                   <option value="BCA">BCA</option>
//                   <option value="MCA">MCA</option>
//                   <option value="BSc">BSc</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 {errors.course && (
//                   <p className="text-red-500 text-sm">{errors.course.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default LoginPopup;

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { create } from "zustand";

// // Global state using Zustand
// const useAuthStore = create((set) => ({
//   user: null,
//   isAuth: false,
//   login: async (data) => {
//     try {
//       const response = await axios.post("https://your-api.com/login", data);
//       set({ isAuth: true, user: response.data });
//       localStorage.setItem("userLoggedIn", "true");
//     } catch (error) {
//       throw new Error("Login failed. Please try again.");
//     }
//   },
// }));

// const LoginPopup = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const { isAuth, login } = useAuthStore();
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState("");

//   // Show popup every 30 seconds until user logs in
//   useEffect(() => {
//     if (!isAuth) {
//       const interval = setInterval(() => {
//         setIsOpen(true);
//       }, 30000);
//       return () => clearInterval(interval);
//     }
//   }, [isAuth]);

//   // Submit Handler
//   const onSubmit = async (data) => {
//     setLoading(true);
//     setApiError("");
//     try {
//       await login(data);
//       setIsOpen(false);
//       reset();
//     } catch (error) {
//       setApiError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {isOpen && !isAuth && (
//         <motion.div
//           className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-lg w-96 border-2 border-blue-500"
//             initial={{ y: -50 }}
//             animate={{ y: 0 }}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome Back</h2>

//             {apiError && <p className="text-red-500 text-center">{apiError}</p>}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               {/* Email Field */}
//               <div>
//                 <input
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
//                   })}
//                   placeholder="Email"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email.message}</p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <input
//                   type="password"
//                   {...register("password", { required: "Password is required" })}
//                   placeholder="Password"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.password && (
//                   <p className="text-red-500 text-sm">{errors.password.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default LoginPopup;

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import EntrollForm from "../../assests/EnrollForm1.jpg";

import { create } from "zustand";
import { X } from "lucide-react";

// Zustand store
const useAuthStore = create((set) => ({
  user: null,
  isAuth: false,
  login: async (data) => {
    try {
      // const response = await axios.post("https://your-api.com/login", data);
      set({ user: {}, isAuth: true });
      localStorage.setItem("userLoggedIn", "true");
    } catch (error) {
      console.error("Login failed", error);
    }
  },
}));

const LoginPopup = () => {
  const { isAuth, login } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  // Form Handling
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onClose = () => {
    setIsOpen(false);
    reset();
  };

  // Show popup every 30 seconds until user logs in
  useEffect(() => {
    if (!isAuth) {
      const interval = setInterval(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAuth]);

  // Submit Handler
  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");
    try {
      await login(data);
      setIsOpen(false);
      reset();
    } catch {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isAuth && isOpen && (
        <div className="fixed inset-0   flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div
            //  style={{ backgroundImage: `url(${EntrollForm}) ` }}
            className="relative   bg-gray-50  h-fit m-1 md:m-0 overflow-y-auto  md:h-fit p-2 md:p-2 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row"
          >
            {/* Left Section: Image and Info */}
            <div
              style={{ backgroundImage: `url(${EntrollForm}) ` }}
              className="hidden md:flex  bg-no-repeat bg-cover flex-col justify-center items-center w-1/2 bg-gray-100 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-200 mb-4">
                Enroll in a Course
              </h2>
              <p className="text-gray-300 text-center">
                Enhance your skills with our top-rated courses. Join now!
              </p>
              {/* <img
                src="/images/enroll.jpg"
                alt="Enroll"
                className="mt-4 w-full h-auto rounded-lg"
              /> */}
            </div>
            {/* Right Section: Form */}
          
            <div className="w-full md:w-1/2 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-center font-semibold">
                  Enrollment Form
                </h2>
                <X
                  onClick={onClose}
                  className="cursor-pointer text-gray-500 hover:text-red-500"
                  size={24}
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                {/* Full Name */}
                <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                  className={`border rounded-md p-3 w-full ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
                </div>

                {/* Email */}
                <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`border rounded-md p-3 w-full ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
                </div>

                {/* Phone Number */}
                <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit Indian number",
                    },
                  })}
                  className={`border rounded-md p-3 w-full ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
                </div>

                {/* City */}
                <div>
                <input
                  type="text"
                  placeholder="City"
                  {...register("city", { required: "City is required" })}
                  className={`border rounded-md p-3 w-full ${
                    errors.city ? "border-red-500" : ""
                  }`}
                />
                {errors.city && (
                  <span className="text-red-500 text-xs">
                    {errors.city.message}
                  </span>
                )}
                </div>

                {/* Course Selection */}
                <div>
                <select
                  {...register("course", {
                    required: "Course selection is required",
                  })}
                  className={`border rounded-md p-3 w-full ${
                    errors.course ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select Course</option>
                  <option value="BTech">BTech</option>
                  <option value="MTech">MTech</option>
                  <option value="MCA">MCA</option>
                  <option value="BCA">BCA</option>
                </select>
                {errors.course && (
                  <span className="text-red-500 text-xs">
                    {errors.course.message}
                  </span>
                )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Enroll Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
