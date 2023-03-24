import React, { Fragment, useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { CgMenuGridO } from "react-icons/cg";
import { IoTrendingUpSharp } from "react-icons/io5";
import { Listbox } from "@headlessui/react";
import ProfileImage from "../assets/profile.webp";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { NavLink, useNavigate } from "react-router-dom";
import Github from "../assets/githubLink.webp";
import Gmail from "../assets/gmail.webp";
import Linked from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import { Dialog, Transition } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const people = [{ id: 1, name: "Pranjay Vats' Portfolio" }];
const Home = () => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const [selectedSearch, setSelectedSearch] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    if (selectedSearch !== "") return navigate("/search");
  }, [selectedSearch, navigate]);

  return (
    <div className="flex flex-col items-center h-full overflow-hidden w-screen ">
      <div className="w-screen">
        <nav
          data-aos="fade-down"
          className="flex px-1 my-2 sm:px-4 h-10 w-screen justify-end py-1 text-[#4D5156]"
        >
          <ul className="flex items-center h-full">
            <li className="mx-1 text-[8px] xs:text-xs sm:mx-2 sm:text-sm md:text-base cursor-pointer hover:underline">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="mx-1 text-[8px] xs:text-xs sm:mx-2 sm:text-sm md:text-base cursor-pointer hover:underline">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="mx-1 text-[8px] xs:text-xs sm:mx-2 sm:text-sm md:text-base cursor-pointer hover:underline">
              <NavLink to="/education">Education</NavLink>
            </li>
            <li className="mx-1 text-[8px] xs:text-xs sm:mx-2 sm:text-sm md:text-base cursor-pointer hover:underline">
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className="mx-1 text-[8px] xs:text-xs sm:mx-2 sm:text-sm md:text-base cursor-pointer hover:underline">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="mx-1 text-sm xs:text-base sm:mx-2 sm:text-xl md:text-2xl cursor-pointer text-[#5F6368] ">
              <CgMenuGridO onClick={openModal} />
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
            <li className="mx-1 flex sm:mx-2 items-center h-full">
              <img
                loading="lazy"
                className="rounded-full h-2/3 w-auto sm:h-5/6 md:h-full"
                src={ProfileImage}
                alt="profile"
              />
            </li>
          </ul>
        </nav>
        <div
          data-aos="zoom-in"
          className="flex justify-center font-google w-screen items-center h-1/6 mt-3 text-3xl xs:text-4xl sm:text-5xl md:text-6xl"
        >
          <span className="text-blue-500">P</span>
          <span className="text-red-500">r</span>
          <span className="text-[#FBBC05]">a</span>
          <span className="text-blue-500">n</span>
          <span className="text-green-500">j</span>
          <span className="text-red-500">a</span>
          <span className="text-[#FBBC05]">y&nbsp;</span>
          <span className="text-blue-500">V</span>
          <span className="text-green-500">a</span>
          <span className="text-[#FBBC05]">t</span>
          <span className="text-red-500">s</span>
        </div>
        <div className="w-screen flex justify-center mb-6 text-[#373a3e]">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Web Developer",
                "Full Stack Developer",
                "Quick Learner",
                "Tech Enthusiast",
              ],
              cursor: "|",
              autoStart: true,
              loop: true,
              changeDelay: 30,
              delay: 40,
              deleteSpeed: 40,
            }}
          ></Typewriter>
        </div>
        <div className="flex flex-col h-auto border mx-auto border-gray-200  rounded-2xl sm:rounded-3xl  w-3/4 sm:w-1/2 lg:w-5/12 hover:shadow-customShadow text-xs sm:text-sm md:text-base">
          <Listbox value={selectedSearch} onChange={setSelectedSearch}>
            <Listbox.Button className="flex focus:outline-none items-center h-full px-2 sm:px-5 py-1.5 sm:py-2.5">
              <GoSearch style={{ color: "#9aa0a6" }} className="mr-3" />
              {selectedSearch
                ? selectedSearch.name
                : "Search Google or type URL"}
            </Listbox.Button>
            <Listbox.Options className=" border-t focus:outline-none p-2">
              <p className="text-sm text-[#5b5e61] ">Trending searches</p>
              {people.map((Search) => (
                <Listbox.Option
                  className="flex items-center mt-1 cursor-pointer "
                  key={Search.id}
                  value={Search}
                  disabled={Search.unavailable}
                >
                  <IoTrendingUpSharp className="text-base mr-3 text-[#9aa0a6]" />
                  {Search.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="flex h-1/12 my-6 w-4/5 xs:w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 font-sans justify-between mx-auto ">
          <NavLink
            to={selectedSearch ? "/search" : "/"}
            data-aos="fade-right"
            data-aos-duration="1300"
            className="flex items-center px-1 sm:px-2 h-1/2 sm:h-4/5 py-1 sm:py-2 rounded text-[10px] sm:text-xs md:text-sm bg-gray-50 cursor-default"
          >
            Google Search
          </NavLink>
          <button
            data-aos="fade-left"
            data-aos-duration="1300"
            className="flex items-center px-1 sm:px-2 h-1/2 sm:h-3/4 py-1 sm:py-2 rounded text-[10px] sm:text-xs md:text-sm bg-gray-50 cursor-default"
          >
            I'm Feeling Lucky
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          className="flex flex-wrap justify-center w-screen mt-6 h-full"
        >
          <h6 className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 md:mx-2 text-[#4D5156] cursor-default">
            Google offered:
          </h6>
          <ul className="flex justify-evenly max-w-sceen ">
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              हिन्दी
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              বাংলা
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              తెలుగు
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              मराठी
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              தமிழ்
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              ગુજરાતી
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              ಕನ್ನಡ
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              മലയാളം
            </li>
            <li className="text-[7px] sm:text-xs md:text-sm mx-[1px] xs:mx-[2px] sm:mx-1 text-blue-800 cursor-default">
              ਪੰਜਾਬੀ
            </li>
          </ul>
        </div>
      </div>
      <footer className="flex fixed bottom-0 left-0 px-1 md:px-2 py-4 bg-[#F2F2F2] justify-evenly w-screen max-w-screen font-sans">
        <ul className="flex items-center w-3/5">
          <li className="mx-[2px] xs:mx-1 md:mx-4 text-[7px] sm:text-sm text-slate-500 cursor-default">
            About
          </li>
          <li className="mx-[2px] xs:mx-1 md:mx-4 text-[7px] sm:text-sm text-slate-500 cursor-default">
            Advertising
          </li>
          <li className="mx-[2px] xs:mx-1 md:mx-4 text-[7px] sm:text-sm text-slate-500 cursor-default">
            Business
          </li>
          <li className="mx-[2px] xs:mx-1 md:mx-4 text-[7px] sm:text-sm text-slate-500 cursor-default">
            How Search works
          </li>
        </ul>
        <ul className="flex justify-end items-center w-2/5">
          <li className="mx-[2px] xs:mx-1 md:mx-4 text-[7px] sm:text-sm text-slate-500 cursor-default">
            Privacy
          </li>
          <li className="mx-[2px] xs:mx-1 md:mx-4 text-[7px] sm:text-sm text-slate-500 cursor-default">
            Terms
          </li>
          <li className="mx-[2px] xs:mx-1 md:mx-4 text-[7px] sm:text-sm text-slate-500 cursor-default">
            Settings
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Home;
