import React, { useState, useEffect, useRef } from "react";
import AdmissionGuideBgImg from "../../assests/AdmissionGuideBgImg.webp";
import axios from "axios";
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { useDispatch, useSelector } from "react-redux";
import { openLoginPopup } from "../../store/authSlice";
import { Modal, Button, Spin } from "antd";
import { School, Star } from "lucide-react";

const CompareColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege1, setSelectedCollege1] = useState(null);
  const [selectedCollege2, setSelectedCollege2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const reportRef = useRef(null);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/v0/colleges`);
        setColleges(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  // Handle authentication check when both colleges are selected
  useEffect(() => {
    if (selectedCollege1 && selectedCollege2) {
      if (!isAuth) {
        setIsModalOpen(true);
        setShowComparisonTable(false);
      } else {
        setShowComparisonTable(true);
      }
    }
  }, [selectedCollege1, selectedCollege2, isAuth]);

  const handleCollege1Change = (e) => {
    const collegeId = e.target.value;
    const college = colleges.find(c => c._id === collegeId);
    setSelectedCollege1(college);
  };

  const handleCollege2Change = (e) => {
    const collegeId = e.target.value;
    const college = colleges.find(c => c._id === collegeId);
    setSelectedCollege2(college);
  };

  const handleLogin = () => {
    dispatch(openLoginPopup());
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const generatePDF = async () => {
    if (!isAuth) {
      setIsModalOpen(true);
      return;
    }
    if (!reportRef.current || !selectedCollege1 || !selectedCollege2) return;
    
    setGeneratingPDF(true);
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const dataUrl = await toPng(reportRef.current, {
        quality: 1,
        pixelRatio: 2
      });
      
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(dataUrl, 'PNG', 10, 10, pdfWidth, pdfHeight);
      pdf.save(`College_Comparison_${selectedCollege1.name}_vs_${selectedCollege2.name}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setGeneratingPDF(false);
    }
  };

  if (loading) return <div className="text-center py-10">Loading colleges...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <section 
      style={{ backgroundImage: `url(${AdmissionGuideBgImg})` }}
      className="bg-no-repeat bg-cover text-gray-200 py-10 overflow-hidden"
    >
      <div className="px-6 md:px-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Compare Colleges
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Make informed decisions by comparing colleges side by side
        </p>

        {/* College Selection */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* College 1 */}
          <div data-aos="fade-down-right" className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">College 1</h3>
            <select
              className="w-full bg-black px-4 py-2 rounded-md"
              onChange={handleCollege1Change}
              defaultValue=""
            >
              <option value="" disabled>
                Select College
              </option>
              {colleges.map(college => (
                <option key={college._id} value={college._id}>
                  {college.name}
                </option>
              ))}
            </select>
            {selectedCollege1 && (
              <div className="mt-4">
                <img 
                  src={selectedCollege1.logo} 
                  alt={selectedCollege1.name} 
                  className="h-16 object-contain mb-2"
                />
                <p className="text-sm">{selectedCollege1.city}, {selectedCollege1.state}</p>
              </div>
            )}
          </div>

          {/* VS Icon */}
          <div data-aos="fade-down" className="flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 via-blue-900 to-blue-700 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              VS
            </div>
          </div>

          {/* College 2 */}
          <div data-aos="fade-down-left" className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">College 2</h3>
            <select
              className="w-full bg-black px-4 py-2 rounded-md"
              onChange={handleCollege2Change}
              defaultValue=""
            >
              <option value="" disabled>
                Select College
              </option>
              {colleges.map(college => (
                <option key={college._id} value={college._id}>
                  {college.name}
                </option>
              ))}
            </select>
            {selectedCollege2 && (
              <div className="mt-4">
                <img 
                  src={selectedCollege2.logo} 
                  alt={selectedCollege2.name} 
                  className="h-16 object-contain mb-2"
                />
                <p className="text-sm">{selectedCollege2.city}, {selectedCollege2.state}</p>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table - Only show if both colleges are selected AND user is authenticated */}
        {selectedCollege1 && selectedCollege2 && showComparisonTable && (
          <>
            <div 
              ref={reportRef}
              data-aos="fade-up" 
              className="mt-8 bg-slate-900 p-6 rounded-lg overflow-x-auto"
            >
              <div className="p-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">
                  {selectedCollege1.name} vs {selectedCollege2.name} - Detailed Comparison
                </h2>
                
                {/* College Header */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-center w-1/3">
                    <img src={selectedCollege1.logo} alt={selectedCollege1.name} className="h-20 mx-auto mb-2"/>
                    <h3 className="text-xl font-semibold">{selectedCollege1.name}</h3>
                    <p className="text-sm text-gray-400">{selectedCollege1.city}, {selectedCollege1.state}</p>
                  </div>
                  
                  <div className="w-1/3 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 via-blue-900 to-blue-700 text-white text-xl font-bold flex items-center justify-center rounded-full">
                      VS
                    </div>
                  </div>
                  
                  <div className="text-center w-1/3">
                    <img src={selectedCollege2.logo} alt={selectedCollege2.name} className="h-20 mx-auto mb-2"/>
                    <h3 className="text-xl font-semibold">{selectedCollege2.name}</h3>
                    <p className="text-sm text-gray-400">{selectedCollege2.city}, {selectedCollege2.state}</p>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-center mb-2">Established</h4>
                    <div className="flex justify-between">
                      <span className="text-blue-300">{selectedCollege1.established}</span>
                      <span className="text-purple-300">{selectedCollege2.established}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-center mb-2">Type</h4>
                    <div className="flex justify-between">
                      <span className="text-blue-300">{selectedCollege1.collegeType}</span>
                      <span className="text-purple-300">{selectedCollege2.collegeType}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-center mb-2">Campus Area</h4>
                    <div className="flex justify-between">
                      <span className="text-blue-300">{selectedCollege1.area || 'N/A'} acres</span>
                      <span className="text-purple-300">{selectedCollege2.area || 'N/A'} acres</span>
                    </div>
                  </div>
                </div>
                
                {/* Detailed Comparison Table */}
                <table className="w-full text-left mb-8">
                  <thead>
                    <tr className="text-blue-500 border-b border-gray-600">
                      <th className="py-3 px-4">Parameters</th>
                      <th className="py-3 px-4">{selectedCollege1.name}</th>
                      <th className="py-3 px-4">{selectedCollege2.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">Established</td>
                      <td className="py-3 px-4">{selectedCollege1.established}</td>
                      <td className="py-3 px-4">{selectedCollege2.established}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">College Type</td>
                      <td className="py-3 px-4">{selectedCollege1.collegeType}</td>
                      <td className="py-3 px-4">{selectedCollege2.collegeType}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">Location</td>
                      <td className="py-3 px-4">{selectedCollege1.city}, {selectedCollege1.state}</td>
                      <td className="py-3 px-4">{selectedCollege2.city}, {selectedCollege2.state}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">Highest Placement</td>
                      <td className="py-3 px-4">₹{selectedCollege1.placements?.highest || 'N/A'}</td>
                      <td className="py-3 px-4">₹{selectedCollege2.placements?.highest || 'N/A'}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">Average Placement</td>
                      <td className="py-3 px-4">₹{selectedCollege1.placements?.mid || 'N/A'}</td>
                      <td className="py-3 px-4">₹{selectedCollege2.placements?.mid || 'N/A'}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">Placement Rate</td>
                      <td className="py-3 px-4">{selectedCollege1.placements?.rate || 'N/A'}%</td>
                      <td className="py-3 px-4">{selectedCollege2.placements?.rate || 'N/A'}%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Top Recruiters</td>
                      <td className="py-3 px-4">
                        {selectedCollege1.placements?.topRecruiters?.join(', ') || 'N/A'}
                      </td>
                      <td className="py-3 px-4">
                        {selectedCollege2.placements?.topRecruiters?.join(', ') || 'N/A'}
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                {/* Additional Information */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">About {selectedCollege1.name}</h3>
                  <p className="text-gray-300 mb-6">{selectedCollege1.about || 'No description available'}</p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">About {selectedCollege2.name}</h3>
                  <p className="text-gray-300">{selectedCollege2.about || 'No description available'}</p>
                </div>
                
                <div className="text-center text-sm text-gray-500 mt-8">
                  Report generated on {new Date().toLocaleDateString()} by Sikshya Guru 
                </div>
              </div>
            </div>

            {/* Generate Comparison Button */}
            <div className="flex justify-center mt-6">
              <button 
                onClick={generatePDF}
                disabled={generatingPDF}
                className={`bg-gradient-to-br from-blue-500 via-blue-950 to-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-600 flex items-center ${
                  generatingPDF ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {generatingPDF ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Report...
                  </>
                ) : (
                  'Download Detailed Comparison Report (PDF)'
                )}
              </button>
            </div>
          </>
        )}
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
        <div className="py-4">
          <p className="mb-4">
            You need to login to compare colleges and generate detailed reports.
          </p>
          
          {selectedCollege1 && selectedCollege2 && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={selectedCollege1.logo}
                  alt={selectedCollege1.name}
                  className="w-12 h-12 rounded-lg object-cover border"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/64";
                  }}
                />
                <div>
                  <h4 className="font-semibold">{selectedCollege1.name}</h4>
                  <p className="text-xs text-gray-600">
                    {selectedCollege1.city}, {selectedCollege1.state}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={selectedCollege2.logo}
                  alt={selectedCollege2.name}
                  className="w-12 h-12 rounded-lg object-cover border"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/64";
                  }}
                />
                <div>
                  <h4 className="font-semibold">{selectedCollege2.name}</h4>
                  <p className="text-xs text-gray-600">
                    {selectedCollege2.city}, {selectedCollege2.state}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <p className="mt-4 text-sm text-gray-500">
            Create an account to view complete comparisons, generate reports, and save your favorites.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default CompareColleges;