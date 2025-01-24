import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AboutPic1 from "../../assests/AboutPic1.jpg";
import AboutPic2 from "../../assests/AboutPic2.jpg";
import Button from "../common/Button";

const AboutSection = () => {
  // Set up the intersection observer
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time it comes into view
    threshold: 0.2, // Percentage of the element visible to trigger
  });


  //bg-gradient-to-br from-blue-200 via-purple-100 to-blue-200
  return (
    <section
      ref={ref}
      className="py-24 relative "
    >
      <div className="w-full  px-6 md:px-10">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                data-aos="zoom-in"
                className="rounded-md object-cover shadow-lg"
                src={AboutPic1}
                alt="about Us image"
              />
            </div>
            <img
              data-aos="zoom-in"
              className="sm:ml-0 ml-auto rounded-md object-cover shadow-lg"
              src={AboutPic2}
              alt="about Us image"
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Empowering Each Other to Excel
                </h2>
                <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                  Every initiative we've undertaken has been a collaborative
                  effort, where every individual involved has contributed their
                  unique talents. Together, we've not only shaped futures but
                  also fostered enduring relationships that define our journey
                  of success.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    {inView && <CountUp end={1000} duration={2} />}+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Students Enrolled
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    {inView && <CountUp end={25} duration={2} />}+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Programs Offered
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    {inView && <CountUp end={150} duration={2} />}+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Partnered Institutions
                  </h6>
                </div>
              </div>
            </div>
            <Button title={"Read More"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
