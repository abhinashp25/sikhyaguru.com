import React, { useState } from 'react';
import { Modal, Button, Tabs } from 'antd';

const FeesAndCourses = ({ collegeData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourseType, setSelectedCourseType] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const bachelorPrograms = collegeData.courses.filter(course => 
    course.type && (course.type.toLowerCase().includes('b.') || 
    course.type.toLowerCase().includes('bachelor') ||
    course.name.toLowerCase().includes('bachelor') ||
    course.duration.toLowerCase().includes('4'))
  );
  
  const masterPrograms = collegeData.courses.filter(course => 
    course.type && (course.type.toLowerCase().includes('m.') || 
    course.type.toLowerCase().includes('master') ||
    course.name.toLowerCase().includes('master') ||
    course.duration.toLowerCase().includes('2'))
  );
  
  const otherPrograms = collegeData.courses.filter(course => 
    !bachelorPrograms.includes(course) && 
    !masterPrograms.includes(course)
  );

  const showCoursesByType = (type) => {
    setSelectedCourseType(type);
    const typeMapping = {
      "Bachelor": ["b.", "bachelor", "b.tech", "btech", "be"],
      "Master": ["m.", "master", "m.tech", "mtech", "me"],
      "Other": [] 
    };
    
    const searchTerms = typeMapping[type] || [type.toLowerCase()];
    
    const filtered = collegeData.courses.filter(course => {
      if (!course.type) return false;
      const courseType = course.type.toLowerCase();
      return searchTerms.some(term => courseType.includes(term));
    });
    
    setFilteredCourses(filtered.length > 0 ? filtered : collegeData.courses);
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderProgramTable = (programs, title) => {
    if (programs.length === 0) return null;
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
          {/* <Button 
            type="primary" 
            onClick={() => showCoursesByType(title.split("'")[0].trim())}
            className="bg-blue-600 hover:bg-blue-700"
          >
            View All {title.split("'")[0].trim()} Programs
          </Button> */}
        </div>
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
              {programs.map((course, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{course.name}</td>
                  <td className="p-4">{course.duration} years</td>
                  <td className="p-4 font-semibold text-blue-600">
                    ₹{parseInt(course.fees).toLocaleString('en-IN')}
                  </td>
                  <td className="p-4">{course.seats}</td>
                  <td className="p-4">{course.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const items = [
    {
      key: '1',
      label: 'All Courses',
      children: (
        <div className="overflow-y-auto max-h-96">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} className="mb-6 p-4 border-b">
                <h4 className="text-lg font-semibold">{course.name}</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p><span className="font-medium">Type:</span> {course.type}</p>
                    <p><span className="font-medium">Duration:</span> {course.duration} years</p>
                  </div>
                  <div>
                    <p><span className="font-medium">Annual Fee:</span> ₹{parseInt(course.fees).toLocaleString('en-IN')}</p>
                    <p><span className="font-medium">Seats:</span> {course.seats}</p>
                  </div>
                </div>
                <p className="mt-2"><span className="font-medium">Eligibility:</span> {course.eligibility}</p>
              </div>
            ))
          ) : (
            <div className="text-center p-4 text-gray-500">
              No courses found for this category
            </div>
          )}
        </div>
      ),
    },
    {
      key: '2',
      label: 'Comparison',
      children: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="border p-4 text-left">Program</th>
                <th className="border p-4 text-left">Type</th>
                <th className="border p-4 text-left">Duration</th>
                <th className="border p-4 text-left">Annual Fee</th>
                <th className="border p-4 text-left">Seats</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">{course.name}</td>
                    <td className="p-4">{course.type}</td>
                    <td className="p-4">{course.duration} years</td>
                    <td className="p-4 font-semibold text-blue-600">
                      ₹{parseInt(course.fees).toLocaleString('en-IN')}
                    </td>
                    <td className="p-4">{course.seats}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No courses found for this category
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Programs & Fee Structure</h2>
        <p className="text-gray-600 mb-4">
          Our programs are designed to provide world-class education at
          competitive fees. All fees are in INR per year and include
          tuition, lab access, and basic facilities.
        </p>
      </div>

      {renderProgramTable(bachelorPrograms, "Bachelor's Degree Programs")}
      
      {renderProgramTable(masterPrograms, "Master's Degree Programs")}
      
      {renderProgramTable(otherPrograms, "Other Programs")}
      
      {bachelorPrograms.length === 0 && masterPrograms.length === 0 && otherPrograms.length === 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600">Business Programs</h3>
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
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No business programs available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal
        title={`${selectedCourseType} Programs Details`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
        width={800}
      >
        <Tabs defaultActiveKey="1" items={items} />
      </Modal>
    </div>
  );
}

export default FeesAndCourses;




