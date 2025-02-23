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
//import CollegeCard from './CollegeCard';

// Types for API responses and filters

const colleges = [
  {
    name: "Massachusetts Institute of Technology",
    logo: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Cambridge, USA",
    rating: 4.9,
    highestPlacement: "₹95 LPA",
    medianPlacement: "₹52 LPA",
    status: "Accepting",
    studentCount: "25,000+",
    placementRate: "98%",
    ranking: "Top 3 Worldwide",
    applicationDeadline: "Dec 15, 2024",
  },
  {
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&h=600&q=80",
    location: "California, USA",
    rating: 4.9,
    highestPlacement: "₹92 LPA",
    medianPlacement: "₹50 LPA",
    status: "Accepting",
    studentCount: "23,000+",
    placementRate: "97%",
    ranking: "Top 5 Worldwide",
    applicationDeadline: "Dec 1, 2024",
  },
  {
    name: "Harvard University",
    logo: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Cambridge, USA",
    rating: 4.9,
    highestPlacement: "₹90 LPA",
    medianPlacement: "₹48 LPA",
    status: "Closing Soon",
    studentCount: "24,000+",
    placementRate: "96%",
    ranking: "Top 5 Worldwide",
    applicationDeadline: "Nov 30, 2024",
  },
  {
    name: "University of Oxford",
    logo: "https://images.unsplash.com/photo-1580716937776-0c86c5ea03f9?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Oxford, UK",
    rating: 4.8,
    highestPlacement: "₹85 LPA",
    medianPlacement: "₹45 LPA",
    status: "Accepting",
    studentCount: "22,000+",
    placementRate: "95%",
    ranking: "Top 10 Worldwide",
    applicationDeadline: "Jan 15, 2025",
  },
  {
    name: "ETH Zurich",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Zurich, Switzerland",
    rating: 4.7,
    highestPlacement: "₹82 LPA",
    medianPlacement: "₹43 LPA",
    status: "Accepting",
    studentCount: "20,000+",
    placementRate: "94%",
    ranking: "Top 15 Worldwide",
    applicationDeadline: "Feb 1, 2025",
  },
  {
    name: "National University of Singapore",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Singapore",
    rating: 4.7,
    highestPlacement: "₹80 LPA",
    medianPlacement: "₹42 LPA",
    status: "Closing Soon",
    studentCount: "21,000+",
    placementRate: "93%",
    ranking: "Top 20 Worldwide",
    applicationDeadline: "Dec 30, 2024",
  },
  {
    name: "University of Toronto",
    logo: "https://images.unsplash.com/photo-1569447891824-5f50dac44d37?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Toronto, Canada",
    rating: 4.6,
    highestPlacement: "₹78 LPA",
    medianPlacement: "₹40 LPA",
    status: "Accepting",
    studentCount: "19,000+",
    placementRate: "92%",
    ranking: "Top 25 Worldwide",
    applicationDeadline: "Jan 30, 2025",
  },
  {
    name: "Technical University of Munich",
    logo: "https://images.unsplash.com/photo-1598018553943-29ace5bf9867?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Munich, Germany",
    rating: 4.6,
    highestPlacement: "₹75 LPA",
    medianPlacement: "₹38 LPA",
    status: "Accepting",
    studentCount: "18,000+",
    placementRate: "91%",
    ranking: "Top 30 Worldwide",
    applicationDeadline: "Mar 1, 2025",
  },
  {
    name: "University of Melbourne",
    logo: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Melbourne, Australia",
    rating: 4.5,
    highestPlacement: "₹72 LPA",
    medianPlacement: "₹36 LPA",
    status: "Closing Soon",
    studentCount: "17,000+",
    placementRate: "90%",
    ranking: "Top 35 Worldwide",
    applicationDeadline: "Feb 15, 2025",
  },
  {
    name: "University of British Columbia",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Vancouver, Canada",
    rating: 4.5,
    highestPlacement: "₹70 LPA",
    medianPlacement: "₹35 LPA",
    status: "Accepting",
    studentCount: "16,000+",
    placementRate: "89%",
    ranking: "Top 40 Worldwide",
    applicationDeadline: "Jan 20, 2025",
  },
  {
    name: "University of Tokyo",
    logo: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Tokyo, Japan",
    rating: 4.7,
    highestPlacement: "₹76 LPA",
    medianPlacement: "₹39 LPA",
    status: "Accepting",
    studentCount: "19,500+",
    placementRate: "93%",
    ranking: "Top 25 Worldwide",
    applicationDeadline: "Feb 28, 2025",
  },
  {
    name: "Seoul National University",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Seoul, South Korea",
    rating: 4.6,
    highestPlacement: "₹74 LPA",
    medianPlacement: "₹38 LPA",
    status: "Closing Soon",
    studentCount: "18,500+",
    placementRate: "92%",
    ranking: "Top 30 Worldwide",
    applicationDeadline: "Jan 25, 2025",
  },
  {
    name: "Delft University of Technology",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Delft, Netherlands",
    rating: 4.5,
    highestPlacement: "₹71 LPA",
    medianPlacement: "₹36 LPA",
    status: "Accepting",
    studentCount: "17,500+",
    placementRate: "90%",
    ranking: "Top 35 Worldwide",
    applicationDeadline: "Mar 15, 2025",
  },
  {
    name: "University of Copenhagen",
    logo: "https://images.unsplash.com/photo-1580716937776-0c86c5ea03f9?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Copenhagen, Denmark",
    rating: 4.5,
    highestPlacement: "₹69 LPA",
    medianPlacement: "₹35 LPA",
    status: "Accepting",
    studentCount: "16,500+",
    placementRate: "89%",
    ranking: "Top 40 Worldwide",
    applicationDeadline: "Feb 20, 2025",
  },
  {
    name: "University of Sydney",
    logo: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Sydney, Australia",
    rating: 4.4,
    highestPlacement: "₹68 LPA",
    medianPlacement: "₹34 LPA",
    status: "Closing Soon",
    studentCount: "15,500+",
    placementRate: "88%",
    ranking: "Top 45 Worldwide",
    applicationDeadline: "Jan 10, 2025",
  },
];

