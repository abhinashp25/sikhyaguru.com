import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Gallery = () => {
  const categories = ["Canteen", "Hostel", "Library", "Ground","Campus"];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const images = {
    Canteen: [
      "https://images.pexels.com/photos/126769/pexels-photo-126769.jpeg",
      "https://images.pexels.com/photos/163956/pexels-photo-163956.jpeg",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
    ],
    Hostel: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
      "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg",
    ],
    Library: [
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
      "https://images.pexels.com/photos/3747503/pexels-photo-3747503.jpeg",
      "https://images.pexels.com/photos/2076623/pexels-photo-2076623.jpeg",
    ],
    Ground: [
      "https://images.pexels.com/photos/1580285/pexels-photo-1580285.jpeg",
      "https://images.pexels.com/photos/3621108/pexels-photo-3621108.jpeg",
      "https://images.pexels.com/photos/8849905/pexels-photo-8849905.jpeg",
    ],
    Campus: [
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
      "https://images.pexels.com/photos/3747503/pexels-photo-3747503.jpeg",
      "https://images.pexels.com/photos/2076623/pexels-photo-2076623.jpeg",
    ],
    
  };
  


  // use a fetch call to get the images from the server and store in a state variable


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };



  
  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <ChevronRight/>
        
      </div>
    );
  };
  
  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
      <ChevronLeft/>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  


  return (
    <div className="flex flex-col md:flex-row gap-4  md:p-10">
      {/* Image Slider */}
      <div className="w-full  md:w-3/4">
        <Slider {...settings}>
          {images[activeTab].map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={activeTab}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Tabs */}
      <div className="w-full md:w-1/4 flex overflow-x-auto mt-10 md:mt-0 flex-row md:flex-col gap-2 md:gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-3 md:p-4 text-sm md:text-lg rounded-lg w-full text-white font-semibold transition-all duration-300 shadow-lg ${
              activeTab === category
                ? "bg-blue-600"
                : "bg-gray-400  hover:bg-gray-500"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
