import React, { useState } from 'react';
import { Star, MCollegein, GraduationCap, MapPin, Building2, Users, BookOpen, DollarSign, Trophy, Home, Coffee } from 'lucide-react';
import PlacementHighlights from '../home/PlacementHighlights';
import CampusFacilities from './components/CampusFaclilities';

function RatingStars({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-8 h-8 text-blue-600 mb-3" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}

function College() {
  const [activeTab, setActiveTab] = useState('courses');

  const tabs = {
    courses: {
      title: 'Our Courses',
      content: [
        { name: 'Computer Science Engineering', duration: '4 years', seats: 120 },
        { name: 'Mechanical Engineering', duration: '4 years', seats: 60 },
        { name: 'Electrical Engineering', duration: '4 years', seats: 60 },
      ]
    },
    facilities: {
      title: 'Campus Facilities',
      content: [
        'State-of-the-art Computer Labs',
        'Modern Library with Digital Section',
        'Sports Complex',
        'Research Centers',
        'Innovation Hub'
      ]
    },
    fees : {
            title: 'Campus Facilities',
            content: [
              'State-of-the-art Computer Labs',
              'Modern Library with Digital Section',
              'Sports Complex',
              'Research Centers',
              'Innovation Hub'
            ]
         
    },
    placements: {
      title: 'Placement Statistics',
      content: {
        averagePackage: '₹8.5 LPA',
        highestPackage: '₹24 LPA',
        placementRate: '92%',
        companies: '150+'
      }
    }
  };

  return (
    <div className=" ">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative  px-6 md:px-10 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Excellence College of Engineering</h1>
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-5 h-5" />
              <span>Silicon Valley, California</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <RatingStars rating={4} />
              <span>(4.0/5 based on 1000+ reviews)</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=" px-6 md:px-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard  icon={GraduationCap} title="Students" value="10,000+" />
          <StatCard icon={Users} title="Faculty" value="500+" />
          <StatCard icon={Trophy} title="Rankings" value="#1 in Region" />
          <StatCard icon={Building2} title="Campus Area" value="100 Acres" />
        </div>
      </div>

      {/* Main Content */}
      <div className=" px-6 md:px-10 py-16">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'courses' && (
            <div className="grid gap-6">
              {tabs.courses.content.map((course, index) => (
                <div key={index} className="border-b last:border-0 pb-4">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <div className="flex gap-4 text-gray-600">
                    <span>Duration: {course.duration}</span>
                    <span>Available Seats: {course.seats}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {
            activeTab === "fees" && (
                <PlacementHighlights/>
            )
          }

          {activeTab === 'facilities' && <CampusFacilities/>}
          
          {/* {activeTab === 'facilities' && (
            <div className="grid md:grid-cols-2 gap-6">
              {tabs.facilities.content.map((facility, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-blue-600" />
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          )} */}

          {activeTab === 'placements' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">{tabs.placements.content.averagePackage}</h4>
                <p className="text-gray-600">Average Package</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">{tabs.placements.content.highestPackage}</h4>
                <p className="text-gray-600">Highest Package</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">{tabs.placements.content.placementRate}</h4>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">{tabs.placements.content.companies}</h4>
                <p className="text-gray-600">Recruiting Companies</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hostel Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Campus Life & Accommodation</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3"
                alt="Campus Hostel"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Modern Hostel Facilities</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-blue-600" />
                  <span>Separate hostels for boys and girls</span>
                </li>
                <li className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-blue-600" />
                  <span>24/7 cafeteria service</span>
                </li>
                <li className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>Study rooms on each floor</span>
                </li>
                <li className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <span>Affordable accommodation fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default College;