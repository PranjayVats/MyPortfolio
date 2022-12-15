import React, { Fragment,useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import ProfileImage from "../assets/profile.webp";
import ProfileImage2 from "../assets/aboutImage.png";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { BiDotsVerticalRounded, BiImage, BiNews } from "react-icons/bi";
import { BsFilePlay } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { TfiBookmarkAlt } from "react-icons/tfi";
import SearchIcon from "../assets/search.png";
import Namaste from "../assets/namaste-covid.gif";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Github from "../assets/githubLink.png";
import { Dialog, Transition } from "@headlessui/react";
import Gmail from "../assets/gmail.png";
import Linked from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Search = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.0],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <nav className="flex flex-col sticky bg-white z-40 top-0 px-2 lg:px-480 pt-4 pb-2 h-auto w-full items-center justify-between mt-2 text-[#4D5156] border-b border-gray-300 ">
          <div className="flex w-full justify-between ">
            <div className="flex lg:flex-row flex-col w-full items-center justify-start lg:w-4/5">
              <div className="flex flex-wrap justify-center font-google mx-3 mr-10 lg:text-4xl text-2xl">
                <MdMenu className="block lg:hidden"/>
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
              <div className="flex border shadow-md justify-between border-gray-200 rounded-3xl px-5 py-2.5 h-auto w-4/6 lg:w-1/2  hover:shadow-customShadow2">
                Pranjay Vats' Portfolio{" "}
                <button>
                  <IoMdClose className="text-2xl" />
                </button>
              </div>
            </div>
            <ul className="flex items-center">
              <li className="mr-3 text-base cursor-pointer hover:underline">
                <AiOutlineSetting className="text-[#5F6368] text-2xl font-bold" />
              </li>
              <li className="mx-3 cursor-pointer">
                <CgMenuGridO className="text-[#5F6368] text-2xl" onClick={openModal}
                  />
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModal}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0  bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto mr-7">
                        <div className="flex h-full items-center justify-end p-2 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-1/12 transform overflow-hidden rounded-xl bg-white p-3 text-center align-middle shadow-xl transition-all">
                              <Dialog.Title
                                as="h3"
                                className=" font-google font-semibold text-xl text-gray-600"
                              >
                                My Socials
                              </Dialog.Title>
                              <div className=" flex flex-col items-center h-full">
                                <a
                                  className=" w-full flex justify-center focus:outline-none"
                                  href="https://mail.google.com/mail/?view=cm&to=pranjayvats22062001@gmail.com"
                                >
                                  <img
                                    src={Gmail}
                                    className="w-5/6 hover:shadow-2xl p-2 rounded-3xl" alt=""
                                  />
                                </a>
                                <a
                                  className=" w-full flex justify-center  focus:outline-none"
                                  href="https://www.linkedin.com/in/pranjay-vats-4bb250205/"
                                >
                                  <img
                                    src={Linked}
                                    className="w-5/6 hover:shadow-2xl p-2 rounded-3xl" alt=""
                                  />
                                </a>
                                <a
                                  href="https://github.com/PranjayVats"
                                  className=" w-full flex justify-center focus:outline-none "
                                >
                                  <img
                                    src={Github}
                                    className="w-5/6 hover:shadow-2xl p-2 rounded-3xl" alt=""
                                  />
                                </a>
                                <a
                                  className="w-full flex justify-center focus:outline-none"
                                  href="https://www.instagram.com/vatspranjay.2206/"
                                >
                                  <img
                                    src={Instagram}
                                    className="w-5/6 hover:shadow-2xl p-2 rounded-3xl" alt=""
                                  />
                                </a>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
              </li>
              <li className="ml-3 cursor-pointer ">
                <img
                  className="rounded-full h-8 "
                  src={ProfileImage}
                  alt="profile"
                />
              </li>
            </ul>
          </div>
          <div className="flex w-full mt-5">
            <ul className="flex items-center w-full lg:w-3/5 justify-around text-xs md:text-sm overflow-x-auto">
              <li className="flex items-center font-medium cursor-pointer hover:text-blue-600">
                <img
                  src={SearchIcon}
                  className="hidden md:block md:mr-1 md:w-4 md:h-4"
                  alt="searchIcon"
                />
                All
              </li>
              <li className="flex items-center font-medium cursor-pointer hover:text-blue-600">
                <BiImage className="hidden md:block md:mr-1 text-[#676767]" />
                Images
              </li>
              <li className="flex items-center font-medium cursor-pointer hover:text-blue-600">
                <TfiBookmarkAlt className="hidden md:block md:mr-1 text-[#676767]" />
                Books
              </li>
              <li className="flex items-center font-medium cursor-pointer hover:text-blue-600">
                <BiNews className="hidden md:block md:mr-1 text-[#676767]" />
                News
              </li>
              <li className="flex items-center font-medium cursor-pointer hover:text-blue-600">
                <BsFilePlay className="hidden md:block md:mr-1 text-[#676767]" />
                Videos
              </li>
              <li className="flex items-center font-medium cursor-pointer hover:text-blue-600">
                <BiDotsVerticalRounded className="hidden md:block mr-1 md:mr-1 text-[#676767]" />
                More
              </li>
              <li className="text-[#676767]  md:py-1 md:px-3 md:ml-20 md:hover:ring-1 md:ring-gray-300 md:hover:bg-gray-50">
                Tools
              </li>
            </ul>
          </div>
        </nav>
        <div className="px-5 lg:px-512 mt-2">
          <h3 className="text-[#787D82] text-sm">
            About 1,40,00,605 results (0.01 seconds)
          </h3>
          <h1 className="font-sans mt-5 text-2xl text-[#202124]">
            Pranjay Vats' Portfolio
          </h1>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:divide-x text-black h-full mt-4 ">
            <div className="searchRelated col-span-3 pr-10">
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
                    Ecommerce-Webapplication - It is a webapplicataion made
                    using MERN(MongoDB, Express, React & NodeJS) stack and React
                    Redux. It is fully fledge Ecommerce website with Payment
                    method also.
                  </p>
                </NavLink>
                <h2 className="text-2xl mt-10">People also ask</h2>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className="flex w-auto lg:w-full justify-between border-t border-gray-300 
                      py-2 font-medium focus:outline-none "
                      >
                        <span className="">
                          What is Pranjay Vats' Education?
                        </span>
                        <FiChevronDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } text-xl text-[#70757A]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                        <NavLink
                          to="/education"
                          className="flex flex-col group"
                        >
                          <p className="text-sm text-[#65696E]">
                            Bachelor Of Technology in Computer Science
                            Engineering - Percentage(88.71%) ...
                          </p>
                          <span className="flex text-sm items-center mt-2">
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
                        className="flex w-full justify-between border-t border-gray-300 
                      py-2 font-medium focus:outline-none "
                      >
                        <span className="">What are Pranjay Vats' Skills?</span>
                        <FiChevronDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } text-xl text-[#70757A]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                        <NavLink to="/skills" className="flex flex-col group">
                          <p className="text-sm text-[#65696E]">
                            Programming - C/C++, Frontend - React, Javascript,
                            HTML & CSS, ...
                          </p>
                          <span className="flex text-sm items-center mt-2">
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
                        className="flex w-full justify-between border-t  border-gray-300 
                      py-2 font-medium focus:outline-none "
                      >
                        <span className="">How to contact Pranjay Vats?</span>
                        <FiChevronDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } text-xl text-[#70757A]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-2 text-sm text-gray-500 border-gray-300 ">
                        <NavLink to="./contact" className="flex flex-col group">
                          <p className="text-sm text-[#65696E]">
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
                <hr></hr>
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
                    Programming - C/C++, Frontend - React, Javascript, HTML &
                    CSS, ...
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
            <div className="about lg:pl-10 col-span-2">
              <h1 className="text-2xl">About</h1>
              <div className="about flex flex-col mt-5">
                <span className="flex items-center">
                  Hey everyone!
                  <img src={Namaste} className="w-12 mr-1" alt="namaste" />
                </span>
                <p>
                  <img
                    src={ProfileImage2}
                    className="float-right w-1/4 md:w-1/6 lg:w-1/3"
                    alt="profileImage"
                  />
                  My name is Pranjay Vats and I am pursuing my Bachelor in
                  Technology from Dr. Akhilesh Das Gupta Institute of Technology
                  & Management and my specialization is in Computer Science
                  Engineering.
                </p>
                <p>
                  I have a deep interest in Web Development and especially in
                  frontend development and I have made some full stack projects
                  using React & Node js.
                </p>
                <NavLink to="/about" className="text-[#1A0DAB] ">
                  Read more...
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Search;
