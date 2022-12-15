import React, { Fragment, useState} from "react";
import { IoMdOptions } from "react-icons/io";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import ProfileImage from "../assets/profile.webp";
import { Dialog, Transition } from "@headlessui/react";
import Github from "../assets/githubLink.png";
import Gmail from "../assets/gmail.png";
import Linked from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Navbar = (props) => {
    let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
      <nav className="flex sticky bg-white z-40 top-0 px-5 h-auto w-screen items-center justify-between py-2 border-b border-gray-300 ">
        <div className="flex items-center justify-start w-4/5">
          <figure className="flex flex-wrap justify-between items-center text-[#5F6368] text-xl font-google mr-10">
            <img src={props.image} className="w-10 mr-2" alt="drive-Logo" />
            <figcaption>{props.title}</figcaption>
          </figure>
          <div className="flex items-center justify-between px-5 py-2.5 rounded-lg w-4/6 lg:w-1/2 bg-[#F1F3F4]">
            <span className="flex text-[#676B6F]">
              <AiOutlineSearch className="text-2xl mr-3" />
              Search in {props.search}
            </span>

            <button>
              <IoMdOptions className="text-2xl text-[#676B6F]" />
            </button>
          </div>
        </div>
        <ul className="flex items-center">
          <li className="mr-3 text-base cursor-pointer hover:underline">
            <AiOutlineSetting className="text-[#5F6368] text-2xl font-bold" />
          </li>
          <li className="mx-3 cursor-pointer">
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
          <li className="ml-3 cursor-pointer">
            <img
              className="rounded-full h-8 "
              src={ProfileImage}
              alt="profile"
            />
          </li>
        </ul>
      </nav>
  );
};
export default Navbar;
