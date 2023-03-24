import React, { useState, useEffect } from "react";
import Drive from "../assets/drive.webp";
import Portfolio from "../assets/portfolio.webp";
import Ecommerce from "../assets/ecommerce.webp";
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
import AddIcon from "../assets/addIcon.webp";
import { FaGoogleDrive } from "react-icons/fa";
import Navbar from "../layout/Navbar";
import Loader from "../layout/Loader";
import { Dialog } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  let [isProject1, setIsProject1] = useState(false);
  function closeProject1() {
    setIsProject1(false);
  }
  function openProject1() {
    setIsProject1(true);
  }
  let [isProject2, setIsProject2] = useState(false);
  function closeProject2() {
    setIsProject2(false);
  }
  function openProject2() {
    setIsProject2(true);
  }
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
            <div
              data-aos="fade-right"
              data-aos-duration="1100"
              className="sidebar hidden lg:flex flex-col flex-wrap col-span-1 cursor-default"
            >
              <figure className="flex w-1/2 border-gray-200 border shadow-md rounded-3xl m-3 px-4 py-2.5">
                <img
                  loading="lazy"
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
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-2">
                <GoTriangleRight className="text-sm mr-2" />
                <MdDevices className="text-xl mr-4" />
                Computers
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7">
                <MdOutlinePeopleAlt className="text-xl mr-4" />
                Shared with me
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7">
                <MdAccessTime className="text-xl mr-4" />
                Recent
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7">
                <IoStarOutline className="text-xl mr-4" />
                Starred
              </div>
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] mb-2 p-2 pl-7">
                <RiDeleteBin6Line className="text-xl mr-4" />
                Trash
              </div>
              <hr />
              <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] mb-2 p-2 mt-2 pl-7l">
                <MdCloudQueue className="text-xl mr-4" />
                Storage
              </div>
              <div className="flex flex-col w-3/4 bg-[#E0E0E0] rounded-full h-1 ml-7">
                <div className="bg-[#1A73E8] h-full rounded-full w-1/12"></div>
              </div>
              <div className="flex flex-col font-sans text-xs text-[#5F6368] mt-2 ml-7">
                <p>1.1 GB of 15 GB used</p>
                <button className="justify-self-center w-2/3 mt-2 border py-2 text-sm px-1 border-gray-200  rounded-md text-[#185ABC] cursor-default">
                  Buy Storage
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              className="main h-full w-full flex flex-col lg:col-span-4"
            >
              <div className="flex flex-row justify-between items-center my-2 mx-2">
                <div className="flex px-2 py-1 text-[#3C4043] items-center rounded-lg">
                  <p>My Drive</p>
                  <GoTriangleDown className="ml-2 text-[#939699]" />
                </div>
                <div className="flex w-1/12 justify-around text-[#939699] text-2xl">
                  <MdOutlineViewList className="text-[#686868]" />
                  <MdInfoOutline className="text-[#686868]" />
                </div>
              </div>
              <hr />
              <h1 className="text-[#62666B] mx-4 my-2 text-sm font-medium ">
                Files
              </h1>
              <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3">
                <div
                  className="flex col-span-1 justify-center justify-self-center items-center rounded-md my-4 mx-2 w-4/5 sm:w-11/12"
                  onClick={openProject1}
                >
                  <div className="group relative block overflow-hidden rounded-md transition-all duration-700 w-full sm:w-3/4 md:w-full">
                    <figure className="border h-48 xs:h-80 sm:h-96 lg:h-80 flex flex-col w-full">
                      <img
                        loading="lazy"
                        src={Ecommerce}
                        className="w-full lg:w-full h-auto"
                        alt=""
                      />
                      <figcaption className="border-t p-2 sm:p-4 bg-white text-sm xs:text-base text-[#3C4043] font-medium">
                        Ecommerce Web-app made using MERN stack & Redux.
                      </figcaption>
                    </figure>
                    <div className="absolute -left-2048 group-hover:left-0 bottom-0 right-0 transition-all duration-700 opacity-10 ease-in-out bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-90 text-2xl font-google w-full h-full">
                      <h1 className="text-white text-justify text-4xl transition duration-500 font-semibold font-google p-2">
                        Ecommerce- Webapplication
                      </h1>
                    </div>
                  </div>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    open={isProject1}
                    onClose={closeProject1}
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-40" />
                    <div className="fixed inset-0 w-full">
                      <div
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        className="flex h-full items-center justify-end text-center"
                      >
                        <Dialog.Panel className="w-11/12 md:w-3/4 lg:w-2/3 h-auto transform rounded-lg p-1 md:p-2 bg-white shadow-xl transition-all m-auto mt-28 xs:mt-32 md:mt-36 lg:mt-32">
                          <Dialog.Title
                            as="h3"
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            className="flex font-google font-semibold justify-center md:text-xs lg:text-xl text-gray-600 mb-2"
                          >
                            Ecommerce Web-app
                          </Dialog.Title>
                          <div className="flex flex-col md:flex-row h-full">
                            <img
                              loading="lazy"
                              data-aos="fade-right"
                              data-aos-duration="2000"
                              src={Ecommerce}
                              className="w-full md:w-3/5 h-auto "
                              alt=""
                            />
                            <div
                              className="flex flex-col px-2 sm:px-4"
                              data-aos="fade-left"
                              data-aos-duration="2000"
                            >
                              <p className="w-full text-sm sm:text-base text-left font-google">
                                An e-commerce web application to buy products
                                online. Key features are: <br />
                                1. Filter feature based on rating, price, and
                                product categories.
                                <br />
                                2. Add to Cart feature.
                                <br /> 3. Order Tracking feature.
                                <br /> 4. Payment feature to buy products.
                                <br /> 5. Admin Dashboard feature to do CRUD
                                operations on User, Products, and Orders by the
                                Admin.
                                <br />
                                <span className="text-left font-google">
                                  Tech Used:
                                </span>
                              </p>

                              <div className="flex flex-wrap text-sm w-full">
                                <p className="bg-blue-600 text-white p-1 rounded-sm m-1">
                                  React
                                </p>
                                <p className="bg-blue-600 text-white p-1 rounded-sm m-1">
                                  MongoDB
                                </p>
                                <p className="bg-blue-600 text-white p-1 rounded-sm m-1">
                                  ExpressJS
                                </p>
                                <p className="bg-blue-600 text-white p-1 rounded-sm m-1">
                                  NodeJS
                                </p>
                                <p className="bg-blue-600 text-white p-1 rounded-sm m-1">
                                  Redux
                                </p>
                              </div>
                              <div className="flex justify-end text-sm sm:text-base w-full">
                                <a
                                  href="https://ecommerce-backend-2trj.onrender.com/"
                                  className="bg-slate-700 text-white px-3 py-1 mx-2 rounded-sm"
                                >
                                  Live
                                </a>
                                <a
                                  href="https://github.com/PranjayVats/Ecommerce-Project-MERN-Stack"
                                  className="bg-slate-700 text-white px-3 py-1 mx-2 rounded-sm"
                                >
                                  Source Code
                                </a>
                              </div>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </div>
                    </div>
                  </Dialog>{" "}
                </div>

                <div
                  className="flex col-span-1 justify-center justify-self-center items-center rounded-md my-4 mx-2 w-4/5 sm:w-11/12"
                  onClick={openProject2}
                >
                  <div className="group relative block overflow-hidden rounded-md transition-all duration-700 w-full sm:w-3/4 md:w-full">
                    <figure className="border h-48 xs:h-80 sm:h-96 lg:h-80 flex flex-col w-full">
                      <img
                        loading="lazy"
                        src={Portfolio}
                        className="w-full lg:w-full h-auto"
                        alt=""
                      />
                      <figcaption className="border-t p-2 sm:p-4 bg-white text-sm xs:text-base text-[#3C4043] font-medium">
                        Portfolio Web-app made using React & Tailwind CSS.
                      </figcaption>
                    </figure>
                    <div className="absolute -left-2048 group-hover:left-0 bottom-0 right-0 transition-all duration-700 opacity-10 ease-in-out bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-90 text-2xl font-google w-full h-full">
                      <h1 className="text-white text-justify text-4xl transition duration-500 font-semibold font-google p-2">
                        Portfolio- Webapplication
                      </h1>
                    </div>
                  </div>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    open={isProject2}
                    onClose={closeProject2}
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-40" />
                    <div className="fixed inset-0 w-full">
                      <div
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        className="flex h-full items-center justify-end text-center"
                      >
                        <Dialog.Panel className="w-11/12 md:w-3/4 lg:w-2/3 h-auto transform rounded-lg p-1 md:p-2 bg-white shadow-xl transition-all m-auto mt-28 xs:mt-32 md:mt-36 lg:mt-32">
                          <Dialog.Title
                            as="h3"
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            className="flex font-google font-semibold justify-center md:text-xs lg:text-xl text-gray-600 mb-2"
                          >
                            Portfolio Web-app
                          </Dialog.Title>
                          <div className="flex flex-col md:flex-row h-full">
                            <img
                              loading="lazy"
                              data-aos="fade-right"
                              data-aos-duration="2000"
                              src={Portfolio}
                              className="w-full md:w-3/5 h-auto "
                              alt=""
                            />
                            <div
                              className="flex flex-col px-2 sm:px-4"
                              data-aos="fade-left"
                              data-aos-duration="2000"
                            >
                              <p className="w-full text-sm sm:text-base text-left font-google">
                                My Portfolio web application based on GOOGLE
                                theme.
                                <br />
                                <span className="text-left font-google">
                                  Tech Used:
                                </span>
                              </p>

                              <div className="flex flex-wrap text-sm w-full">
                                <p className="bg-blue-600 text-white p-1 rounded-sm m-1">
                                  React
                                </p>
                                <p className="bg-blue-600 text-white p-1 rounded-sm m-1">
                                  Tailwind CSS
                                </p>
                              </div>
                              <div className="flex justify-end text-sm sm:text-base w-full">
                                <a
                                  href="https://pranjay-vats-portfolio.netlify.app/"
                                  className="bg-slate-700 text-white px-3 py-1 mx-2 rounded-sm"
                                >
                                  Live
                                </a>
                                <a
                                  href="https://github.com/PranjayVats/MyPortfolio"
                                  className="bg-slate-700 text-white px-3 py-1 mx-2 rounded-sm"
                                >
                                  Source Code
                                </a>
                              </div>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </div>
                    </div>
                  </Dialog>{" "}
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
