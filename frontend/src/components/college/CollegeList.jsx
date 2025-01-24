// // import React, { useState } from 'react';
// // import { 
// //   School, 
// //   MapPin, 
// //   Star, 
// //   TrendingUp, 
// //   DollarSign,
// //   Filter,
// //   X,
// //   Search
// // } from 'lucide-react';

// // function CollegeList() {
// //   const [isFilterOpen, setIsFilterOpen] = useState(false);
// //   const [filters, setFilters] = useState({
// //     rating: '',
// //     placement: '',
// //     location: '',
// //     status: ''
// //   });

// //   const colleges = [
    
// //         {
// //           name: "California Institute of Technology",
// //           logo: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "California, USA",
// //           rating: 4.7,
// //           highestPlacement: "₹78 LPA",
// //           medianPlacement: "₹42 LPA",
// //           status: "Accepting Applications"
// //         },
// //         {
// //           name: "University of Cambridge",
// //           logo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Cambridge, UK",
// //           rating: 4.8,
// //           highestPlacement: "₹88 LPA",
// //           medianPlacement: "₹47 LPA",
// //           status: "Closing Soon"
// //         },
// //         {
// //           name: "University of Oxford",
// //           logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Oxford, UK",
// //           rating: 4.9,
// //           highestPlacement: "₹90 LPA",
// //           medianPlacement: "₹49 LPA",
// //           status: "Applications Open"
// //         },
// //         {
// //           name: "ETH Zurich",
// //           logo: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Zurich, Switzerland",
// //           rating: 4.7,
// //           highestPlacement: "₹82 LPA",
// //           medianPlacement: "₹46 LPA",
// //           status: "Accepting Applications"
// //         },
// //         {
// //           name: "University of Toronto",
// //           logo: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Toronto, Canada",
// //           rating: 4.6,
// //           highestPlacement: "₹65 LPA",
// //           medianPlacement: "₹40 LPA",
// //           status: "Closing Soon"
// //         },
// //         {
// //           name: "National University of Singapore",
// //           logo: "https://images.unsplash.com/photo-1588147056548-d0d8875f7603?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Singapore",
// //           rating: 4.8,
// //           highestPlacement: "₹80 LPA",
// //           medianPlacement: "₹45 LPA",
// //           status: "Accepting Applications"
// //         },
// //         {
// //           name: "Tsinghua University",
// //           logo: "https://images.unsplash.com/photo-1577880216143-846bfdc02ae4?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Beijing, China",
// //           rating: 4.7,
// //           highestPlacement: "₹70 LPA",
// //           medianPlacement: "₹43 LPA",
// //           status: "Applications Open"
// //         },
// //         {
// //           name: "Peking University",
// //           logo: "https://images.unsplash.com/photo-1551362992-6c6e77dfc85e?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Beijing, China",
// //           rating: 4.6,
// //           highestPlacement: "₹68 LPA",
// //           medianPlacement: "₹42 LPA",
// //           status: "Accepting Applications"
// //         },
// //         {
// //           name: "University of Melbourne",
// //           logo: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Melbourne, Australia",
// //           rating: 4.5,
// //           highestPlacement: "₹58 LPA",
// //           medianPlacement: "₹35 LPA",
// //           status: "Closing Soon"
// //         },
// //         {
// //           name: "Australian National University",
// //           logo: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c9?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Canberra, Australia",
// //           rating: 4.6,
// //           highestPlacement: "₹62 LPA",
// //           medianPlacement: "₹38 LPA",
// //           status: "Applications Open"
// //         },
// //         {
// //           name: "University of Tokyo",
// //           logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Tokyo, Japan",
// //           rating: 4.7,
// //           highestPlacement: "₹74 LPA",
// //           medianPlacement: "₹41 LPA",
// //           status: "Accepting Applications"
// //         },
// //         {
// //           name: "Kyoto University",
// //           logo: "https://images.unsplash.com/photo-1575320192710-d41c9aa90d58?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Kyoto, Japan",
// //           rating: 4.6,
// //           highestPlacement: "₹65 LPA",
// //           medianPlacement: "₹39 LPA",
// //           status: "Closing Soon"
// //         },
// //         {
// //           name: "Seoul National University",
// //           logo: "https://images.unsplash.com/photo-1593540439298-0b8e1849d229?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Seoul, South Korea",
// //           rating: 4.7,
// //           highestPlacement: "₹69 LPA",
// //           medianPlacement: "₹42 LPA",
// //           status: "Applications Open"
// //         },
// //         {
// //           name: "University of British Columbia",
// //           logo: "https://images.unsplash.com/photo-1581092339574-b7e9e73edb88?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Vancouver, Canada",
// //           rating: 4.5,
// //           highestPlacement: "₹60 LPA",
// //           medianPlacement: "₹36 LPA",
// //           status: "Accepting Applications"
// //         },
// //         {
// //           name: "Ludwig Maximilian University of Munich",
// //           logo: "https://images.unsplash.com/photo-1528372444002-01cd9b1c9b9a?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Munich, Germany",
// //           rating: 4.6,
// //           highestPlacement: "₹50 LPA",
// //           medianPlacement: "₹30 LPA",
// //           status: "Closing Soon"
// //         },
// //         {
// //           name: "Technical University of Munich",
// //           logo: "https://images.unsplash.com/photo-1499933374294-4584851497d5?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Munich, Germany",
// //           rating: 4.7,
// //           highestPlacement: "₹55 LPA",
// //           medianPlacement: "₹32 LPA",
// //           status: "Applications Open"
// //         },
// //         {
// //           name: "University of Sydney",
// //           logo: "https://images.unsplash.com/photo-1494608481099-2ec42c828e32?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Sydney, Australia",
// //           rating: 4.5,
// //           highestPlacement: "₹57 LPA",
// //           medianPlacement: "₹33 LPA",
// //           status: "Accepting Applications"
// //         },
// //         {
// //           name: "Carnegie Mellon University",
// //           logo: "https://images.unsplash.com/photo-1494972688394-4cc796f9e4c2?auto=format&fit=crop&w=100&h=100&q=80",
// //           location: "Pennsylvania, USA",
// //           rating: 4.8,
// //           highestPlacement: "₹85 LPA",
// //           medianPlacement: "₹47 LPA",
// //           status: "Closing Soon"
// //         },
       
