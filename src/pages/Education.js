import React, { useState, useEffect } from "react";
import Classroom from "../assets/googleClassroom.webp";
import { Tab } from "@headlessui/react";
import Navbar from "../layout/Navbar";
import Loader from "../layout/Loader";
import Gif1 from "../assets/edu2.webp";
import Gif2 from "../assets/edu1.webp";
import Gif3 from "../assets/edu.webp";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Education = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="education flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-y-auto overflow-hidden w-screen items-center">
      {!show ? (
        <Loader title="Education" />
      ) : (
        <div className="w-screen">
          <Navbar image={Classroom} title="Education" search="education" />
          <div
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="flex flex-col h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)] justify-center mx-2 md:mx-40 my-0"
          >
            <Tab.Group>
              <Tab.List className="flex border-2">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-0.5 md:py-1.5 text-sm sm:text-base md:text-xl font-google focus:outline-none",
                      selected
                        ? " bg-[#E53935] text-white "
                        : "text-[#E53935] bg-white"
                    )
                  }
                >
                  Class 10
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-0.5 md:py-1.5 text-sm sm:text-base md:text-xl font-google focus:outline-none",
                      selected
                        ? " bg-[#FBC02D] text-white "
                        : "text-[#FBC02D] bg-white"
                    )
                  }
                >
                  Class 10+2
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-0.5 md:py-1.5 text-sm sm:text-base md:text-xl font-google focus:outline-none",
                      selected
                        ? " bg-[#3569D7] text-white "
                        : "text-[#3569D7] bg-white"
                    )
                  }
                >
                  Bachelor of Technology
                </Tab>
              </Tab.List>
              <Tab.Panels className="border-2 border-t-0 h-full md:h-auto">
                <Tab.Panel className="flex h-full w-full items-center">
                  <div className="flex flex-col w-full md:w-3/5 h-full bg-backgroundSchool bg-center bg-no-repeat p-5">
                    <div className="bg-white opacity-95 h-full rounded-lg">
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          Session :
                        </p>
                        <p className="font-google text-2xl">2016-2017</p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          Board :
                        </p>
                        <p className="font-google text-2xl">CBSE</p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          School :
                        </p>
                        <p className="font-google text-2xl">
                          Little Flowers Public Senior Secondary School
                        </p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-sans font-bold">CGPA :</p>
                        <p className="font-google text-2xl">10 CGPA</p>
                      </span>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src={Gif1}
                    className="hidden  md:block w-2/5 h-full"
                    alt=""
                  />
                </Tab.Panel>
                <Tab.Panel className="flex h-full w-full items-center">
                  <div className="flex flex-col w-full md:w-3/5 h-full bg-backgroundSchool bg-center bg-no-repeat p-5 ">
                    <div className="bg-white opacity-95 h-full w-full rounded-lg">
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          Session :
                        </p>
                        <p className="font-google text-2xl">2018-2019</p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          Board :
                        </p>
                        <p className="font-google text-2xl">CBSE</p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          School :
                        </p>
                        <p className="font-google text-2xl">
                          Little Flowers Public Senior Secondary School
                        </p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-sans font-bold">
                          Percentage :
                        </p>
                        <p className="font-google text-2xl">95.6%</p>
                      </span>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src={Gif2}
                    className="hidden  md:block w-2/5 h-full"
                    alt=""
                  />
                </Tab.Panel>
                <Tab.Panel className="flex h-full w-full items-center">
                  <div className="flex flex-col w-full md:w-3/5 h-full bg-backgroundCollege bg-cover bg-bottom bg-no-repeat p-5">
                    <div className="bg-white opacity-95 h-full w-full rounded-lg">
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          Session :
                        </p>
                        <p className="font-google text-2xl">2019-2023</p>
                      </span>

                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          Branch :
                        </p>
                        <p className="font-google text-2xl">CSE</p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          College :
                        </p>
                        <p className="font-google text-2xl">
                          Dr. Akhilesh Das Gupta Institute Of Technology &
                          Management
                        </p>
                      </span>
                      <span className="flex justify-between w-full px-5 py-2 flex-col">
                        <p className="text-xl font-display font-semibold">
                          Percentage :
                        </p>
                        <p className="font-google text-2xl">
                          88.71%(till 6th semester)
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src={Gif3}
                    className="hidden  md:block w-2/5 h-full"
                    alt=""
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
