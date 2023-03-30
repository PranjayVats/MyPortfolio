import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CgMenuGridO } from "react-icons/cg";
import Github from "../assets/githubLink.webp";
import Gmail from "../assets/gmail.webp";
import Linked from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";

function SocialDialog() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CgMenuGridO
        className="text-[#5F6368] text-2xl"
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        as="div"
        className="relative z-10"
        open={isOpen}
        onClose={() => setIsOpen(false)}
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
    </>
  );
}

export default SocialDialog;