// //   ];

// //   const resetFilters = () => {
// //     setFilters({
// //       rating: '',
// //       placement: '',
// //       location: '',
// //       status: ''
// //     });
// //   };

// //   const applyFilters = () => {
// //     // Apply filters logic here
// //     setIsFilterOpen(false);
// //   };

// //   return (
// //     <div className="  w-full  px-6 md:px-10 py-6">
// //       {/* Header */}
// //       <header className=" text-black py-4  md:hidden ">
// //         <div className="w-full  flex justify-end items-center">
          
// //         <button
// //             onClick={() => setIsFilterOpen(true)}
// //             className="lg:hidden flex items-center space-x-1 bg-slate-200 px-3 py-1 rounded-md"
// //           >
// //             <Filter className="h-4 w-4" />
// //             <span>Filters</span>
// //           </button>
// //         </div>
// //       </header>

      

// //       <main className="w-full h-full ">
// //         <div className="flex flex-col lg:flex-row gap-6">
// //           {/* Filter Panel */}
// //           <div className={`
// //             fixed lg:sticky  top-0 lg:top-10 left-0 h-full w-80 bg-white lg:w-64 
// //             transform transition-transform duration-300 ease-in-out z-50
// //             ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
// //             shadow-xl lg:shadow-md rounded-r-lg lg:rounded-lg
// //           `}>
// //             <div className="p-4">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-lg font-semibold text-slate-800">Filters</h2>
// //                 <button
// //                   onClick={() => setIsFilterOpen(false)}
// //                   className="lg:hidden text-gray-500 hover:text-gray-700"
// //                 >
// //                   <X className="h-5 w-5" />
// //                 </button>
// //               </div>

// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Rating
// //                   </label>
// //                   <select
// //                     value={filters.rating}
// //                     onChange={(e) => setFilters({...filters, rating: e.target.value})}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
// //                   >
// //                     <option value="">All Ratings</option>
// //                     <option value="4.5">4.5+ Stars</option>
// //                     <option value="4.0">4.0+ Stars</option>
// //                     <option value="3.5">3.5+ Stars</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Location
// //                   </label>
// //                   <select
// //                     value={filters.location}
// //                     onChange={(e) => setFilters({...filters, location: e.target.value})}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
// //                   >
// //                     <option value="">All Locations</option>
// //                     <option value="usa">USA</option>
// //                     <option value="uk">UK</option>
// //                     <option value="canada">Canada</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Placement Range
// //                   </label>
// //                   <select
// //                     value={filters.placement}
// //                     onChange={(e) => setFilters({...filters, placement: e.target.value})}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
// //                   >
// //                     <option value="">All Ranges</option>
// //                     <option value="50">50+ LPA</option>
// //                     <option value="30">30+ LPA</option>
// //                     <option value="20">20+ LPA</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Status
// //                   </label>
// //                   <select
// //                     value={filters.status}
// //                     onChange={(e) => setFilters({...filters, status: e.target.value})}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
// //                   >
// //                     <option value="">All Status</option>
// //                     <option value="open">Accepting Applications</option>
// //                     <option value="closing">Closing Soon</option>
// //                     <option value="closed">Closed</option>
// //                   </select>
// //                 </div>

