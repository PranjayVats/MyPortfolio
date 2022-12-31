import React, { useState, useEffect } from "react";
import Drive from "../assets/drive.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoStarOutline } from "react-icons/io5";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import {
  MdDevices,
  MdOutlinePeopleAlt,
  MdAccessTime,
  MdCloudQueue,
  MdOutlineViewList,
  MdInfoOutline,
} from "react-icons/md";
import AddIcon from "../assets/addIcon.jpg";
import { FaGoogleDrive } from "react-icons/fa";
import Navbar from "../layout/Navbar";
import Loader from "../layout/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="projects flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-y-auto overflow-x-hidden w-screen items-center">
      {!show ? (
        <Loader title="Projects" />
      ) : (
        <div className="w-screen">
          <Navbar image={Drive} title="Projects" search="projects" />
          <div className="flex lg:grid lg:grid-cols-5 lg:gap-10 h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)]">
            <div data-aos="fade-right" data-aos-duration="1100" className="sidebar hidden lg:flex flex-col flex-wrap col-span-1 cursor-pointer">
              <figure className="flex w-1/2 border-gray-200 border shadow-md rounded-3xl m-3 px-4 py-2.5 cursor-pointer hover:shadow-customShadow">
                <img
                  src={AddIcon}
                  alt="addIcon"
                  className="w-1/3 mr-3 rounded-full"
                />
                <figcaption> New</figcaption>
              </figure>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#185ABC] p-2 pl-2 bg-[#E8F0FE] rounded-tr-3xl rounded-br-3xl">
                <GoTriangleRight className="text-sm mr-2 text-[#5F6368]" />
                <FaGoogleDrive className="text-xl mr-4" />
                My Drive
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-2 hover:bg-[#F1F3F4] hover:rounded-tr-3xl hover:rounded-br-3xl">
                <GoTriangleRight className="text-sm mr-2" />
                <MdDevices className="text-xl mr-4" />
                Computers
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7 hover:bg-[#F1F3F4] hover:rounded-tr-3xl hover:rounded-br-3xl">
                <MdOutlinePeopleAlt className="text-xl mr-4" />
                Shared with me
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7 hover:bg-[#F1F3F4] hover:rounded-tr-3xl hover:rounded-br-3xl">
                <MdAccessTime className="text-xl mr-4" />
                Recent
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7 hover:bg-[#F1F3F4] hover:rounded-tr-3xl hover:rounded-br-3xl">
                <IoStarOutline className="text-xl mr-4" />
                Starred
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] mb-2 p-2  pl-7 hover:bg-[#F1F3F4] hover:rounded-tr-3xl hover:rounded-br-3xl">
                <RiDeleteBin6Line className="text-xl mr-4" />
                Trash
              </div>
              <hr />
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] mb-2 p-2 mt-2 pl-7 hover:bg-[#F1F3F4] hover:rounded-tr-3xl hover:rounded-br-3xl">
                <MdCloudQueue className="text-xl mr-4" />
                Storage
              </div>
              <div className="flex flex-col w-3/4 bg-[#E0E0E0] rounded-full h-1 ml-7">
                <div className="bg-[#1A73E8] h-full rounded-full w-1/12"></div>
              </div>
              <div className="flex flex-col font-sans text-xs text-[#5F6368] mt-2 cursor-pointer ml-7">
                <p>1.1 GB of 15 GB used</p>
                <button className="justify-self-center w-2/3 mt-2 border py-2 text-sm px-1 border-gray-200 hover:bg-blue-50 rounded-md text-[#185ABC]">
                  Buy Storage
                </button>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1100" className="main h-full w-full flex flex-col lg:col-span-4">
              <div className="flex flex-row justify-between items-center my-2 mx-2">
                <div className="flex px-2 py-1 text-[#3C4043] items-center rounded-lg hover:bg-[#F1F3F4]">
                  <p>My Drive</p>
                  <GoTriangleDown className="ml-2 text-[#939699]" />
                </div>
                <div className="flex w-1/12 justify-around text-[#939699] text-2xl cursor-pointer">
                  <MdOutlineViewList className="text-[#686868]" />
                  <MdInfoOutline className="text-[#686868]" />
                </div>
              </div>
              <hr />
              <h1 className="text-[#62666B] mx-4 my-2 text-sm font-medium ">
                Files
              </h1>
              <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3">
                <div className="flex col-span-1 justify-center justify-self-center items-center rounded-md my-4 mx-2 w-5/6 sm:w-3/4">
                  <div className="group relative block overflow-hidden rounded-md transition-all duration-700">
                    <figure className=" border h-36 sm:h-48 md:h-60 flex flex-row lg:flex-col lg:h-80">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                        className="w-1/2 sm:w-2/3 lg:w-full"
                        alt=""
                      />
                      <figcaption className="border-t p-2 sm:p-4 bg-white text-sm text-[#3C4043] font-medium">
                        Ecommerce Web-app made using MERN stack
                      </figcaption>
                    </figure>
                    <div className="absolute -left-1024 group-hover:left-0 bottom-0 right-0 transition-all duration-700 opacity-10 ease-in-out bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-90 text-2xl font-google w-full h-full">
                      <a
                        href="/"
                        className="text-white h-full flex items-end text-4xl transition duration-500 font-semibold font-google"
                      >
                        <h1 className="text-justify p-2">
                          Ecommerce- Webapplication
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex col-span-1 justify-center justify-self-center items-center rounded-md my-4 mx-2 w-5/6 sm:w-3/4">
                  <div className="group relative block overflow-hidden rounded-md transition-all duration-700">
                    <figure className="border h-36 sm:h-48 md:h-60 flex flex-row lg:flex-col lg:h-80">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                        className="w-1/2 sm:w-2/3 lg:w-full"
                        alt=""
                      />
                      <figcaption className="border-t p-2 sm:p-4 bg-white text-sm text-[#3C4043] font-medium">
                        Ecommerce Web-app made using MERN stack
                      </figcaption>
                    </figure>
                    <div className="absolute -left-1024 group-hover:left-0 bottom-0 right-0 transition-all duration-700 opacity-10 ease-in-out bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-90 text-2xl font-google w-full h-full">
                      <a
                        href="/"
                        className="text-white h-full flex items-end text-4xl transition duration-500 font-semibold font-google"
                      >
                        <h1 className="text-justify p-2">
                          Ecommerce- Webapplication
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex col-span-1 justify-center justify-self-center items-center rounded-md my-4 mx-2 w-5/6 sm:w-3/4">
                  <div className="group relative block overflow-hidden rounded-md transition-all duration-700">
                    <figure className="border h-36 sm:h-48 md:h-60 flex flex-row lg:flex-col lg:h-80">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                        className="w-1/2 sm:w-2/3 lg:w-full"
                        alt=""
                      />
                      <figcaption className="border-t p-2 sm:p-4 bg-white text-sm text-[#3C4043] font-medium">
                        Ecommerce Web-app made using MERN stack
                      </figcaption>
                    </figure>
                    <div className="absolute -left-1024 group-hover:left-0 bottom-0 right-0 transition-all duration-700 opacity-10 ease-in-out bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-90 text-2xl font-google w-full h-full">
                      <a
                        href="/"
                        className="text-white h-full flex items-end text-4xl transition duration-500 font-semibold font-google"
                      >
                        <h1 className="text-justify p-2">
                          Ecommerce- Webapplication
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