function CollegeList() {
  const navigate = useNavigate();
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
    // rating: [
    //   { label: "4.5+ Stars", value: "4.5" },
    //   { label: "4.0+ Stars", value: "4.0" },
    //   { label: "3.5+ Stars", value: "3.5" },
    // ],
    type: [
      { label: "Govt", value: "Govt" },
      { label: "Private", value: "Private" },
    ],
    location: [
      { label: "Brahmapur", value: "Brahmapur" },
      { label: "Balesore", value: "Balesore" },
      { label: "Cuttack", value: "Cuttack" },
      { label: "Rourkela", value: "Rourkela" },
      { label: "Bhubaneswar", value: "Bhubaneswar" },
    ],
    branch: [
      { label: "CSE", value: "CSE" },
      { label: "ECE", value: "ECE" },
      { label: "EEE", value: "EEE" },
      { label: "Civil", value: "Civil" },
      { label: "MECH", value: "MECH" },
    ],
    // placement: [
    //   { label: "50+ LPA", value: "50" },
    //   { label: "30+ LPA", value: "30" },
    //   { label: "20+ LPA", value: "20" },
    // ],
   
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
    // status: [
    //   { label: "Accepting", value: "accepting" },
    //   { label: "Closing Soon", value: "closing" },
    //   { label: "Closed", value: "closed" },
    // ],
  };

  // Mock API call function - Replace with actual API endpoint
  const fetchColleges = async (params) => {
    console.log("PARAMS", params);
    console.log("PARAMS", "" + new URLSearchParams(params));

    try {
      setIsLoading(true);
      // In a real application, this would be an API call
      // const response = await fetch('/api/colleges?' + new URLSearchParams(params));
      // const data = await response.json();

      // Mock API response using the existing colleges array
      const filteredColleges = colleges.filter((college) => {
        if (params.rating?.length) {
          const minRating = Math.min(
            ...params.rating.map((r) => parseFloat(r))
          );
          if (college.rating < minRating) return false;
        }
        if (params.location?.length) {
          if (
            !params.location.some((loc) =>
              college.location.toLowerCase().includes(loc)
            )
          )
            return false;
        }
        if (params.status?.length) {
          if (
            !params.status.includes(
              college.status.toLowerCase().replace(/\s+/g, "")
            )
          )
            return false;
        }
        if (params.placement?.length) {
          const minPlacement = Math.min(
            ...params.placement.map((p) => parseInt(p))
          );
          const collegePlacement = parseInt(
            college.medianPlacement.split(" ")[0].replace("₹", "")
          );
          if (collegePlacement < minPlacement) return false;
        }
        return true;
      });

      const start = (params.page - 1) * params.limit;
      const end = start + params.limit;
      const paginatedColleges = filteredColleges.slice(start, end);

      setCollegeData({
        colleges: paginatedColleges,
        totalPages: Math.ceil(filteredColleges.length / params.limit),
        currentPage: params.page,
        totalItems: filteredColleges.length,
      });
    } catch (error) {
      console.error("Error fetching colleges:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }
  };

  useEffect(() => {
    const params = {
      page: currentPage,
      limit: itemsPerPage,
    };

    // Group filters by category
    const groupedFilters = selectedFilters.reduce((acc, filter) => {
      for (const [category, options] of Object.entries(filters)) {
        if (options.some((opt) => opt.value === filter)) {
          if (!acc[category]) acc[category] = [];
          acc[category].push(filter);
        }
      }
      return acc;
    }, {});

    // Add grouped filters to params
    Object.entries(groupedFilters).forEach(([category, values]) => {
      params[category] = values;
    });

    fetchColleges(params);
  }, [currentPage, selectedFilters]);

  const toggleFilter = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
    setCurrentPage(1); // Reset to first page when changing filters
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
    <div className="w-full bg-slate-50 px-6 md:px-10 py-6 ">
      {/* Header with Selected Filters */}
      <div className="mb-6  ">
        <div className="flex  flex-wrap items-center gap-3 mb-4">
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
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* Filter Panel */}
          <div
            className={`
            fixed lg:sticky  lg:top-10  lg:block top-0 left-0 h-full w-80 bg-white lg:h-[80vh] lg:w-72
            transform transition-transform duration-300 ease-in-out z-50
            ${
              isFilterOpen
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

              <div className="flex-1 overflow-y-auto  hideScrollbar  p-4">
                <div className="space-y-6">
                  {Object.entries(filters).map(([category, options]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">
                        {category}
                      </h3>
                      <div className="grid grid-cols-2  space-y-2">
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
                  className="w-full bg-gradient-to-br from-blue-700   via-blue-950 to-blue-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>

          {/* College Cards */}
          <div className="flex-1">
            {isLoading ? (
              <ShimmerCard />
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6">
                  {collegeData.colleges.length != 0 ? (
                    collegeData.colleges.map((college, index) => (
                     <CollegeCard key={index} college={college} />
                    ))
                  ) : (
                    <NoCollegesFound />
                  )}
                </div>

                {/* Pagination */}
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
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CollegeList;
