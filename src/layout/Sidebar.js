import React, { useState } from "react";
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
import Github from "../assets/githubLink.png";
import Gmail from "../assets/gmail.png";
import Linked from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

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
        <div className="fixed z-100 h-full items-center top-[3rem] left-0 p-4 overflow-y-auto bg-white w-2/3 sm:w-1/2">
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
              <li className="hover:animate-myAnim">
                <NavLink className="flex items-center px-2 w-5/6" to="/">
                  <MdHome className="mr-4" />
                  Home
                </NavLink>
              </li>
              <li className="hover:animate-myAnim">
                <NavLink className="flex items-center px-2 w-5/6" to="/about">
                  <MdAccountCircle className="mr-4" />
                  About
                </NavLink>
              </li>
              <li className="hover:animate-myAnim">
                <NavLink className="flex items-center px-2 w-5/6" to="/projects">
                  <MdPermMedia className="mr-4" />
                  Projects
                </NavLink>
              </li>
              <li className="hover:animate-myAnim">
                <NavLink
                  className="flex items-center px-2 w-5/6"
                  to="/education"
                >
                  <MdOutlineMenuBook className="mr-4" />
                  Education
                </NavLink>
              </li>
              <li className="hover:animate-myAnim">
                <NavLink className="flex items-center px-2 w-5/6" to="/skills">
                  <MdHotelClass className="mr-4" />
                  Skills
                </NavLink>
              </li>
              <li className="hover:animate-myAnim">
                <NavLink className="flex items-center px-2 w-5/6" to="/contact">
                  <MdMarkAsUnread className="mr-4" />
                  Contact
                </NavLink>
              </li>
            </ul>
            <hr />
            <h2 className="font-google text-lg justify-center text-gray-600 px-2 mt-5">My Socials</h2>
            <div className=" grid grid-cols-2 items-center w-full sm:w-4/5">
              <a
                className=" w-full md:p-3 flex flex-col items-center justify-center focus:outline-none"
                href="https://mail.google.com/mail/?view=cm&to=pranjayvats22062001@gmail.com"
              >
                <img
                  src={Gmail}
                  className="w-3/5 hover:shadow-2xl p-1 rounded-3xl"
                  alt=""
                />
                <p className="block sm:text-xs md:text-sm lg:text-base">
                  Gmail
                </p>
              </a>
              <a
                className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none"
                href="https://www.linkedin.com/in/pranjay-vats-4bb250205/"
              >
                <img
                  src={Linked}
                  className="w-3/5 hover:shadow-2xl p-1 rounded-3xl"
                  alt=""
                />
                <p className="block sm:text-xs md:text-sm lg:text-base">
                  LinkedIn
                </p>
              </a>
              <a
                className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none "
                href="https://github.com/PranjayVats"
              >
                <img
                  src={Github}
                  className="w-3/5 hover:shadow-2xl p-1 rounded-3xl"
                  alt=""
                />
                <p className="block sm:text-xs md:text-sm lg:text-base">
                  Github
                </p>
              </a>
              <a
                className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none"
                href="https://www.instagram.com/vatspranjay.2206/"
              >
                <img
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