// //                 <div className="flex gap-2 pt-4">
// //                   <button
// //                     onClick={applyFilters}
// //                     className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
// //                   >
// //                     Apply
// //                   </button>
// //                   <button
// //                     onClick={resetFilters}
// //                     className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
// //                   >
// //                     Reset
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* College Cards */}
// //           <div className="flex-1">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {colleges.map((college, index) => (
// //                 <div key={index} className="bg-white h-full rounded-lg shadow-md p-6 transition-transform ">
// //                   <div className="flex items-start gap-4 h-full">
// //                     <img
// //                       src={college.logo}
// //                       alt={`${college.name} logo`}
// //                       className="w-16 h-16 md:w-28 md:h-full rounded-md object-cover"
// //                     />
// //                     <div className="flex-1">
// //                       <div className="flex justify-between items-start">
// //                         <h3 className="text-lg font-semibold text-slate-800">{college.name}</h3>
// //                         {/* <span className={`
// //                           px-3 py-1 rounded-full text-sm font-medium
// //                           ${college.status === 'Accepting Applications' ? 'bg-green-100 text-green-800' :
// //                             college.status === 'Closing Soon' ? 'bg-yellow-100 text-yellow-800' :
// //                             'bg-red-100 text-red-800'}
// //                         `}>
// //                           {college.status}
// //                         </span> */}
// //                       </div>
                      
// //                       <div className="mt-2 f space-y-2">
// //                         <div className="flex items-center text-gray-600">
// //                           <MapPin className="h-4 w-4 mr-2" />
// //                           <span>{college.location}</span>
// //                         </div>
                        
// //                         <div className="flex items-center text-gray-600">
// //                           <Star className="h-4 w-4 mr-2 text-yellow-500" />
// //                           <span>{college.rating} / 5.0</span>
// //                         </div>

// //                         <div className="flex items-center text-gray-600">
// //                           <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
// //                           <span>Highest: {college.highestPlacement}</span>
// //                         </div>

// //                         <div className="flex items-center text-gray-600">
// //                           <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
// //                           <span>Median: {college.medianPlacement}</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // export default CollegeList;


// import React, { useState } from 'react';
// import { 
//   School, 
//   MapPin, 
//   Star, 
//   TrendingUp, 
//   DollarSign,
//   Filter,
//   X,
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   GraduationCap,
//   Users,
//   Globe,
//   Calendar
// } from 'lucide-react';

