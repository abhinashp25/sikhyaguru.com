import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = ({ collegeData }) => {
  const categories = collegeData?.gallery?.map((item) => item.category) || [];
  const [activeTab, setActiveTab] = useState(categories[0]);
  const filteredImages = collegeData?.gallery
    ?.filter((item) => item.category === activeTab)
    ?.map((item) => item.url) || [];

  console.log("Filtered Images:", filteredImages);
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <ChevronRight />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <ChevronLeft />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: filteredImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:p-10">
      <div className="w-full md:w-3/4">
        <Slider {...settings}>
          {filteredImages.map((img, index) => (
            <div key={index} className="flex justify-center items-center h-full">
              
              <img
                src={img}
                alt={`Gallery image ${index}`}
                className="w-full max-h-[600px] object-contain rounded-lg"
              />

            </div>
          ))}

        </Slider>
      </div>
      <div className="w-full md:w-1/4 flex overflow-x-auto mt-10 md:mt-0 flex-row md:flex-col gap-2 md:gap-4">
        {[...new Set(categories)].map((category) => (
          <button
            key={category}
            className={`p-3 md:p-4 text-sm md:text-lg rounded-lg w-full text-white font-semibold transition-all duration-300 shadow-lg ${activeTab === category
                ? "bg-blue-600"
                : "bg-gray-400 hover:bg-gray-500"
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