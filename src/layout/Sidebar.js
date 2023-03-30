import React, {  useState } from "react";
import {
  MdClose,
  MdMenu,
  MdHome,
  MdAccountCircle,
  MdHotelClass,
  MdMarkAsUnread,
  MdPermMedia,
  MdOutlineMenuBook,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import Github from "../assets/githubLink.webp";
import Gmail from "../assets/gmail.webp";
import Linked from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center text-center">
        <button className="focus:outline-none " onClick={() => setOpen(true)}>
          <MdMenu className="text-[#5F6368] font-medium rounded-lg text-xl " />
        </button>
      </div>
      {open ? (
        <div className="fixed z-100 h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] items-center top-[3rem] left-0 p-4 overflow-y-auto bg-white w-2/3 sm:w-1/2">
          <h5 className="text-base sm:text-lg font-semibold text-gray-500 uppercase ">
            Menu
          </h5>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
            onClick={() => setOpen(false)}
          >
            <MdClose className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <div className="py-4">
            <ul className="text-lg sm:text-xl font-google text-gray-500 mb-5">
              <li data-aos="fade-right" data-aos-duration="1100">
                <NavLink className="flex items-center px-2 w-5/6" to="/">
                  <MdHome className="mr-4" />
                  Home
                </NavLink>
              </li>
              <li data-aos="fade-right" data-aos-duration="1200">
                <NavLink className="flex items-center px-2 w-5/6" to="/about">
                  <MdAccountCircle className="mr-4" />
                  About
                </NavLink>
              </li>
              <li data-aos="fade-right" data-aos-duration="1300">
                <NavLink
                  className="flex items-center px-2 w-5/6"
                  to="/projects"
                >
                  <MdPermMedia className="mr-4" />
                  Projects
                </NavLink>
              </li>
              <li data-aos="fade-right" data-aos-duration="1400">
                <NavLink
                  className="flex items-center px-2 w-5/6"
                  to="/education"
                >
                  <MdOutlineMenuBook className="mr-4" />
                  Education
                </NavLink>
              </li>
              <li data-aos="fade-right" data-aos-duration="1500">
                <NavLink className="flex items-center px-2 w-5/6" to="/skills">
                  <MdHotelClass className="mr-4" />
                  Skills
                </NavLink>
              </li>
              <li data-aos="fade-right" data-aos-duration="1600">
                <NavLink className="flex items-center px-2 w-5/6" to="/contact">
                  <MdMarkAsUnread className="mr-4" />
                  Contact
                </NavLink>
              </li>
            </ul>
            <hr />
            <h2
              data-aos="fade-right"
              data-aos-duration="1500"
              className="font-google text-lg justify-center text-gray-600 px-2 mt-5"
            >
              My Socials
            </h2>
            <div className=" grid grid-cols-2 items-center w-full sm:w-4/5">
              <a
                data-aos="fade-right"
                data-aos-duration="1100"
                className=" w-full md:p-3 flex flex-col items-center justify-center focus:outline-none"
                href="https://mail.google.com/mail/?view=cm&to=pranjayvats22062001@gmail.com"
              >
                <img
                  loading="lazy"
                  src={Gmail}
                  className="w-3/5 hover:shadow-2xl p-1 rounded-3xl"
                  alt=""
                />
                <p className="block sm:text-xs md:text-sm lg:text-base">
                  Gmail
                </p>
              </a>
              <a
                data-aos="fade-right"
                data-aos-duration="1200"
                className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none"
                href="https://www.linkedin.com/in/pranjay-vats-4bb250205/"
              >
                <img
                  loading="lazy"
                  src={Linked}
                  className="w-3/5 hover:shadow-2xl p-1 rounded-3xl"
                  alt=""
                />
                <p className="block sm:text-xs md:text-sm lg:text-base">
                  LinkedIn
                </p>
              </a>
              <a
                data-aos="fade-right"
                data-aos-duration="1300"
                className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none "
                href="https://github.com/PranjayVats"
              >
                <img
                  loading="lazy"
                  src={Github}
                  className="w-3/5 hover:shadow-2xl p-1 rounded-3xl"
                  alt=""
                />
                <p className="block sm:text-xs md:text-sm lg:text-base">
                  Github
                </p>
              </a>
              <a
                data-aos="fade-right"
                data-aos-duration="1400"
                className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none"
                href="https://www.instagram.com/vatspranjay.2206/"
              >
                <img
                  loading="lazy"
                  src={Instagram}
                  className="w-3/5 hover:shadow-2xl p-1 rounded-3xl"
                  alt=""
                />
                <p className="block sm:text-xs md:text-sm lg:text-base">
                  Instagram
                </p>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
