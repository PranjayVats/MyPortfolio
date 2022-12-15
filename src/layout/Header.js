import React from "react";
import { IoMdClose,IoMdMic } from "react-icons/io";
import { IoReload, IoExtensionPuzzle } from "react-icons/io5";
import { HiPlus,HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import P from "../assets/p-logo.png";
import { MdExpandMore } from "react-icons/md";
import Chrome from "../assets/chrome.png";
import Photos from "../assets/googlePhotos.png";
import Classroom from "../assets/googleClassroom.png";
import Gmail from "../assets/gmail.png";
import Drive from "../assets/drive.png";
import News from "../assets/googleNews.png";
import { FaRegShareSquare } from "react-icons/fa";
import {
  VscChromeMinimize,
  VscChromeRestore,
  VscClose,
  VscArrowLeft,
  VscArrowRight,
  VscStarEmpty,
} from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import {GrHomeOption} from "react-icons/gr";
import { CgDockRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex-col max-h-16 h-9 md:h-16 w-screen max-w-screen bg-[#3D3D3D] overflow-hidden">
      <div className=" hidden md:flex tabs w-screen justify-between items-center text-white  ">
        <ul className="flex items-center h-7 py-0">
          <li className="cursor-default select-none h-full hover:bg-[#303134] rounded-t-lg">
            <NavLink
              to="/"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img className="w-3.5 mr-1" src={Chrome} alt="logo" />
                <figcaption>Home</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="cursor-default select-none h-full hover:bg-[#303134] rounded-t-lg">
            <NavLink
              to="/search"
              className="flex text-xs items-center px-2 h-full justify-between w-20 lg:w-28"
            >
              <figure className="flex items-center">
                <img className="w-3.5 mr-1" src={P} alt="logo" />
                <figcaption>Pranjay...</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="cursor-default select-none h-full hover:bg-[#303134] rounded-t-lg">
            <NavLink
              to="/about"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img className="w-3.5 mr-1" src={Photos} alt="logo" />
                <figcaption>About</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="cursor-default select-none h-full hover:bg-[#303134] rounded-t-lg">
            <NavLink
              to="/projects"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img  className="w-3.5 mr-1" src={Drive} alt="logo" />
                <figcaption>Projects</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="cursor-default select-none h-full hover:bg-[#303134] rounded-t-lg">
            <NavLink
              to="/education"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img className="w-3.5 mr-1" src={Classroom} alt="logo" />
                <figcaption className="truncate">Education</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="cursor-default select-none h-full hover:bg-[#303134] rounded-t-lg">
            <NavLink
              to="/skills"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img className="w-3.5 mr-1" src={News} alt="logo" />
                <figcaption>Skills</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="cursor-default select-none h-full hover:bg-[#303134] rounded-t-lg">
            <NavLink
              to="/contact"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img className="w-3.5 mr-1" src={Gmail} alt="logo" />
                <figcaption>Contact</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="items-center text-lg hover:bg-[#303134] rounded-2xl p-1 ">
            <HiPlus />
          </li>
        </ul>
        <ul className="flex items-center h-7 py-0">
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between  hover:bg-[#3d3d3d]">
            <MdExpandMore />
          </li>
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between hover:bg-[#3d3d3d]">
            <VscChromeMinimize />
          </li>
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between  hover:bg-[#3d3d3d]">
            <VscChromeRestore />
          </li>
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between hover:bg-red-500">
            <VscClose />
          </li>
        </ul>
      </div>
      <div className="searchbar flex w-screen bg-[#303134] h-9 items-center py-1 text-white ">
        <ul className="flex items-center justify-between">
          <li className="hidden md:block px-2 text-[#a2a2a2]">
            <VscArrowLeft />
          </li>
          <li className="hidden md:block px-2 text-[#a2a2a2]">
            <VscArrowRight />
          </li>
          <li className="hidden md:block text-sm p-1 hover:bg-[#676767] rounded-2xl">
            <IoReload />
          </li>
          <li className="md:hidden text-sm p-1 hover:bg-[#676767] rounded-2xl">
            <RiHome2Line />
          </li>
        </ul>
        <div className="flex mx-1 text-xs text-[#a2a2a2] items-center w-full bg-[#1f1f1f] rounded-xl p-1 justify-between">
          <div className="flex items-center">
            <FcGoogle className="hidden md:block ml-1 bg-white rounded-lg mx-2">Search Google or type URL</FcGoogle>
            <HiLockClosed className="block md:hidden ml-1 mx-2">google.com/</HiLockClosed>
          </div>
          <div className="flex mx-1">
            <FaRegShareSquare className="text-sm mx-1" />
            <VscStarEmpty className="text-sm mx-1" />
          </div>
        </div>
        <ul className="flex items-center justify-between">
          <li className="text-sm p-1 mx-1 text-white hover:bg-[#676767] rounded-2xl">
            <IoExtensionPuzzle />
          </li>
          <li className="text-sm p-1 mx-2 text-white hover:bg-[#676767] rounded-2xl">
            <CgDockRight />
          </li>
          <li className="text-sm p-1 mx-2 text-white hover:bg-[#676767] rounded-2xl">
            <BiDotsVerticalRounded />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
