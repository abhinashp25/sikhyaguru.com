import React from "react";

const CompareColleges = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-blue-950 to-black text-white py-10 overflow-hidden">
      <div className="px-6 md:px-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Compare Colleges
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Make informed decisions by comparing colleges side by side
        </p>

        {/* College Selection */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* College 1 */}
          <div data-aos="fade-down-right" className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">College 1</h3>
            <select
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select College
              </option>
              <option value="College A">College A</option>
              <option value="College B">College B</option>
            </select>
          </div>

          {/* VS Icon */}
          <div data-aos="fade-down" className="flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-black  via-blue-950 to-purple-700 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              VS
            </div>
          </div>

          {/* College 2 */}
          <div data-aos="fade-down-left" className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">College 2</h3>
            <select
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select College
              </option>
              <option value="College X">College X</option>
              <option value="College Y">College Y</option>
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-purple-500 border-b border-gray-600">
                <th className="py-3 px-4">Parameters</th>
                <th className="py-3 px-4">College 1</th>
                <th className="py-3 px-4">College 2</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4">NIRF Ranking</td>
                <td className="py-3 px-4">15</td>
                <td className="py-3 px-4">8</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4">Avg. Placement</td>
                <td className="py-3 px-4">8.5 LPA</td>
                <td className="py-3 px-4">12 LPA</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4">Infrastructure</td>
                <td className="py-3 px-4">★★★★★</td>
                <td className="py-3 px-4">★★★★★</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Faculty Rating</td>
                <td className="py-3 px-4">4.2/5</td>
                <td className="py-3 px-4">4.5/5</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Generate Comparison Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-gradient-to-br from-black  via-blue-950 to-purple-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-600">
            Generate Detailed Comparison
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompareColleges;
