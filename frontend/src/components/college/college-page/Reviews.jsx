import { Star } from 'lucide-react'
import React from 'react'

const Reviews = () => {
  return (
    <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/3 bg-blue-50 p-6 rounded-xl text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    4.2
                  </div>
                  <div className="flex justify-center items-center gap-1 mb-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <Star className="w-6 h-6 text-gray-300" />
                  </div>
                  <p className="text-gray-600">Based on 250 reviews</p>
                </div>
                <div className="md:w-2/3">
                  <div className="space-y-3">
                    {[
                      { label: "5 stars", percentage: 65 },
                      { label: "4 stars", percentage: 20 },
                      { label: "3 stars", percentage: 10 },
                      { label: "2 stars", percentage: 3 },
                      { label: "1 star", percentage: 2 },
                    ].map((rating, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="w-16 text-sm text-gray-600">
                          {rating.label}
                        </span>
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${rating.percentage}%` }}
                          ></div>
                        </div>
                        <span className="w-12 text-sm text-gray-600">
                          {rating.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "John Doe",
                    program: "B.Tech Computer Science",
                    batch: "2023",
                    rating: 5,
                    date: "2 months ago",
                    comment:
                      "Excellent faculty and infrastructure. The placement cell is very active and helpful. I secured a great job through campus placements.",
                    pros: [
                      "Great placements",
                      "Experienced faculty",
                      "Modern facilities",
                    ],
                    cons: ["High fees"],
                  },
                  {
                    name: "Jane Smith",
                    program: "MBA Finance",
                    batch: "2023",
                    rating: 4,
                    date: "3 months ago",
                    comment:
                      "The MBA program is well-structured with good industry exposure. Regular workshops and seminars enhance learning.",
                    pros: [
                      "Industry exposure",
                      "Good curriculum",
                      "Active placement cell",
                    ],
                    cons: ["Mess food could be better"],
                  },
                  {
                    name: "Mike Johnson",
                    program: "B.Tech Mechanical",
                    batch: "2022",
                    rating: 5,
                    date: "4 months ago",
                    comment:
                      "The research opportunities and industry exposure here are outstanding. Labs are well-equipped and faculty is supportive.",
                    pros: [
                      "Research facilities",
                      "Lab equipment",
                      "Faculty support",
                    ],
                    cons: ["Limited parking"],
                  },
                  {
                    name: "Sarah Williams",
                    program: "BBA",
                    batch: "2023",
                    rating: 4,
                    date: "1 month ago",
                    comment:
                      "Great learning environment with excellent opportunities for skill development. Campus life is vibrant.",
                    pros: [
                      "Campus life",
                      "Extra-curriculars",
                      "Infrastructure",
                    ],
                    cons: ["Distance from city"],
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{review.name}</h4>
                        <p className="text-gray-600 text-sm">
                          {review.program} | {review.batch}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{review.comment}</p>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-green-600">
                          Pros:
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {review.pros.map((pro, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-sm"
                            >
                              {pro}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-red-600">
                          Cons:
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {review.cons.map((con, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-sm"
                            >
                              {con}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default Reviews