// function CollegeList() {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const filters = {
//     rating: [
//       { label: '4.5+ Stars', value: '4.5' },
//       { label: '4.0+ Stars', value: '4.0' },
//       { label: '3.5+ Stars', value: '3.5' }
//     ],
//     location: [
//       { label: 'USA', value: 'usa' },
//       { label: 'UK', value: 'uk' },
//       { label: 'Canada', value: 'canada' },
//       { label: 'Australia', value: 'australia' },
//       { label: 'Germany', value: 'germany' }
//     ],
//     placement: [
//       { label: '50+ LPA', value: '50' },
//       { label: '30+ LPA', value: '30' },
//       { label: '20+ LPA', value: '20' }
//     ],
//     status: [
//       { label: 'Accepting Applications', value: 'accepting' },
//       { label: 'Closing Soon', value: 'closing' },
//       { label: 'Closed', value: 'closed' }
//     ]
//   };

  // const colleges = [
  //   {
  //     name: "Massachusetts Institute of Technology",
  //     logo: "https://images.unsplash.com/photo-1580716937776-0c86c5ea03f9?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Cambridge, USA",
  //     rating: 4.9,
  //     highestPlacement: "₹95 LPA",
  //     medianPlacement: "₹52 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "25,000+",
  //     placementRate: "98%",
  //     ranking: "Top 3 Worldwide",
  //     applicationDeadline: "Dec 15, 2024"
  //   },
  //   {
  //     name: "Stanford University",
  //     logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "California, USA",
  //     rating: 4.9,
  //     highestPlacement: "₹92 LPA",
  //     medianPlacement: "₹50 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "23,000+",
  //     placementRate: "97%",
  //     ranking: "Top 5 Worldwide",
  //     applicationDeadline: "Dec 1, 2024"
  //   },
  //   {
  //     name: "Harvard University",
  //     logo: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Cambridge, USA",
  //     rating: 4.9,
  //     highestPlacement: "₹90 LPA",
  //     medianPlacement: "₹48 LPA",
  //     status: "Closing Soon",
  //     studentCount: "24,000+",
  //     placementRate: "96%",
  //     ranking: "Top 5 Worldwide",
  //     applicationDeadline: "Nov 30, 2024"
  //   },
  //   {
  //     name: "University of Oxford",
  //     logo: "https://images.unsplash.com/photo-1580716937776-0c86c5ea03f9?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Oxford, UK",
  //     rating: 4.8,
  //     highestPlacement: "₹85 LPA",
  //     medianPlacement: "₹45 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "22,000+",
  //     placementRate: "95%",
  //     ranking: "Top 10 Worldwide",
  //     applicationDeadline: "Jan 15, 2025"
  //   },
  //   {
  //     name: "ETH Zurich",
  //     logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Zurich, Switzerland",
  //     rating: 4.7,
  //     highestPlacement: "₹82 LPA",
  //     medianPlacement: "₹43 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "20,000+",
  //     placementRate: "94%",
  //     ranking: "Top 15 Worldwide",
  //     applicationDeadline: "Feb 1, 2025"
  //   },
  //   {
  //     name: "National University of Singapore",
  //     logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Singapore",
  //     rating: 4.7,
  //     highestPlacement: "₹80 LPA",
  //     medianPlacement: "₹42 LPA",
  //     status: "Closing Soon",
  //     studentCount: "21,000+",
  //     placementRate: "93%",
  //     ranking: "Top 20 Worldwide",
  //     applicationDeadline: "Dec 30, 2024"
  //   },
  //   {
  //     name: "University of Toronto",
  //     logo: "https://images.unsplash.com/photo-1569447891824-5f50dac44d37?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Toronto, Canada",
  //     rating: 4.6,
  //     highestPlacement: "₹78 LPA",
  //     medianPlacement: "₹40 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "19,000+",
  //     placementRate: "92%",
  //     ranking: "Top 25 Worldwide",
  //     applicationDeadline: "Jan 30, 2025"
  //   },
  //   {
  //     name: "Technical University of Munich",
  //     logo: "https://images.unsplash.com/photo-1598018553943-29ace5bf9867?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Munich, Germany",
  //     rating: 4.6,
  //     highestPlacement: "₹75 LPA",
  //     medianPlacement: "₹38 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "18,000+",
  //     placementRate: "91%",
  //     ranking: "Top 30 Worldwide",
  //     applicationDeadline: "Mar 1, 2025"
  //   },
  //   {
  //     name: "University of Melbourne",
  //     logo: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Melbourne, Australia",
  //     rating: 4.5,
  //     highestPlacement: "₹72 LPA",
  //     medianPlacement: "₹36 LPA",
  //     status: "Closing Soon",
  //     studentCount: "17,000+",
  //     placementRate: "90%",
  //     ranking: "Top 35 Worldwide",
  //     applicationDeadline: "Feb 15, 2025"
  //   },
  //   {
  //     name: "University of British Columbia",
  //     logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Vancouver, Canada",
  //     rating: 4.5,
  //     highestPlacement: "₹70 LPA",
  //     medianPlacement: "₹35 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "16,000+",
  //     placementRate: "89%",
  //     ranking: "Top 40 Worldwide",
  //     applicationDeadline: "Jan 20, 2025"
  //   },
  //   {
  //     name: "University of Tokyo",
  //     logo: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Tokyo, Japan",
  //     rating: 4.7,
  //     highestPlacement: "₹76 LPA",
  //     medianPlacement: "₹39 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "19,500+",
  //     placementRate: "93%",
  //     ranking: "Top 25 Worldwide",
  //     applicationDeadline: "Feb 28, 2025"
  //   },
  //   {
  //     name: "Seoul National University",
  //     logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Seoul, South Korea",
  //     rating: 4.6,
  //     highestPlacement: "₹74 LPA",
  //     medianPlacement: "₹38 LPA",
  //     status: "Closing Soon",
  //     studentCount: "18,500+",
  //     placementRate: "92%",
  //     ranking: "Top 30 Worldwide",
  //     applicationDeadline: "Jan 25, 2025"
  //   },
  //   {
  //     name: "Delft University of Technology",
  //     logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Delft, Netherlands",
  //     rating: 4.5,
  //     highestPlacement: "₹71 LPA",
  //     medianPlacement: "₹36 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "17,500+",
  //     placementRate: "90%",
  //     ranking: "Top 35 Worldwide",
  //     applicationDeadline: "Mar 15, 2025"
  //   },
  //   {
  //     name: "University of Copenhagen",
  //     logo: "https://images.unsplash.com/photo-1580716937776-0c86c5ea03f9?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Copenhagen, Denmark",
  //     rating: 4.5,
  //     highestPlacement: "₹69 LPA",
  //     medianPlacement: "₹35 LPA",
  //     status: "Accepting Applications",
  //     studentCount: "16,500+",
  //     placementRate: "89%",
  //     ranking: "Top 40 Worldwide",
  //     applicationDeadline: "Feb 20, 2025"
  //   },
  //   {
  //     name: "University of Sydney",
  //     logo: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?auto=format&fit=crop&w=800&h=600&q=80",
  //     location: "Sydney, Australia",
  //     rating: 4.4,
  //     highestPlacement: "₹68 LPA",
  //     medianPlacement: "₹34 LPA",
  //     status: "Closing Soon",
  //     studentCount: "15,500+",
  //     placementRate: "88%",
  //     ranking: "Top 45 Worldwide",
  //     applicationDeadline: "Jan 10, 2025"
  //   }
  // ];



  
  

