import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const EnrollFormModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/enroll`,
        data
      );
      toast.success(response.data.message);
      reset();
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Section: Image and Info */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-100 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enroll in a Course</h2>
          <p className="text-gray-600 text-center">Enhance your skills with our top-rated courses. Join now!</p>
          <img
            src="/images/enroll.jpg"
            alt="Enroll"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </div>
        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Enrollment Form</h2>
            <X onClick={onClose} className="cursor-pointer text-gray-500 hover:text-red-500" size={24} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="border rounded-md p-3 w-full"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: "Phone number is required" })}
              className="border rounded-md p-3 w-full"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            
            <input
              type="text"
              placeholder="City"
              {...register("city", { required: "City is required" })}
              className="border rounded-md p-3 w-full"
            />
            {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
            
            <select
              {...register("course", { required: "Course selection is required" })}
              className="border rounded-md p-3 w-full"
            >
              <option value="">Select Course</option>
              <option value="BTech">BTech</option>
              <option value="MTech">MTech</option>
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
            </select>
            {errors.course && <span className="text-red-500 text-sm">{errors.course.message}</span>}
            
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
  );
};

export default EnrollFormModal;