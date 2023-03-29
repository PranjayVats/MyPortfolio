import React, { useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import ProfileImage from "../assets/profile.webp";
import { Dialog } from "@headlessui/react";
import Github from "../assets/githubLink.webp";
import Gmail from "../assets/gmail.webp";
import Linked from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Sidebar from "./Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = (props) => {
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
          <CgMenuGridO
            className="text-[#5F6368] text-2xl"
            onClick={openModal}
          />
          <Dialog
            as="div"
            className="relative z-10"
            open={isOpen}
            onClose={closeModal}
          >
            <div className="fixed inset-0 bg-black bg-opacity-10" />
            <div className="fixed inset-0 overflow-y-auto mr-7">
              <div className="flex h-1/2 md:2/3 lg:h-5/6 items-center justify-end text-center">
                <Dialog.Panel className="w-2/5 sm:w-1/5 md:w-1/6 transform rounded-lg p-1 md:p-2 bg-white shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    data-aos="fade-down"
                    data-aos-duration="1100"
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
              </div>
            </div>
          </Dialog>
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