//   const toggleFilter = (value) => {
//     setSelectedFilters(prev => 
//       prev.includes(value) 
//         ? prev.filter(f => f !== value)
//         : [...prev, value]
//     );
//   };

//   const removeFilter = (value) => {
//     setSelectedFilters(prev => prev.filter(f => f !== value));
//   };

//   const getFilterLabel = (value) => {
//     for (const category of Object.values(filters)) {
//       const filter = category.find(f => f.value === value);
//       if (filter) return filter.label;
//     }
//     return value;
//   };

//   // Pagination
//   const totalPages = Math.ceil(colleges.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentColleges = colleges.slice(startIndex, endIndex);

//   return (
//     <div className="w-full px-6 md:px-10 py-6 bg-gray-50 min-h-screen">
//       {/* Header with Selected Filters */}
//       <div className="mb-6">
//         <div className="flex flex-wrap items-center gap-3 mb-4">
//           <button
//             onClick={() => setIsFilterOpen(true)}
//             className="lg:hidden flex items-center space-x-1 bg-white px-4 py-2 rounded-md shadow-sm"
//           >
//             <Filter className="h-4 w-4" />
//             <span>Filters</span>
//           </button>

//           {selectedFilters.map((filter) => (
//             <div
//               key={filter}
//               className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm"
//             >
//               <span className="text-sm text-gray-700">{getFilterLabel(filter)}</span>
//               <button
//                 onClick={() => removeFilter(filter)}
//                 className="ml-2 text-gray-400 hover:text-gray-600"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <main className="w-full h-full">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Filter Panel */}
//           <div className={`
//             fixed lg:relative lg:block top-0 left-0 h-full w-80 bg-white lg:w-72
//             transform transition-transform duration-300 ease-in-out z-50
//             ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//             shadow-xl lg:shadow-md rounded-r-lg lg:rounded-lg
//           `}>
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
//                 <button
//                   onClick={() => setIsFilterOpen(false)}
//                   className="lg:hidden text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 {Object.entries(filters).map(([category, options]) => (
//                   <div key={category}>
//                     <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">
//                       {category}
//                     </h3>
//                     <div className="space-y-2">
//                       {options.map((option) => (
//                         <label
//                           key={option.value}
//                           className="flex items-center space-x-3 cursor-pointer"
//                         >
//                           <input
//                             type="checkbox"
//                             checked={selectedFilters.includes(option.value)}
//                             onChange={() => toggleFilter(option.value)}
//                             className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
//                           />
//                           <span className="text-sm text-gray-600">{option.label}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* College Cards */}
//           <div className="flex-1">
//             <div className="grid grid-cols-1 gap-6">
//               {currentColleges.map((college, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                   <div className="p-6">
//                     <div className="flex flex-col md:flex-row gap-6">
//                       {/* College Image and Basic Info */}
//                       <div className="md:w-1/3">
//                         <img
//                           src={college.logo}
//                           alt={`${college.name} campus`}
//                           className="w-full h-48 rounded-lg object-cover mb-4"
//                         />
//                         <div className="flex items-center justify-between mb-2">
//                           <div className="flex items-center text-yellow-500">
//                             <Star className="h-5 w-5 fill-current" />
//                             <span className="ml-1 font-medium">{college.rating}/5.0</span>
//                           </div>
//                           <span className={`
//                             px-3 py-1 rounded-full text-sm font-medium
//                             ${college.status === 'Accepting Applications' ? 'bg-green-100 text-green-800' :
//                               college.status === 'Closing Soon' ? 'bg-yellow-100 text-yellow-800' :
//                               'bg-red-100 text-red-800'}
//                           `}>
//                             {college.status}
//                           </span>
//                         </div>
//                       </div>

