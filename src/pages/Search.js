import React, { Fragment, useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import ProfileImage from "../assets/profile.webp";
import ProfileImage2 from "../assets/aboutImage.webp";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { BiDotsVerticalRounded, BiImage, BiNews } from "react-icons/bi";
import { BsFilePlay } from "react-icons/bs";
import { TfiBookmarkAlt } from "react-icons/tfi";
import SearchIcon from "../assets/search.webp";
import Namaste from "../assets/namaste-covid.gif";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import Github from "../assets/githubLink.webp";
import { Dialog, Transition } from "@headlessui/react";
import Gmail from "../assets/gmail.webp";
import Linked from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Sidebar from "../layout/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const Search = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-x-hidden w-screen overflow-y-auto">
      <nav
        data-aos="fade-down"
        className="flex flex-col sticky bg-white z-10 top-0 sm:px-1 md:px-10 lg:px-256 pt-4 pb-2 h-auto w-full items-center justify-between text-[#4D5156] border-b border-gray-300 "
      >
        <div className="flex w-full justify-between md:pl-10">
          <div className="flex sm:flex-row flex-col w-full items-center justify-start sm:w-3/4 md:4/5">
            <div className="flex items-center justify-between w-full mb-5 px-5 sm:px-0 sm:mb-0 sm:w-auto">
              <div className="block sm:hidden">
                <Sidebar />
              </div>
              <div className=" font-google sm:mr-2 md:mr-5 lg:mr-10 text-2xl md:text-3xl lg:text-4xl">
                <span className="text-blue-500">P</span>
                <span className="text-red-500">r</span>
                <span className="text-[#FBBC05]">a</span>
                <span className="text-blue-500">n</span>
                <span className="text-green-500">j</span>
                <span className="text-red-500">a</span>
                <span className="text-[#FBBC05]">y</span>
                <span className="text-blue-500">V</span>
                <span className="text-green-500">a</span>
                <span className="text-[#FBBC05]">t</span>
                <span className="text-red-500">s</span>
              </div>
              <img
                loading="lazy"
                className="block sm:hidden rounded-full h-8 "
                src={ProfileImage}
                alt="profile"
              />
            </div>
            <div className="flex border text-sm sm:text-base shadow-md justify-between border-gray-200 rounded-3xl px-5 py-2.5 h-auto w-3/4 lg:w-1/2  hover:shadow-customShadow">
              Pranjay Vats' Portfolio{" "}
              <button>
                <IoMdClose className="text-lg sm:text-2xl" />
              </button>
            </div>
          </div>
          <ul className="hidden sm:flex items-center">
            <li className="mr-3">
              <AiOutlineSetting className="text-[#5F6368] text-2xl font-bold" />
            </li>
            <li className="mx-1 md:mx-3 cursor-pointer">
              <CgMenuGridO
                className="text-[#5F6368] text-2xl"
                onClick={openModal}
              />
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-10" />
                  </Transition.Child>
                  <div className="fixed inset-0 overflow-y-auto mr-7">
                    <div className="flex h-1/2 md:2/3 lg:h-5/6 items-center justify-end text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-2/5 sm:w-1/5 md:w-1/6 transform rounded-lg p-1 md:p-2 bg-white shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            className="hidden md:flex font-google font-semibold justify-center md:text-xs lg:text-xl text-gray-600"
                          >
                            My Socials
                          </Dialog.Title>
                          <div className=" grid grid-cols-2  items-center h-full">
                            <a
                              data-aos="fade-down"
                              data-aos-duration="1100"
                              className=" w-full md:p-3 flex flex-col items-center justify-center focus:outline-none"
                              href="https://mail.google.com/mail/?view=cm&to=pranjayvats22062001@gmail.com"
                            >
                              <img
                                loading="lazy"
                                src={Gmail}
                                className="w-5/6 hover:shadow-2xl p-1 rounded-3xl"
                                alt=""
                              />
                              <p className="hidden sm:block sm:text-xs md:text-sm lg:text-base">
                                Gmail
                              </p>
                            </a>
                            <a
                              data-aos="fade-down"
                              data-aos-duration="1200"
                              className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none"
                              href="https://www.linkedin.com/in/pranjay-vats-4bb250205/"
                            >
                              <img
                                loading="lazy"
                                src={Linked}
                                className="w-5/6 hover:shadow-2xl p-1 rounded-3xl"
                                alt=""
                              />
                              <p className="hidden sm:block sm:text-xs md:text-sm lg:text-base">
                                LinkedIn
                              </p>
                            </a>
                            <a
                              data-aos="fade-down"
                              data-aos-duration="1300"
                              className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none "
                              href="https://github.com/PranjayVats"
                            >
                              <img
                                loading="lazy"
                                src={Github}
                                className="w-5/6 hover:shadow-2xl p-1 rounded-3xl"
                                alt=""
                              />
                              <p className="hidden sm:block sm:text-xs md:text-sm lg:text-base">
                                Github
                              </p>
                            </a>
                            <a
                              data-aos="fade-down"
                              data-aos-duration="1400"
                              className="md:p-3 w-full flex flex-col items-center justify-center focus:outline-none"
                              href="https://www.instagram.com/vatspranjay.2206/"
                            >
                              <img
                                loading="lazy"
                                src={Instagram}
                                className="w-5/6 hover:shadow-2xl p-1 rounded-3xl"
                                alt=""
                              />
                              <p className="hidden sm:block sm:text-xs md:text-sm lg:text-base">
                                Instagram
                              </p>
                            </a>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </li>
            <li className="ml-3">
              <img
                loading="lazy"
                className="rounded-full h-8 "
                src={ProfileImage}
                alt="profile"
              />
            </li>
          </ul>
        </div>
        <div className="flex w-full mt-5 md:pl-6">
          <ul className="flex px-3 sm:px-0 items-center w-full lg:w-3/5 justify-around text-xs md:text-sm">
            <li className="flex items-center font-medium">
              <img
                loading="lazy"
                src={SearchIcon}
                className="hidden md:block md:mr-1 md:w-4 md:h-4"
                alt="searchIcon"
              />
              All
            </li>
            <li className="flex items-center font-medium">
              <BiImage className="hidden md:block md:mr-1 text-[#676767]" />
              Images
            </li>
            <li className="flex items-center font-medium">
              <TfiBookmarkAlt className="hidden md:block md:mr-1 text-[#676767]" />
              Books
            </li>
            <li className="flex items-center font-medium">
              <BiNews className="hidden md:block md:mr-1 text-[#676767]" />
              News
            </li>
            <li className="flex items-center font-medium">
              <BsFilePlay className="hidden md:block md:mr-1 text-[#676767]" />
              Videos
            </li>
            <li className="flex items-center font-medium">
              <BiDotsVerticalRounded className="hidden md:block mr-1 md:mr-1 text-[#676767]" />
              More
            </li>
            <li className="text-[#676767] md:py-1 md:px-3 md:ml-20 md:ring-gray-300">
              Tools
            </li>
          </ul>
        </div>
      </nav>
      <div
        data-aos="fade-down"
        data-aos-duration="1100"
        className="px-5 lg:px-512 mt-2"
      >
        <h3 className="text-[#787D82] text-sm">
          About 1,40,00,605 results (0.01 seconds)
        </h3>
        <h1 className="font-sans mt-5 text-2xl text-[#202124]">
          Pranjay Vats' Portfolio
        </h1>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:divide-x text-black my-5">
          <div className="col-span-3 lg:pr-10">
            <div className="flex flex-col">
              <NavLink to="/projects" className="flex flex-col group ">
                <span className="flex text-sm items-center">
                  https://en.wikipedia.org › wiki › Projects{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Pranjay Vats - MyProjects
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                  Ecommerce-Webapplication - It is a webapplicataion made using
                  MERN(MongoDB, Express, React & NodeJS) stack and React Redux.
                  It is fully fledge Ecommerce website with Payment method also.
                </p>
              </NavLink>
              <h2 className="text-lg sm:text-xl md:text-2xl mt-10 mb-4">
                People also ask
              </h2>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex text-sm sm:text-base w-auto lg:w-full justify-between border-t border-gray-300 py-2 font-medium focus:outline-none ">
                      <span className="text-left">
                        What is Pranjay Vats' Education?
                      </span>
                      <FiChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } text-xl text-[#70757A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2">
                      <NavLink to="/education" className="flex flex-col group">
                        <p className="text-sm sm:text-base">
                          Bachelor Of Technology in Computer Science Engineering
                          - Percentage(88.71%) ...
                        </p>
                        <span className="flex text-sm items-center mt-2 text-gray-500">
                          https://en.wikipedia.org › wiki › Education{" "}
                          <BiDotsVerticalRounded className="text-base ml-7" />
                        </span>
                        <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                          Pranjay Vats - MyEducation
                        </h2>
                      </NavLink>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex text-sm sm:text-base w-full justify-between border-t border-gray-300 
                      py-2 font-medium focus:outline-none "
                    >
                      <span className="text-left">
                        What are Pranjay Vats' Skills?
                      </span>
                      <FiChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } text-xl text-[#70757A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2">
                      <NavLink to="/skills" className="flex flex-col group">
                        <p className="text-sm sm:text-base">
                          Programming - C/C++, Frontend - React, Javascript,
                          HTML & CSS, ...
                        </p>
                        <span className="flex text-sm items-center mt-2 text-gray-500">
                          https://en.wikipedia.org › wiki › Skills{" "}
                          <BiDotsVerticalRounded className="text-base ml-7" />
                        </span>
                        <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                          Pranjay Vats - MySkills
                        </h2>
                      </NavLink>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex text-sm sm:text-base w-full justify-between border-t border-gray-300 
                      py-2 font-medium focus:outline-none "
                    >
                      <span className="text-left">
                        How to contact Pranjay Vats?
                      </span>
                      <FiChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } text-xl text-[#70757A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 ">
                      <NavLink to="./contact" className="flex flex-col group">
                        <p className=" text-sm sm:text-base">
                          Gmail Id: pranjayvats22062001@gmail.com , ...
                        </p>
                        <span className="flex text-sm items-center mt-2">
                          https://en.wikipedia.org › wiki › Contact{" "}
                          <BiDotsVerticalRounded className="text-base ml-7" />
                        </span>
                        <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                          Pranjay Vats - MyContact
                        </h2>
                      </NavLink>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <hr className="border-gray-300" />
              <NavLink to="/education" className="flex flex-col group mt-8">
                <span className="flex text-sm items-center">
                  https://en.wikipedia.org › wiki › Education{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Pranjay Vats - MyEducation
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                  Bachelor Of Technology in Computer Science Engineering -
                  Percentage(88.71%) ...
                </p>
              </NavLink>
              <NavLink to="/skills" className="flex flex-col group mt-8">
                <span className="flex text-sm items-center">
                  https://en.wikipedia.org › wiki › Skills{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Pranjay Vats - MySkills
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                  Programming - C/C++, Frontend - React, Javascript, HTML & CSS,
                  ...
                </p>
              </NavLink>
              <NavLink to="/contact" className="flex flex-col group mt-8">
                <span className="flex text-sm items-center">
                  https://en.wikipedia.org › wiki › Contact{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Pranjay Vats - MyContact
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                  Gmail Id: pranjayvats22062001@gmail.com , ...
                </p>
              </NavLink>
            </div>
          </div>
          <div className="col-span-2 lg:pl-10 ">
            <h1 className="text-xl">About</h1>
            <div className="about flex flex-col mt-3">
              <span className="flex items-center">
                Hey everyone!
                <img
                  loading="lazy"
                  src={Namaste}
                  className="w-12 mr-1"
                  alt="namaste"
                />
              </span>
              <p>
                <img
                  loading="lazy"
                  src={ProfileImage2}
                  className="float-right w-1/4 sm:1/12 sm:p-2 md:w-1/6 lg:w-1/3"
                  alt="profileImage"
                />
                My name is Pranjay Vats and I am pursuing my Bachelor in
                Technology from Dr. Akhilesh Das Gupta Institute of Technology &
                Management and my specialization is in Computer Science
                Engineering. I have a deep interest in Web Development and
                especially in frontend development and I have made some full
                stack projects using React & Node js.
              </p>
              <NavLink to="/about" className="text-[#1A0DAB] ">
                Read more...
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
