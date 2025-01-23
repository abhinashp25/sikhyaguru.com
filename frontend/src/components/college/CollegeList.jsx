import React, { useState } from 'react';
import { 
  School, 
  MapPin, 
  Star, 
  TrendingUp, 
  DollarSign,
  Filter,
  X,
  Search
} from 'lucide-react';

function CollegeList() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    rating: '',
    placement: '',
    location: '',
    status: ''
  });

  const colleges = [
    
        {
          name: "California Institute of Technology",
          logo: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=100&h=100&q=80",
          location: "California, USA",
          rating: 4.7,
          highestPlacement: "₹78 LPA",
          medianPlacement: "₹42 LPA",
          status: "Accepting Applications"
        },
        {
          name: "University of Cambridge",
          logo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Cambridge, UK",
          rating: 4.8,
          highestPlacement: "₹88 LPA",
          medianPlacement: "₹47 LPA",
          status: "Closing Soon"
        },
        {
          name: "University of Oxford",
          logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Oxford, UK",
          rating: 4.9,
          highestPlacement: "₹90 LPA",
          medianPlacement: "₹49 LPA",
          status: "Applications Open"
        },
        {
          name: "ETH Zurich",
          logo: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Zurich, Switzerland",
          rating: 4.7,
          highestPlacement: "₹82 LPA",
          medianPlacement: "₹46 LPA",
          status: "Accepting Applications"
        },
        {
          name: "University of Toronto",
          logo: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Toronto, Canada",
          rating: 4.6,
          highestPlacement: "₹65 LPA",
          medianPlacement: "₹40 LPA",
          status: "Closing Soon"
        },
        {
          name: "National University of Singapore",
          logo: "https://images.unsplash.com/photo-1588147056548-d0d8875f7603?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Singapore",
          rating: 4.8,
          highestPlacement: "₹80 LPA",
          medianPlacement: "₹45 LPA",
          status: "Accepting Applications"
        },
        {
          name: "Tsinghua University",
          logo: "https://images.unsplash.com/photo-1577880216143-846bfdc02ae4?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Beijing, China",
          rating: 4.7,
          highestPlacement: "₹70 LPA",
          medianPlacement: "₹43 LPA",
          status: "Applications Open"
        },
        {
          name: "Peking University",
          logo: "https://images.unsplash.com/photo-1551362992-6c6e77dfc85e?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Beijing, China",
          rating: 4.6,
          highestPlacement: "₹68 LPA",
          medianPlacement: "₹42 LPA",
          status: "Accepting Applications"
        },
        {
          name: "University of Melbourne",
          logo: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Melbourne, Australia",
          rating: 4.5,
          highestPlacement: "₹58 LPA",
          medianPlacement: "₹35 LPA",
          status: "Closing Soon"
        },
        {
          name: "Australian National University",
          logo: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c9?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Canberra, Australia",
          rating: 4.6,
          highestPlacement: "₹62 LPA",
          medianPlacement: "₹38 LPA",
          status: "Applications Open"
        },
        {
          name: "University of Tokyo",
          logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Tokyo, Japan",
          rating: 4.7,
          highestPlacement: "₹74 LPA",
          medianPlacement: "₹41 LPA",
          status: "Accepting Applications"
        },
        {
          name: "Kyoto University",
          logo: "https://images.unsplash.com/photo-1575320192710-d41c9aa90d58?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Kyoto, Japan",
          rating: 4.6,
          highestPlacement: "₹65 LPA",
          medianPlacement: "₹39 LPA",
          status: "Closing Soon"
        },
        {
          name: "Seoul National University",
          logo: "https://images.unsplash.com/photo-1593540439298-0b8e1849d229?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Seoul, South Korea",
          rating: 4.7,
          highestPlacement: "₹69 LPA",
          medianPlacement: "₹42 LPA",
          status: "Applications Open"
        },
        {
          name: "University of British Columbia",
          logo: "https://images.unsplash.com/photo-1581092339574-b7e9e73edb88?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Vancouver, Canada",
          rating: 4.5,
          highestPlacement: "₹60 LPA",
          medianPlacement: "₹36 LPA",
          status: "Accepting Applications"
        },
        {
          name: "Ludwig Maximilian University of Munich",
          logo: "https://images.unsplash.com/photo-1528372444002-01cd9b1c9b9a?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Munich, Germany",
          rating: 4.6,
          highestPlacement: "₹50 LPA",
          medianPlacement: "₹30 LPA",
          status: "Closing Soon"
        },
        {
          name: "Technical University of Munich",
          logo: "https://images.unsplash.com/photo-1499933374294-4584851497d5?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Munich, Germany",
          rating: 4.7,
          highestPlacement: "₹55 LPA",
          medianPlacement: "₹32 LPA",
          status: "Applications Open"
        },
        {
          name: "University of Sydney",
          logo: "https://images.unsplash.com/photo-1494608481099-2ec42c828e32?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Sydney, Australia",
          rating: 4.5,
          highestPlacement: "₹57 LPA",
          medianPlacement: "₹33 LPA",
          status: "Accepting Applications"
        },
        {
          name: "Carnegie Mellon University",
          logo: "https://images.unsplash.com/photo-1494972688394-4cc796f9e4c2?auto=format&fit=crop&w=100&h=100&q=80",
          location: "Pennsylvania, USA",
          rating: 4.8,
          highestPlacement: "₹85 LPA",
          medianPlacement: "₹47 LPA",
          status: "Closing Soon"
        },
       
  ];

  const resetFilters = () => {
    setFilters({
      rating: '',
      placement: '',
      location: '',
      status: ''
    });
  };

  const applyFilters = () => {
    // Apply filters logic here
    setIsFilterOpen(false);
  };

  return (
    <div className="  w-full  px-6 md:px-10 py-6">
      {/* Header */}
      <header className=" text-black py-4  md:hidden ">
        <div className="w-full  flex justify-end items-center">
          
        <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center space-x-1 bg-slate-200 px-3 py-1 rounded-md"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>
      </header>

      

      <main className="w-full h-full ">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Panel */}
          <div className={`
            fixed lg:sticky  top-0 lg:top-10 left-0 h-full w-80 bg-white lg:w-64 
            transform transition-transform duration-300 ease-in-out z-50
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            shadow-xl lg:shadow-md rounded-r-lg lg:rounded-lg
          `}>
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-slate-800">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters({...filters, rating: e.target.value})}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                  >
                    <option value="">All Ratings</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.0">4.0+ Stars</option>
                    <option value="3.5">3.5+ Stars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                  >
                    <option value="">All Locations</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Placement Range
                  </label>
                  <select
                    value={filters.placement}
                    onChange={(e) => setFilters({...filters, placement: e.target.value})}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                  >
                    <option value="">All Ranges</option>
                    <option value="50">50+ LPA</option>
                    <option value="30">30+ LPA</option>
                    <option value="20">20+ LPA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                  >
                    <option value="">All Status</option>
                    <option value="open">Accepting Applications</option>
                    <option value="closing">Closing Soon</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="flex gap-2 pt-4">
                  <button
                    onClick={applyFilters}
                    className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
                  >
                    Apply
                  </button>
                  <button
                    onClick={resetFilters}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* College Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colleges.map((college, index) => (
                <div key={index} className="bg-white h-full rounded-lg shadow-md p-6 transition-transform ">
                  <div className="flex items-start gap-4 h-full">
                    <img
                      src={college.logo}
                      alt={`${college.name} logo`}
                      className="w-16 h-16 md:w-28 md:h-full rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-slate-800">{college.name}</h3>
                        {/* <span className={`
                          px-3 py-1 rounded-full text-sm font-medium
                          ${college.status === 'Accepting Applications' ? 'bg-green-100 text-green-800' :
                            college.status === 'Closing Soon' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'}
                        `}>
                          {college.status}
                        </span> */}
                      </div>
                      
                      <div className="mt-2 f space-y-2">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{college.location}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          <span>{college.rating} / 5.0</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                          <span>Highest: {college.highestPlacement}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
                          <span>Median: {college.medianPlacement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CollegeList;