//                       {/* College Details */}
//                       <div className="md:w-2/3">
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                        
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                           <div className="flex items-center text-gray-600">
//                             <MapPin className="h-5 w-5 mr-2 text-slate-400" />
//                             <span>{college.location}</span>
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <Users className="h-5 w-5 mr-2 text-slate-400" />
//                             <span>20,000+ Students</span>
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <GraduationCap className="h-5 w-5 mr-2 text-slate-400" />
//                             <span>95% Placement Rate</span>
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <Globe className="h-5 w-5 mr-2 text-slate-400" />
//                             <span>Top 50 Worldwide</span>
//                           </div>
//                         </div>

//                         <div className="border-t border-gray-100 pt-4">
//                           <h4 className="text-sm font-semibold text-gray-700 mb-2">Placement Statistics</h4>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="flex items-center text-gray-600">
//                               <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
//                               <div>
//                                 <span className="block text-sm">Highest Package</span>
//                                 <span className="font-semibold text-gray-900">{college.highestPlacement}</span>
//                               </div>
//                             </div>
//                             <div className="flex items-center text-gray-600">
//                               <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
//                               <div>
//                                 <span className="block text-sm">Median Package</span>
//                                 <span className="font-semibold text-gray-900">{college.medianPlacement}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-4 flex justify-end">
//                           <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors">
//                             View Details
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="mt-8 flex justify-center items-center space-x-4">
//               <button
//                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="flex items-center px-3 py-1 rounded-md bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//                 <span className="ml-1">Previous</span>
//               </button>
//               <span className="text-sm text-gray-600">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className="flex items-center px-3 py-1 rounded-md bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span className="mr-1">Next</span>
//                 <ChevronRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default CollegeList;


import React, { useState, useEffect } from 'react';
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
  Calendar
} from 'lucide-react';
import NoCollegesFound from './NoCollegesFound';

// Types for API responses and filters


