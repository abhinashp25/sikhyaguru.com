import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const Hostels = () => {
  return (
    <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Student Accommodation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Boys Hostel",
                      image:
                        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
                      capacity: "1000+ Students",
                      roomTypes: ["Single", "Double", "Triple"],
                      features: [
                        "24/7 Security",
                        "Wi-Fi Coverage",
                        "Gym Access",
                        "Study Rooms",
                        "Laundry Service",
                        "Recreation Area",
                      ],
                    },
                    {
                      name: "Girls Hostel",
                      image:
                        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
                      capacity: "800+ Students",
                      roomTypes: ["Single", "Double"],
                      features: [
                        "24/7 Security",
                        "Common Room",
                        "Reading Room",
                        "Indoor Games",
                        "Dining Hall",
                        "Medical Facility",
                      ],
                    },
                    {
                      name: "International Block",
                      image:
                        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
                      capacity: "200+ Students",
                      roomTypes: ["Studio", "Single AC"],
                      features: [
                        "AC Rooms",
                        "Kitchenette",
                        "Private Bath",
                        "Study Area",
                        "Mini Gym",
                        "Recreation Room",
                      ],
                    },
                  ].map((hostel, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={hostel.image}
                        alt={hostel.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {hostel.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{hostel.capacity}</p>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Room Types:</h4>
                          <div className="flex gap-2">
                            {hostel.roomTypes.map((type, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h4 className="font-medium mb-2">Facilities:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {hostel.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Hostel Fees (Per Year)
                  </h3>
                  <div className="space-y-3">
                    {[
                      { type: "Single Room (AC)", fee: "$3,000" },
                      { type: "Single Room (Non-AC)", fee: "$2,000" },
                      { type: "Double Sharing (AC)", fee: "$2,500" },
                      { type: "Double Sharing (Non-AC)", fee: "$1,500" },
                      { type: "Triple Sharing", fee: "$1,200" },
                    ].map((room, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white p-3 rounded-lg"
                      >
                        <span>{room.type}</span>
                        <span className="font-semibold text-blue-600">
                          {room.fee}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Mess Facilities
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Our mess facilities provide nutritious and varied meals
                      with multiple cuisine options.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Vegetarian & Non-Vegetarian Options",
                        "Special Diet Accommodation",
                        "Hygiene Certified Kitchen",
                        "24/7 Cafeteria",
                        "Monthly Menu Rotation",
                        "Festival Special Meals",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <span className="font-semibold">Mess Fee:</span>
                      <span className="ml-2 text-blue-600">
                        $1,200 per year
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
  )
}

export default Hostels
