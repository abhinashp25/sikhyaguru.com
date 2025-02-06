import React from 'react';

const companyNames = [
  'Acer', 'HCL', 'HP', 'Microsoft', 'Oracle', 'Samsung', 'IBM', 'TCS', 'Wipro', 'Genpact', 'Infosys', 'Google', 'Amazon', 'Facebook', 'Apple'
];

const HorizontalLogoSlider = () => {
  const cloneCompanies = [...companyNames, ...companyNames];
  return (
    <div className="w-11/12 mx-auto max-w-[1480px] flex flex-col md:flex-row ">
      <div className="flex items-center flex-col justify-center h-38 md:h-42 overflow-hidden ">
        {/* <h1 className='font-mullish text-2xl lg:text-3xl font-bold mb-4 mt-[4rem] text-white'>Our Trusted Partners</h1> */}
        <div className='w-[2880px] overflow-hidden '>
          <div className="animate-marquee w-full flex justify-center gap-20 mt-4">
            {cloneCompanies.map((company, index) => (
              <div key={index} className="w-32 h-16 md:w-40 md:h-16 flex-shrink-0 flex items-center justify-center text-black text-lg font-bold border border-gray-300 p-2">
                {company}
              </div>
            ))}
          </div>
          <div className="animate-marquee1 flex justify-center gap-20 mt-4">
            {cloneCompanies.map((company, index) => (
              <div key={index} className="w-32 h-16 md:w-40 md:h-16 flex-shrink-0 flex items-center justify-center text-black text-lg font-bold border border-gray-300 p-2">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }

        .animate-marquee1 {
          animation: marquee1 50s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee1 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalLogoSlider;