const colleges = [
  {
    name: "Massachusetts Institute of Technology",
    logo: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Cambridge, USA",
    rating: 4.9,
    highestPlacement: "₹95 LPA",
    medianPlacement: "₹52 LPA",
    status: "Accepting Applications",
    studentCount: "25,000+",
    placementRate: "98%",
    ranking: "Top 3 Worldwide",
    applicationDeadline: "Dec 15, 2024"
  },
  {
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&h=600&q=80",
    location: "California, USA",
    rating: 4.9,
    highestPlacement: "₹92 LPA",
    medianPlacement: "₹50 LPA",
    status: "Accepting Applications",
    studentCount: "23,000+",
    placementRate: "97%",
    ranking: "Top 5 Worldwide",
    applicationDeadline: "Dec 1, 2024"
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
    applicationDeadline: "Nov 30, 2024"
  },
  {
    name: "University of Oxford",
    logo: "https://images.unsplash.com/photo-1580716937776-0c86c5ea03f9?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Oxford, UK",
    rating: 4.8,
    highestPlacement: "₹85 LPA",
    medianPlacement: "₹45 LPA",
    status: "Accepting Applications",
    studentCount: "22,000+",
    placementRate: "95%",
    ranking: "Top 10 Worldwide",
    applicationDeadline: "Jan 15, 2025"
  },
  {
    name: "ETH Zurich",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Zurich, Switzerland",
    rating: 4.7,
    highestPlacement: "₹82 LPA",
    medianPlacement: "₹43 LPA",
    status: "Accepting Applications",
    studentCount: "20,000+",
    placementRate: "94%",
    ranking: "Top 15 Worldwide",
    applicationDeadline: "Feb 1, 2025"
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
    applicationDeadline: "Dec 30, 2024"
  },
  {
    name: "University of Toronto",
    logo: "https://images.unsplash.com/photo-1569447891824-5f50dac44d37?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Toronto, Canada",
    rating: 4.6,
    highestPlacement: "₹78 LPA",
    medianPlacement: "₹40 LPA",
    status: "Accepting Applications",
    studentCount: "19,000+",
    placementRate: "92%",
    ranking: "Top 25 Worldwide",
    applicationDeadline: "Jan 30, 2025"
  },
  {
    name: "Technical University of Munich",
    logo: "https://images.unsplash.com/photo-1598018553943-29ace5bf9867?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Munich, Germany",
    rating: 4.6,
    highestPlacement: "₹75 LPA",
    medianPlacement: "₹38 LPA",
    status: "Accepting Applications",
    studentCount: "18,000+",
    placementRate: "91%",
    ranking: "Top 30 Worldwide",
    applicationDeadline: "Mar 1, 2025"
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
    applicationDeadline: "Feb 15, 2025"
  },
  {
    name: "University of British Columbia",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Vancouver, Canada",
    rating: 4.5,
    highestPlacement: "₹70 LPA",
    medianPlacement: "₹35 LPA",
    status: "Accepting Applications",
    studentCount: "16,000+",
    placementRate: "89%",
    ranking: "Top 40 Worldwide",
    applicationDeadline: "Jan 20, 2025"
  },
  {
    name: "University of Tokyo",
    logo: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Tokyo, Japan",
    rating: 4.7,
    highestPlacement: "₹76 LPA",
    medianPlacement: "₹39 LPA",
    status: "Accepting Applications",
    studentCount: "19,500+",
    placementRate: "93%",
    ranking: "Top 25 Worldwide",
    applicationDeadline: "Feb 28, 2025"
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
    applicationDeadline: "Jan 25, 2025"
  },
  {
    name: "Delft University of Technology",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Delft, Netherlands",
    rating: 4.5,
    highestPlacement: "₹71 LPA",
    medianPlacement: "₹36 LPA",
    status: "Accepting Applications",
    studentCount: "17,500+",
    placementRate: "90%",
    ranking: "Top 35 Worldwide",
    applicationDeadline: "Mar 15, 2025"
  },
  {
    name: "University of Copenhagen",
    logo: "https://images.unsplash.com/photo-1580716937776-0c86c5ea03f9?auto=format&fit=crop&w=800&h=600&q=80",
    location: "Copenhagen, Denmark",
    rating: 4.5,
    highestPlacement: "₹69 LPA",
    medianPlacement: "₹35 LPA",
    status: "Accepting Applications",
    studentCount: "16,500+",
    placementRate: "89%",
    ranking: "Top 40 Worldwide",
    applicationDeadline: "Feb 20, 2025"
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
    applicationDeadline: "Jan 10, 2025"
  }
];


