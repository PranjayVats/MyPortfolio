import React from "react";
import { IoMdOptions } from "react-icons/io";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import ProfileImage from "../assets/profile.webp";
import Sidebar from "./Sidebar";
import SocialDialog from "./SocialDialog";

const Navbar = (props) => {
  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="1100"
      className="flex sticky bg-white z-40 top-0 px-5 h-auto w-screen items-center justify-between py-2 border-b border-gray-300 "
    >
      <div className="flex items-center justify-between md:justify-start w-full md:w-4/5">
        <div className="flex items-center md:hidden">
          <Sidebar />
        </div>
        <figure className="flex justify-between items-center text-[#5F6368] text-xl font-google md:mr-10">
          <img
            loading="lazy"
            src={props.image}
            className="w-6 h-auto
           sm:w-10 mr-2"
            alt="drive-Logo"
          />
          <figcaption>{props.title}</figcaption>
        </figure>
        <div className="hidden md:flex items-center justify-between px-5 py-2 my-0.5 rounded-lg w-4/6 lg:w-1/2 bg-[#F1F3F4]">
          <span className="flex text-[#676B6F]">
            <AiOutlineSearch className="text-2xl mr-3" />
            Search in {props.search}
          </span>
          <IoMdOptions className="text-2xl text-[#676B6F]" />
        </div>
        <img
          loading="lazy"
          className="block md:hidden rounded-full h-6 sm:h-8 "
          src={ProfileImage}
          alt="profile"
        />
      </div>
      <ul className="hidden md:flex items-center">
        <li className="mr-3">
          <AiOutlineSetting className="text-[#5F6368] text-2xl font-bold" />
        </li>
        <li className="mx-3 cursor-pointer">
          <SocialDialog />
        </li>
        <li className="ml-3">
          <img
            loading="lazy"
            className="rounded-full h-8"
            src={ProfileImage}
            alt="profile"
          />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
