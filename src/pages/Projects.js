import React, { useState, useEffect } from "react";
import Drive from "../assets/drive.webp";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoStarOutline } from "react-icons/io5";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { projectData } from "../data/ProjectData";
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

const Projects = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [features, setFeatures] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [links, setLinks] = useState([]);
  let [isProject, setIsProject] = useState(false);
  function closeProject() {
    setImage(null);
    setTitle("");
    setFeatures([]);
    setLinks([]);
    setTechStack([]);
    setIsProject(false);
  }
  function openProject(id) {
    const data = projectData.find((i) => i.id === id);
    setImage(data.image);
    setTitle(data.title);
    setFeatures(data.features);
    setLinks(data.links);
    setTechStack(data.techStack);
    setIsProject(true);
  }
  const [show, setShow] = useState(false);
  useEffect(() => {
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
                {projectData.map((p) => (
                  <div
                    className="flex col-span-1 justify-center justify-self-center items-center rounded-md my-4 mx-2 w-4/5 sm:w-11/12"
                    key={p.id}
                    onClick={() => openProject(p.id)}
                  >
                    <div className="group relative block overflow-hidden rounded-md transition-all duration-700 w-full sm:w-3/4 md:w-full">
                      <figure className="border h-48 xs:h-80 sm:h-96 lg:h-80 flex flex-col w-full">
                        <img
                          loading="lazy"
                          src={p.image}
                          className="w-full lg:w-full h-auto"
                          alt=""
                        />
                        <figcaption className="border-t p-2 sm:p-4 bg-white text-sm xs:text-base text-[#3C4043] font-medium">
                          {p.summary}
                        </figcaption>
                      </figure>
                      <div className="absolute -left-2048 group-hover:left-0 bottom-0 right-0 transition-all duration-700 opacity-10 ease-in-out bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-90 text-2xl font-google w-full h-full">
                        <h1 className="text-white text-justify text-4xl transition duration-500 font-semibold font-google p-2">
                          {p.overlay}
                        </h1>
                      </div>
                    </div>
                    <Dialog
                      as="div"
                      className="relative z-40"
                      open={isProject}
                      onClose={closeProject}
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-20" />
                      <div className="fixed inset-0 w-full">
                        <div className="flex h-full items-center justify-end text-center">
                          <Dialog.Panel className="w-11/12 md:w-3/4 lg:w-2/3 h-auto transform p-1 md:p-2 bg-white transition-all m-auto mt-28 xs:mt-32 md:mt-36 lg:mt-32">
                            <Dialog.Title
                              as="h3"
                              data-aos="fade-down"
                              data-aos-duration="2000"
                              className="flex font-google font-semibold justify-center md:text-xs lg:text-xl text-gray-600 mb-2"
                            >
                              {title}
                            </Dialog.Title>
                            <div className="flex flex-col md:flex-row h-full">
                              <img
                                loading="lazy"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                                src={image}
                                className="w-full md:w-3/5 h-auto "
                                alt=""
                              />
                              <div
                                className="flex flex-col px-2 sm:px-4"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                              >
                                {features.map((f, idx) => (
                                  <p
                                    className="w-full text-sm sm:text-base text-left font-google"
                                    key={idx}
                                  >
                                    {f}
                                    <br />
                                  </p>
                                ))}
                                <span className="text-left font-google">
                                  Tech Used:
                                </span>

                                <div className="flex flex-wrap text-sm w-full">
                                  {techStack.map((t, idx) => (
                                    <p
                                      className="bg-blue-600 text-white p-1 rounded-sm m-1"
                                      key={idx}
                                    >
                                      {t}
                                    </p>
                                  ))}
                                </div>
                                <div className="flex justify-end text-sm sm:text-base w-full">
                                  <a
                                    href={links[0]}
                                    className="bg-slate-700 text-white px-3 py-1 mx-2 rounded-sm outline-none"
                                  >
                                    Live
                                  </a>
                                  <a
                                    href={links[1]}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
