import React, { useState, useEffect, useRef, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroVideo3 from "../../assests/heroVideo2.mp4";
import { AutoComplete, Modal, Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openLoginPopup } from "../../store/authSlice";
import { School, Search, Star } from "lucide-react";

const HeroSection = ({ colleges = [] }) => {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const timeoutRef = useRef(null);

  // Memoized search function with debouncing
  const handleSearch = useCallback((value) => {
    setSearchValue(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value.trim() === "") {
      setOptions([]);
      return;
    }

    setIsSearching(true);

    timeoutRef.current = setTimeout(() => {
      const filtered = colleges.filter(college =>
        college.name.toLowerCase().includes(value.toLowerCase())
      );

      setOptions(
        filtered.map(college => ({
          value: college.name,
          label: (
            <div
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2"
              onClick={() => onSelect(college.name, { college })}
            >
              <img
                src={college.logo}
                alt={college.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-200"
              />
              <div>
                <div className="font-medium">{college.name}</div>
                <div className="text-xs text-gray-500">
                  {college.city}, {college.state}
                </div>
              </div>
            </div>
          ),
          college: college
        }))
      );
      setIsSearching(false);
    }, 500); // 500ms debounce delay
  }, [colleges]);

  const fetchCollegeDetails = async (collegeId) => {
    try {
      setIsFetchingDetails(true);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/api/v0/colleges/${collegeId}`);
      const data = await response.json();
      
      if (data.success) {
        return data.data;
      }
      return null;
    } catch (error) {
      console.error('Error fetching college details:', error);
      return null;
    } finally {
      setIsFetchingDetails(false);
    }
  };

  const onSelect = async (value, option) => {
    if (!isAuth) {
      setSelectedCollege(option.college);
      setIsModalOpen(true);
      return;
    }
    
    try {
      setIsFetchingDetails(true);
      const collegeDetails = await fetchCollegeDetails(option.college._id);
      
      if (collegeDetails) {
        navigate(`/college`, {
          state: { 
            collegeData: collegeDetails 
          } 
        });
      } else {
        // Fallback to the basic college data if details fetch fails
        navigate(`/college`, {
          state: { 
            collegeData: option.college 
          } 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback to the basic college data
      navigate(`/college`, {
        state: { 
          collegeData: option.college 
        } 
      });
    } finally {
      setSearchValue(""); // Clear search after selection
      setIsFetchingDetails(false);
    }
  };

  const handleLogin = () => {
    dispatch(openLoginPopup());
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedCollege(null);
  };

  const handleSearchSubmit = () => {
    if (options.length > 0) {
      onSelect(options[0].value, options[0]);
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isAuth]);

  return (
    <section className="relative overflow-hidden h-[90vh] min-h-[600px] flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={heroVideo3}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 w-full px-4 py-16 mx-auto text-center max-w-7xl">
        {/* Typing Animation */}
        <h1 className="font-bold h-24 md:h-fit leading-none text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
          <Typewriter
            words={[
              "Find Your Perfect College Path",
              "Explore Your Ideal Academic Journey",
              "Uncover the Right Career Path Today",
              "Choose Your Dream College",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-200 max-w-3xl mx-auto">
          Compare colleges, explore hostels, check fees, and make informed
          decisions about your academic future.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col items-center w-full mt-8 px-4">
          <div className="relative flex w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <AutoComplete
              className="w-full"
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
              // placeholder="Search for colleges by name, location or courses..."
              value={searchValue}
              onChange={setSearchValue}
              dropdownRender={(menu) => (
                <>
                  {isSearching || isFetchingDetails ? (
                    <div className="p-4 flex justify-center">
                      <Spin size="small" />
                    </div>
                  ) : (
                    menu
                  )}
                  {!isSearching && options.length === 0 && searchValue && (
                    <div className="p-4 text-gray-500 text-center">
                      No colleges found
                    </div>
                  )}
                </>
              )}
            >
              <input
                className="w-full pl-10 pr-4 py-4 text-gray-900 focus:outline-none"
                placeholder="Search for colleges by name..."
              />
            </AutoComplete>
            <button
              type="button"
              onClick={handleSearchSubmit}
              disabled={options.length === 0 || isFetchingDetails}
              className={`px-6 py-4 text-white ${options.length > 0 && !isFetchingDetails
                  ? "bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              {isFetchingDetails ? <Spin size="small" /> : 'Search'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md justify-center">
            <button
              className="px-8 py-3 text-sm md:text-base font-semibold rounded-lg bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 text-white hover:shadow-lg transition-all"
              onClick={() => navigate('/colleges')}
            >
              Browse All Colleges
            </button>
            <button
              type="button"
              className="px-8 py-3 text-sm md:text-base font-semibold border rounded-lg border-gray-300 text-white hover:bg-gray-900/30 hover:border-gray-400 transition-all"
              onClick={() => window.scrollTo({ top: document.getElementById('features'), behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        title={
          <div className="flex items-center gap-2">
            <School className="text-blue-500" />
            <span>Login Required</span>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="login"
            type="primary"
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Login
          </Button>,
        ]}
        centered
        width={450}
      >
        {selectedCollege && (
          <div className="py-4">
            <p className="mb-4">
              You need to login to view detailed information about:
            </p>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <img
                src={selectedCollege.logo}
                alt={selectedCollege.name}
                className="w-16 h-16 rounded-lg object-cover border"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/64";
                }}
              />
              <div>
                <h4 className="font-semibold text-lg">{selectedCollege.name}</h4>
                <p className="text-gray-600">
                  {selectedCollege.city}, {selectedCollege.state}
                </p>
                <div className="flex items-center mt-2 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">
                    {selectedCollege?.rating?.toFixed(1) || 'N/A'}/5.0
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Create an account to view complete details, compare colleges, and save your favorites.
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default HeroSection;