import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className=" px-6 md:px-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Have questions? Let us know by filling out the form below.
        </p>

        {/* Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>

            {/* Number */}
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>

            {/* Course Interested */}
            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Course Interested
              </label>
              <select
                id="course"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
              >
                <option value="" disabled selected>
                  Select a course
                </option>
                <option value="engineering">Engineering</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
                <option value="science">Science</option>
              </select>
            </div>

            {/* City */}
            <div className="md:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>


            <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message or inquiry"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
                ></textarea>
              </div>


            {/* Submit Button */}

            <div className="md:col-span-2 w-full mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 w-full hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </div>
          
          </form>
        </div>
       
      </div>
    </section>
  );
};

export default ContactSection;
