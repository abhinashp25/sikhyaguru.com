import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import demoImage from "../../../assests/demoImage.jpg";

const Facilities = ({ collegeData }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Campus Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegeData.facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={facility.image || demoImage}
                alt={facility.features[0] || "College Facility"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-3">
                  {facility.features[0] || "College Facility"}
                </h3>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    feature && (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Amenities section remains unchanged but commented out */}
      {/* <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">
          Additional Amenities
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "24/7 Security",
            "Campus Shuttle",
            "Banking Services",
            "Post Office",
            "Stationery Store",
            "Laundry Services",
            "Food Court",
            "Prayer Rooms",
          ].map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white p-3 rounded-lg"
            >
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Facilities