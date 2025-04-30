import React, { useState, useEffect } from "react";
import {
  School,
  MapPin,
  Star,
  TrendingUp,
  DollarSign,
  Filter,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  Globe,
  Calendar,
} from "lucide-react";
import ShimmerCard from "./ShimmerCard";
import NoCollegesFound from "./NoCollegesFound";
import { useNavigate } from "react-router-dom";
import CollegeCard from "./CollegeCard";

function CollegeList() {
  const navigate = useNavigate();
  const [allColleges, setAllColleges] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [collegeData, setCollegeData] = useState({
    colleges: [],
    totalPages: 0,
    currentPage: 1,
    totalItems: 0,
  });
  const itemsPerPage = 10;

  const filters = {
    type: [
      { label: "Govt", value: "Govt" },
      { label: "Private", value: "Private" },
    ],
    location: [
      { label: "Brahmapur", value: "Brahmapur" },
      { label: "Balesore", value: "Balesore" },
      { label: "Cuttack", value: "Cuttack" },
      { label: "Rourkela", value: "Rourkela" },
      { label: "Bhubaneshwar", value: "Bhubaneshwar" },
    ],
    branch: [
      { label: "CSE", value: "CSE" },
      { label: "ECE", value: "ECE" },
      { label: "EEE", value: "EEE" },
      { label: "Civil", value: "Civil" },
      { label: "MECH", value: "MECH" },
    ],
    courses: [
      { label: "B.Tech", value: "B.Tech" },
      { label: "M.Tech", value: "M.Tech" },
      { label: "MBA", value: "MBA" },
      { label: "BCA", value: "BCA" },
      { label: "MCA", value: "MCA" },
      { label: "B.Sc", value: "B.Sc" },
      { label: "B.A", value: "B.A" },
      { label: "B.com", value: "B.com" },
    ],
  };

  useEffect(() => {
    const fetchAllColleges = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URI}/api/v0/colleges`);
        const data = await response.json();

        if (data.success) {
          const transformed = data.data.map(apiCollege => ({
            _id: apiCollege._id,
            name: apiCollege.name || 'College Name',
            logo: apiCollege.logo || 'https://via.placeholder.com/150',
            coverImage: apiCollege.coverImage || 'https://via.placeholder.com/800x400',
            city: apiCollege.city || '', 
            state: apiCollege.state || '', 
            location: [apiCollege.city, apiCollege.state].filter(Boolean).join(', ') || 'Location not specified',
            rating: 4.0 + Math.random(), 
            highestPlacement: `₹${Math.floor(Math.random() * 30) + 50} LPA`, 
            medianPlacement: `₹${Math.floor(Math.random() * 20) + 30} LPA`,
            status: ["Accepting", "Closing Soon", "Closed"][Math.floor(Math.random() * 3)],
            studentCount: apiCollege.students ? `${apiCollege.students}+` : '0',
            placementRate: `${Math.floor(Math.random() * 15) + 85}%`,
            ranking: `Top ${Math.floor(Math.random() * 100) + 1}`,
            applicationDeadline: "Dec 31, 2024",
            established: apiCollege.established || 'N/A',
            area: apiCollege.area ? `${apiCollege.area} acres` : '0',
            courses: apiCollege.courses || [], 
          }));
          setAllColleges(transformed);
        }
      } catch (error) {
        console.error('Error fetching colleges:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllColleges();
  }, []);

  useEffect(() => {
    if (allColleges.length === 0) return;

    let filtered = [...allColleges];

    const groupedFilters = selectedFilters.reduce((acc, filter) => {
      for (const [category, options] of Object.entries(filters)) {
        if (options.some((opt) => opt.value === filter)) {
          if (!acc[category]) acc[category] = [];
          acc[category].push(filter);
        }
      }
      return acc;
    }, {});

    Object.entries(groupedFilters).forEach(([category, values]) => {
      switch (category) {
        case 'location':
          filtered = filtered.filter(college =>
            values.some(value => college.city.toLowerCase() === value.toLowerCase())
          );
          break;
        case 'type':
          break;
        case 'branch':
          break;
        case 'courses':
          break;
        default:
          break;
      }
    });
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = filtered.slice(start, end);

    setCollegeData({
      colleges: paginated,
      totalPages: Math.ceil(filtered.length / itemsPerPage),
      currentPage,
      totalItems: filtered.length
    });
  }, [allColleges, currentPage, selectedFilters]);

  const toggleFilter = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
    setCurrentPage(1);
  };

  const removeFilter = (value) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== value));
  };

  const getFilterLabel = (value) => {
    for (const category of Object.values(filters)) {
      const filter = category.find((f) => f.value === value);
      if (filter) return filter.label;
    }
    return value;
  };

  const handleResetFilters = () => {
    setSelectedFilters([]);
    setCurrentPage(1);
    setIsFilterOpen(false);
  };

  return (
    <div className="w-full bg-slate-50 px-6 md:px-10 py-6">
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center space-x-1 bg-white px-4 py-2 rounded-md shadow-sm"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>

          {selectedFilters.map((filter) => (
            <div
              key={filter}
              className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm"
            >
              <span className="text-sm text-gray-700">
                {getFilterLabel(filter)}
              </span>
              <button
                onClick={() => removeFilter(filter)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <main className="w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          <div
            className={`
            fixed lg:sticky lg:top-10 lg:block top-0 left-0 h-full w-80 bg-white lg:h-[80vh] lg:w-72
            transform transition-transform duration-300 ease-in-out z-50
            ${isFilterOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
              }
            shadow-xl lg:shadow-md rounded-r-lg lg:rounded-lg
          `}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto hideScrollbar p-4">
                <div className="space-y-6">
                  {Object.entries(filters).map(([category, options]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">
                        {category}
                      </h3>
                      <div className="grid grid-cols-2 space-y-2">
                        {options.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center space-x-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedFilters.includes(option.value)}
                              onChange={() => toggleFilter(option.value)}
                              className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                            />
                            <span className="text-sm text-gray-600">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t bg-gray-50">
                <button
                  onClick={handleResetFilters}
                  className="w-full bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            {isLoading ? (
              <ShimmerCard />
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6">
                  {collegeData.colleges.length !== 0 ? (
                    collegeData.colleges.map((college) => (
                      <CollegeCard key={college._id} college={college}  />
                    ))
                  ) : (
                    <NoCollegesFound onBack={handleResetFilters} />
                  )}
                </div>

                {collegeData.totalPages > 1 && (
                  <div className="mt-8 flex justify-center items-center space-x-4">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="flex items-center px-3 py-1 rounded-md bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="ml-1">Previous</span>
                    </button>

                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {collegeData.totalPages}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, collegeData.totalPages)
                        )
                      }
                      disabled={currentPage === collegeData.totalPages}
                      className="flex items-center px-3 py-1 rounded-md bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="mr-1">Next</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CollegeList;