function CollegeList() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [collegeData, setCollegeData] = useState({
    colleges: [],
    totalPages: 0,
    currentPage: 1,
    totalItems: 0
  });
  const [tempFilters, setTempFilters] = useState([]);
  const itemsPerPage = 5;

  const filters = {
    rating: [
      { label: '4.5+ Stars', value: '4.5' },
      { label: '4.0+ Stars', value: '4.0' },
      { label: '3.5+ Stars', value: '3.5' }
    ],
    location: [
      { label: 'USA', value: 'usa' },
      { label: 'UK', value: 'uk' },
      { label: 'Canada', value: 'canada' },
      { label: 'Australia', value: 'australia' },
      { label: 'Germany', value: 'germany' }
    ],
    placement: [
      { label: '50+ LPA', value: '50' },
      { label: '30+ LPA', value: '30' },
      { label: '20+ LPA', value: '20' }
    ],
    status: [
      { label: 'Accepting Applications', value: 'accepting' },
      { label: 'Closing Soon', value: 'closing' },
      { label: 'Closed', value: 'closed' }
    ]
  };

  // Mock API call function - Replace with actual API endpoint
  const fetchColleges = async (params) => {
    try {
      setIsLoading(true);
      // In a real application, this would be an API call
      // const response = await fetch('/api/colleges?' + new URLSearchParams(params));
      // const data = await response.json();
      
      // Mock API response using the existing colleges array
      const filteredColleges = colleges.filter(college => {
        if (params.rating?.length) {
          const minRating = Math.min(...params.rating.map(r => parseFloat(r)));
          if (college.rating < minRating) return false;
        }
        if (params.location?.length) {
          if (!params.location.some(loc => college.location.toLowerCase().includes(loc))) return false;
        }
        if (params.status?.length) {
          if (!params.status.includes(college.status.toLowerCase().replace(/\s+/g, ''))) return false;
        }
        if (params.placement?.length) {
          const minPlacement = Math.min(...params.placement.map(p => parseInt(p)));
          const collegePlacement = parseInt(college.medianPlacement.split(' ')[0].replace('₹', ''));
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
        totalItems: filteredColleges.length
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching colleges:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const params = {
      page: currentPage,
      limit: itemsPerPage
    };

    // Group filters by category
    const groupedFilters = selectedFilters.reduce((acc, filter) => {
      for (const [category, options] of Object.entries(filters)) {
        if (options.some(opt => opt.value === filter)) {
          if (!acc[category]) acc[category] = [];
          acc[category].push(filter);
        }
      }
      return acc;
    }, {} );

    // Add grouped filters to params
    Object.entries(groupedFilters).forEach(([category, values]) => {
      params[category] = values;
    });

    fetchColleges(params);
  }, [currentPage, selectedFilters]);

  const toggleFilter = (value) => {
    setTempFilters(prev => 
      prev.includes(value) 
        ? prev.filter(f => f !== value)
        : [...prev, value]
    );
  };

  const removeFilter = (value) => {
    setSelectedFilters(prev => prev.filter(f => f !== value));
  };

  const getFilterLabel = (value) => {
    for (const category of Object.values(filters)) {
      const filter = category.find(f => f.value === value);
      if (filter) return filter.label;
    }
    return value;
  };

  const handleApplyFilters = () => {
    setSelectedFilters(tempFilters);
    setCurrentPage(1); // Reset to first page when applying new filters
    setIsFilterOpen(false);
  };

  const handleResetFilters = () => {
    setTempFilters([]);
    setSelectedFilters([]);
    setCurrentPage(1);
    setIsFilterOpen(false);
  };

  // Initialize tempFilters with selectedFilters when opening the filter panel
  useEffect(() => {
    if (isFilterOpen) {
      setTempFilters(selectedFilters);
    }
  }, [isFilterOpen]);

  return (
    <div className="w-full px-6 md:px-10 py-6 bg-gray-50 h-fit ">
      {/* Header with Selected Filters */}
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
              <span className="text-sm text-gray-700">{getFilterLabel(filter)}</span>
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

      <main className="w-full h-fit">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Panel */}
          <div className={`
            fixed lg:relative lg:block top-0 left-0 h-full w-80 bg-white lg:w-72
            transform transition-transform duration-300 ease-in-out z-50
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            shadow-xl lg:shadow-md rounded-r-lg lg:rounded-lg
          `}>
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

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-6">
                  {Object.entries(filters).map(([category, options]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">
                        {category}
                      </h3>
                      <div className="space-y-2">
                        {options.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center space-x-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={tempFilters.includes(option.value)}
                              onChange={() => toggleFilter(option.value)}
                              className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                            />
                            <span className="text-sm text-gray-600">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t bg-gray-50">
                <div className="flex gap-2">
                  <button
                    onClick={handleApplyFilters}
                    className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
                  >
                    Apply
                  </button>
                  <button
                    onClick={handleResetFilters}
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
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800"></div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6">
                  { collegeData.colleges.length != 0 ? collegeData.colleges.map((college, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* College Image and Basic Info */}
                          <div className="md:w-1/3">
                            <img
                              src={college.logo}
                              alt={`${college.name} campus`}
                              className="w-full h-48 rounded-lg object-cover mb-4"
                            />
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center text-yellow-500">
                                <Star className="h-5 w-5 fill-current" />
                                <span className="ml-1 font-medium">{college.rating}/5.0</span>
                              </div>
                              <span className={`
                                px-3 py-1 rounded-full text-sm font-medium
                                ${college.status === 'Accepting Applications' ? 'bg-green-100 text-green-800' :
                                  college.status === 'Closing Soon' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'}
                              `}>
                                {college.status}
                              </span>
                            </div>
                          </div>

                          {/* College Details */}
                          <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center text-gray-600">
                                <MapPin className="h-5 w-5 mr-2 text-slate-400" />
                                <span>{college.location}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Users className="h-5 w-5 mr-2 text-slate-400" />
                                <span>{college.studentCount} Students</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <GraduationCap className="h-5 w-5 mr-2 text-slate-400" />
                                <span>{college.placementRate} Placement Rate</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Globe className="h-5 w-5 mr-2 text-slate-400" />
                                <span>{college.ranking}</span>
                              </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">Placement Statistics</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center text-gray-600">
                                  <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                                  <div>
                                    <span className="block text-sm">Highest Package</span>
                                    <span className="font-semibold text-gray-900">{college.highestPlacement}</span>
                                  </div>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                                  <div>
                                    <span className="block text-sm">Median Package</span>
                                    <span className="font-semibold text-gray-900">{college.medianPlacement}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                              <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) : <NoCollegesFound/>}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, collegeData.totalPages))}
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