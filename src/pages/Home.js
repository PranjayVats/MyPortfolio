import React, { Fragment, useState } from "react";
import { GoSearch } from "react-icons/go";
import { CgMenuGridO } from "react-icons/cg";
import { IoTrendingUpSharp } from "react-icons/io5";
import { Listbox } from "@headlessui/react";
import ProfileImage from "../assets/profile.webp";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Github from "../assets/githubLink.png";
import Gmail from "../assets/gmail.png";
import Linked from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import { Dialog, Transition } from "@headlessui/react";

const people = [{ id: 1, name: "Pranjay Vats' Portfolio" }];

const Home = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [selectedSearch, setSelectedSearch] = useState();

  return (
    <div className="home flex flex-col items-center h-screen w-screen ">
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
        <nav className="flex flex-row px-4 h-10 w-screen justify-end mt-2 text-[#4D5156]">
          <ul className="flex items-center">
            <li className="mx-3 text-base cursor-pointer hover:underline">
              Projects
            </li>
            <li className="mx-3 text-base cursor-pointer hover:underline">
              Portfolio
            </li>
            <li className="mx-3 text-base cursor-pointer hover:underline">
              About
            </li>
            <li className="mx-3 text-base cursor-pointer hover:underline">
              Skills
            </li>
            <li className="mx-3 text-base cursor-pointer hover:underline">
              Contact
            </li>
            <li className="mx-3 cursor-pointer text-[#5F6368] text-2xl">
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
                                className="w-5/6 hover:shadow-2xl p-2 rounded-3xl"
                                alt=""
                              />
                            </a>
                            <a
                              className=" w-full flex justify-center  focus:outline-none"
                              href="https://www.linkedin.com/in/pranjay-vats-4bb250205/"
                            >
                              <img
                                src={Linked}
                                className="w-5/6 hover:shadow-2xl p-2 rounded-3xl"
                                alt=""
                              />
                            </a>
                            <a
                              href="https://github.com/PranjayVats"
                              className=" w-full flex justify-center focus:outline-none "
                            >
                              <img
                                src={Github}
                                className="w-5/6 hover:shadow-2xl p-2 rounded-3xl"
                                alt=""
                              />
                            </a>
                            <a
                              className="w-full flex justify-center focus:outline-none"
                              href="https://www.instagram.com/vatspranjay.2206/"
                            >
                              <img
                                src={Instagram}
                                className="w-5/6 hover:shadow-2xl p-2 rounded-3xl"
                                alt=""
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
            <li className="mx-3 cursor-pointer">
              <img
                className="rounded-full h-9 "
                src={ProfileImage}
                alt="profile"
              />
            </li>
          </ul>
        </nav>

        <div className="flex flex-wrap justify-center font-google w-screen items-end mb-2 text-7xl">
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
        <div className="w-screen flex justify-center">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Full Stack Developer",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
              changeDelay: 20,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col border border-gray-200 mt-6 rounded-3xl px-5 py-2.5 h-auto w-5/12 hover:shadow-customShadow">
            <Listbox value={selectedSearch} onChange={setSelectedSearch}>
              <Listbox.Button className="flex items-center ">
                <GoSearch style={{ color: "#9aa0a6" }} className="mr-3" />
                {selectedSearch
                  ? selectedSearch.name
                  : "Search Google or type URL"}
              </Listbox.Button>
              <Listbox.Options className="mt-2 border-t focus:outline-none">
                <p className="text-sm text-[#5b5e61] mt-3">Trending searches</p>
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
        </div>

        <div className="flex mt-6 font-sans w-full justify-center">
          <NavLink
            to={selectedSearch ? "/search" : "/"}
            className="rounded text-sm py-2 px-3 m-1 bg-gray-50 hover:ring-1 ring-gray-300"
          >
            Google Search
          </NavLink>
          <button className="rounded text-sm py-2 px-3 m-1 bg-gray-50 hover:ring-1 ring-gray-300">
            I'm Feeling Lucky
          </button>
        </div>
        <div className="flex flex-wrap justify-center w-screen mt-6  max-w-screen">
          <h6 className="text-sm mx-2 text-[#4D5156]">Google offered:</h6>
          <ul className="flex flex-wrap w-auto max-w-sceen justify-">
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              हिन्दी
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              বাংলা
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              తెలుగు
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              मराठी
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              தமிழ்
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              ગુજરાતી
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              ಕನ್ನಡ
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              മലയാളം
            </li>
            <li className="mx-1 text-sm text-blue-800 cursor-pointer hover:underline">
              ਪੰਜਾਬੀ
            </li>
          </ul>
        </div>
      </motion.div>
      <footer className="flex flex-wrap fixed bottom-0 left-0 px-2 py-4 bg-[#F2F2F2] justify-between w-screen max-w-screen font-sans">
        <ul className="flex flex-wrap">
          <li className="mx-4 cursor-pointer text-sm text-slate-500 hover:underline">
            About
          </li>
          <li className="mx-4 cursor-pointer text-sm text-slate-500 hover:underline">
            Advertising
          </li>
          <li className="mx-4 cursor-pointer text-sm text-slate-500 hover:underline">
            Business
          </li>
          <li className="mx-4 cursor-pointer text-sm text-slate-500 hover:underline">
            How Search works
          </li>
        </ul>
        <ul className="flex flex-wrap">
          <li className="mx-4 text-sm cursor-pointer text-slate-500 hover:underline">
            Privacy
          </li>
          <li className="mx-4 text-sm cursor-pointer text-slate-500 hover:underline">
            Terms
          </li>
          <li className="mx-4 text-sm cursor-pointer text-slate-500 hover:underline">
            Settings
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Home;
