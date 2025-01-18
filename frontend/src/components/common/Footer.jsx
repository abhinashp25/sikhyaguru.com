import React from "react";
//import AGMLOgoImg from "../../Assests/Home/AGMLogo.svg";
import { FaWhatsapp } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white p-[24px] lg:p-[40px_50px_15px_50px]">
      {/* Footer Container */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-12 md:gap-[30px]">
        {/* Logo & Description */}
        <div className="">
          {/* <img
            src={AGMLOgoImg}
            alt="AGMLogo"
            className="w-auto h-10 md:h-fit md:w-28"
          /> */}

          <h2 className=" text-3xl font-extrabold text-gray-800  ">
            <span className="text-purple-600">
              Sikshya<span className="text-gray-100">Guru</span>
            </span>
          </h2>

          <p className="mt-4 text-xs text-gray-500">
            Master the art of digital marketing and stock trading with our
            comprehensive courses.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://wa.me/+919462049921?text=Hii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-gray-100 hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com/a_g_marketibg_pvt.ltd?igsh=MTNzMGNoNXBuaGo5bA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram className="text-gray-100 hover:text-white" />
            </a>
          </div>
        </div>

        <div className="lg:ml-10">
          <h3 className="font-semibold text-[16px] mb-4">Company</h3>
          <ul className="space-y-2 text-[13px] text-gray-400  ">
            <li
              onClick={() => {
                navigate("/");
                scrollToSection("about");
              }}
              className=" cursor-pointer hover:text-white"
            >
              About
            </li>

            <li
              onClick={() => {
                navigate("/");
                scrollToSection("market");
              }}
              className=" cursor-pointer hover:text-white"
            >
              Courses
            </li>
            <li
              onClick={() => {
                navigate("/");
                scrollToSection("features");
              }}
              className=" cursor-pointer hover:text-white"
            >
              Features
            </li>

            <li
              onClick={() => {
                navigate("/");
                scrollToSection("contact");
              }}
              className=" cursor-pointer hover:text-white"
            >
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[16px] mb-4">Our features</h3>
          <ul className="space-y-2 text-[13px] text-gray-400">
            {/* <li className="hover:text-gray-100 cursor-pointer">
              <Link to={"/"}></Link>
            </li> */}
            {/* <li className="hover:text-gray-100 cursor-pointer">
              <Link to={"/"}>Mobile app</Link>
            </li> */}

            <p
              className="hover:text-gray-100 cursor-pointer"
              onClick={() => {
                navigate("/");
                scrollToSection("whyus");
              }}
            >
              Why Us
            </p>
            <p
              className="hover:text-gray-100 cursor-pointer"
              onClick={() => {
                navigate("/");
                scrollToSection("review");
              }}
            >
              Review
            </p>
            <li className="hover:text-gray-100 cursor-pointer">
              <Link to={"/refundpolicy"}>Refund Policy</Link>
            </li>
            <li className="hover:text-gray-100 cursor-pointer">
              <Link
                onClick={() => {
                  navigate("/");
                  scrollToSection("contact");
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2 text-[13px] text-gray-400">
            <li className="hover:text-gray-100 cursor-pointer">
              <Link to={"/privacypolicy"}>Privacy policy</Link>
            </li>
            <li className="hover:text-gray-100 cursor-pointer">
              <Link to={"/termsandconditions"}>Terms & conditions</Link>
            </li>
            <li className="hover:text-gray-100 cursor-pointer">
              <Link to={"/legal"}>Legal</Link>
            </li>
            <li className="hover:text-gray-100 cursor-pointer">
              <Link to={"/faqs"}>FAQ's</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Subscribe our newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe our newsletter to get the latest news and updates.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // toast.success("Subscribed");
            }}
            className="flex focus:ring-2 rounded-md bg-white"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="px-4 text-sm py-2 w-full  rounded  overline-none text-gray-700 outline-none  "
            />
            <button type="submit" className="bg-white px-4 py-2 rounded">
              <IoMailOutline className="text-gray-400 text-lg" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-[#858293]  font-semibold text-[8px] lg:text-[14px] flex justify-between gap-6 border-t border-gray-700 pt-4">
        <p className="text-start">
          © {currentYear} SikshyaGuru All Rights Reserved
        </p>
        <p className="text-end">
          Design and Developed by{" "}
          <a
            className="hover:text-white text-[#E2611F]  underline"
            href=""
            target="_blank"
          >
            TheLast
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
