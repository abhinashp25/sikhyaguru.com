import React from 'react'

const FeesAndCourses = () => {
  return (
    <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  Programs & Fee Structure
                </h2>
                <p className="text-gray-600 mb-4">
                  Our programs are designed to provide world-class education at
                  competitive fees. All fees are in USD per year and include
                  tuition, lab access, and basic facilities.
                </p>
              </div>

              {/* Engineering Programs */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  Engineering Programs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border p-4 text-left">Program</th>
                        <th className="border p-4 text-left">Duration</th>
                        <th className="border p-4 text-left">Annual Fee</th>
                        <th className="border p-4 text-left">Total Seats</th>
                        <th className="border p-4 text-left">Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          program: "Computer Science & Engineering",
                          duration: "4 years",
                          fee: "$12,000",
                          seats: "120",
                          eligibility: "10+2 with 85% in PCM",
                        },
                        {
                          program: "Mechanical Engineering",
                          duration: "4 years",
                          fee: "$11,000",
                          seats: "60",
                          eligibility: "10+2 with 80% in PCM",
                        },
                        {
                          program: "Electrical Engineering",
                          duration: "4 years",
                          fee: "$11,000",
                          seats: "60",
                          eligibility: "10+2 with 80% in PCM",
                        },
                        {
                          program: "Civil Engineering",
                          duration: "4 years",
                          fee: "$10,500",
                          seats: "60",
                          eligibility: "10+2 with 80% in PCM",
                        },
                      ].map((course, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-4">{course.program}</td>
                          <td className="p-4">{course.duration}</td>
                          <td className="p-4 font-semibold text-blue-600">
                            {course.fee}
                          </td>
                          <td className="p-4">{course.seats}</td>
                          <td className="p-4">{course.eligibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Business Programs */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  Business Programs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border p-4 text-left">Program</th>
                        <th className="border p-4 text-left">Duration</th>
                        <th className="border p-4 text-left">Annual Fee</th>
                        <th className="border p-4 text-left">Total Seats</th>
                        <th className="border p-4 text-left">Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          program: "MBA (General)",
                          duration: "2 years",
                          fee: "$15,000",
                          seats: "120",
                          eligibility: "Bachelor's with 60%",
                        },
                        {
                          program: "MBA (Finance)",
                          duration: "2 years",
                          fee: "$15,500",
                          seats: "60",
                          eligibility: "Bachelor's with 60%",
                        },
                        {
                          program: "MBA (Marketing)",
                          duration: "2 years",
                          fee: "$15,500",
                          seats: "60",
                          eligibility: "Bachelor's with 60%",
                        },
                        {
                          program: "BBA",
                          duration: "3 years",
                          fee: "$8,000",
                          seats: "180",
                          eligibility: "10+2 with 60%",
                        },
                      ].map((course, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-4">{course.program}</td>
                          <td className="p-4">{course.duration}</td>
                          <td className="p-4 font-semibold text-blue-600">
                            {course.fee}
                          </td>
                          <td className="p-4">{course.seats}</td>
                          <td className="p-4">{course.eligibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Additional Fees */}
              {/* <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Additional Fees & Charges
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { label: "Application Fee", value: "$50 (one-time)" },
                    { label: "Registration Fee", value: "$200 (one-time)" },
                    { label: "Security Deposit", value: "$500 (refundable)" },
                    { label: "Lab Charges", value: "$300 per semester" },
                    { label: "Health Insurance", value: "$400 per year" },
                    { label: "Student Activity Fee", value: "$200 per year" },
                  ].map((fee, index) => (
                    <div
                      key={index}
                      className="flex justify-between p-3 bg-white rounded-lg"
                    >
                      <span className="text-gray-600">{fee.label}</span>
                      <span className="font-semibold">{fee.value}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
  )
}

export default FeesAndCourses
