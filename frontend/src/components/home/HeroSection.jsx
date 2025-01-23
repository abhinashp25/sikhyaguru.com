import React from "react";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section>
      <div className="min-h-[110vh]">
        <div className=" flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
          Find Your Perfect College Path
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-700">
          Compare colleges, explore hostels, check fees, and make informed decisions about your academic future.
          </p>
          <div className="flex flex-wrap justify-center">
            {/* <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gradient-to-br from-purple-900  via-blue-950 to-purple-700 text-gray-100"
            >
              Get started
            </button> */}
            <Button title={"Get Started"}/>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded border-gray-500 text-gray-900"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
};

export default HeroSection;
