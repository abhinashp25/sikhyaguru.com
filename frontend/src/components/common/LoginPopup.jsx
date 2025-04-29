

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import EntrollForm from "../../assests/EnrollForm1.jpg";

import { create } from "zustand";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginPopup, loginSuccess } from "../../store/authSlice";

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
  const dispatch = useDispatch();
  const { isLoginPopupOpen, isAuth } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onClose = () => {
    dispatch(closeLoginPopup());
    reset();
  };

  // Submit Handler
  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");
    try {
      // Simulate API call
      // const response = await axios.post("https://your-api.com/login", data);
      dispatch(loginSuccess({ name: data.name, email: data.email})); // Save user data
      reset();
    } catch {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     {!isAuth && isLoginPopupOpen && (
        <div className="fixed inset-0   flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div
            className="relative   bg-gray-50  h-fit m-1 md:m-0 overflow-y-auto  md:h-fit p-2 md:p-2 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row"
          >
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

           

            <div className="w-full md:w-1/2 p-3 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl mx-auto container text-center font-semibold">
                  Enrollment Form
                </h2>
                <button
                  onClick={onClose}
                  className="cursor-pointer text-gray-500 hover:text-red-500"
                >
                  ✖
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="relative">
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`peer border rounded-md p-2 md:p-3 w-full bg-transparent focus:outline-none focus:ring-1 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-3 px-1 bg-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 -top-2 text-xs ${
                      errors.name
                        ? "text-red-500 peer-focus:text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    Full Name
                  </label>
                  {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
                </div>
               
                <div className="relative">
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className={`peer border rounded-md  p-2 md:p-3  w-full bg-transparent focus:outline-none focus:ring-1 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-3 px-1 bg-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 -top-2 text-xs ${
                      errors.email
                        ? "text-red-500 peer-focus:text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    Email
                  </label>
                  {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}

                </div>
              
                <div className="relative">
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter a valid Indian phone number",
                      },
                      maxLength: 10,
                    })}
                    className={`peer border rounded-md  p-2 md:p-3  w-full bg-transparent focus:outline-none focus:ring-1 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder=" "
                    maxLength={10}
                  />
                  <label
                    className={`absolute left-3 px-1 bg-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 -top-2 text-xs ${
                      errors.phone
                        ? "text-red-500 peer-focus:text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    Phone Number
                  </label>
                  {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
                </div>
               
                <div className="relative">
                  <input
                    type="text"
                    {...register("city", { required: "City is required" })}
                    className={`peer border rounded-md  p-2 md:p-3  w-full bg-transparent focus:outline-none focus:ring-1 ${
                      errors.city
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-3 px-1 bg-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 -top-2 text-xs ${
                      errors.city
                        ? "text-red-500 peer-focus:text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    City
                  </label>
                  {errors.city && (
                  <span className="text-red-500 text-xs">
                    {errors.city.message}
                  </span>
                )}
                </div>
             

                <div className="relative">
                  <select
                    {...register("course", {
                      required: "Course selection is required",
                    })}
                    className={`peer border rounded-md  p-2 md:p-3  w-full bg-transparent focus:outline-none focus:ring-1 ${
                      errors.course
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  >
                    <option value="">Select Course</option>
                    <option value="BTech">BTech</option>
                    <option value="MTech">MTech</option>
                    <option value="MCA">MCA</option>
                    <option value="BCA">BCA</option>
                    <option value="Other">More...</option>
                  </select>
                  <label
                    className={`absolute left-3 px-1 bg-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 -top-2 text-xs ${
                      errors.course
                        ? "text-red-500 peer-focus:text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    Course Interested
                  </label>
                  {errors.course && (
                  <span className="text-red-500 text-xs">
                    {errors.course.message}
                  </span>
                )}
                </div>
              
                <button
                  type="submit"
                  className="bg-gradient-to-br from-blue-700  via-blue-950 to-blue-700 text-white py-2 rounded-md hover:bg-blue-700"
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
