import React from "react";

const ShimmerCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md animate-pulse">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Shimmer College Image and Basic Info */}
              <div className="md:w-1/3">
                <div className="bg-gray-300 w-full h-48 rounded-lg mb-4"></div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-yellow-500">
                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                    <div className="ml-1 w-16 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="w-24 h-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Shimmer College Details */}
              <div className="md:w-2/3">
                <div className="w-32 h-6 bg-gray-300 rounded mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                    <div className="w-24 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                    <div className="w-24 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                    <div className="w-24 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                    <div className="w-24 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="w-24 h-4 bg-gray-300 rounded mb-2"></h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <div className="w-5 h-5 bg-green-500 rounded mr-2"></div>
                      <div>
                        <span className="block w-20 h-4 bg-gray-300 rounded"></span>
                        <span className="font-semibold w-24 h-4 bg-gray-300 rounded"></span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-5 h-5 bg-blue-500 rounded mr-2"></div>
                      <div>
                        <span className="block w-20 h-4 bg-gray-300 rounded"></span>
                        <span className="font-semibold w-24 h-4 bg-gray-300 rounded"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <div className="w-28 h-8 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
