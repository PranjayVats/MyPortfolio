import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Classroom from "../assets/googleClassroom.png";
import { Tab } from "@headlessui/react";
import Navbar from "../layout/Navbar";
import Loader from "../layout/Loader";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Education = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="education flex flex-col h-[calc(100vh_-_4rem)] overflow-y-auto overflow-hidden w-screen items-center">
      {!show ? (
        <Loader title="Education" />
      ) : (
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
          {" "}
          <Navbar image={Classroom} title="Education" search="education" />
          <div className="mx-20 border-4">
            <Tab.Group>
              <Tab.List className="flex border-b-4">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-2.5 text-xl font-google focus:outline-none",
                      selected
                        ? " bg-[#E53935] text-white "
                        : "text-[#E53935] bg-white"
                    )
                  }
                >
                  Class X
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-2.5 text-xl font-google focus:outline-none",
                      selected
                        ? " bg-[#FBC02D] text-white "
                        : "text-[#FBC02D] bg-white"
                    )
                  }
                >
                  Class XII
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-2.5 text-xl font-google focus:outline-none",
                      selected
                        ? " bg-[#3569D7] text-white "
                        : "text-[#3569D7] bg-white"
                    )
                  }
                >
                  Bachelor Of Technology(B.Tech)
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className="flex h-auto w-full">
                  <div className="flex flex-col w-1/3 h-[calc(100vh_-_11.2rem)] bg-[#E53935] p-8">
                    <div className="bg-white h-full w-full rounded-lg">
                      <span className="flex justify-between w-full p-5 flex-col">
                        <p className="text-xl font-sans font-extrabold">
                          Session :
                        </p>
                        <p className="font-google text-2xl">2016-2017</p>
                      </span>
                      <span className="flex justify-between w-full p-5 flex-col">
                        <p className="text-xl font-sans font-extrabold">
                          School :
                        </p>
                        <p className="font-google text-2xl">
                          Little Flowers Public Senior Secondary School
                        </p>
                      </span>
                      <span className="flex justify-between w-full p-5 flex-col">
                        <p className="text-xl font-sans font-bold">CGPA :</p>
                        <p className="font-google text-2xl">10 CGPA</p>
                      </span>
                    </div>
                  </div>
                  <div className="bg-backgroundSchool bg-center bg-no-repeat w-1/3 "></div>
                  <div className="bg-backgroundEdu2Gif bg-contain bg-center bg-no-repeat w-1/3 "></div>
                </Tab.Panel>
                <Tab.Panel className="flex h-auto w-full justify-center">
                  <div className="bg-backgroundEdu1Gif bg-contain  bg-center bg-no-repeat w-1/3 "></div>
                  <div className="flex flex-col w-1/3 h-[calc(100vh_-_11.2rem)] bg-[#FBC02D] p-8 ">
                    <div className="bg-white h-full w-full rounded-lg">
                      <span className="flex justify-between w-full p-5 flex-col">
                        <p className="text-xl font-sans font-extrabold">
                          Session :
                        </p>
                        <p className="font-google text-2xl">2018-2019</p>
                      </span>
                      <span className="flex justify-between w-full p-5 flex-col">
                        <p className="text-xl font-sans font-extrabold">
                          School :
                        </p>
                        <p className="font-google text-2xl">
                          Little Flowers Public Senior Secondary School
                        </p>
                      </span>
                      <span className="flex justify-between w-full p-5 flex-col">
                        <p className="text-xl font-sans font-bold">
                          Percentage :
                        </p>
                        <p className="font-google text-2xl">95.6%</p>
                      </span>
                    </div>
                  </div>
                  <div className="bg-backgroundSchool bg-center bg-no-repeat w-1/3 "></div>
                </Tab.Panel>
                <Tab.Panel className="flex h-auto w-full justify-end">
                  <div className="bg-backgroundCollege bg-bottom bg-no-repeat w-1/3 "></div>
                  <div className="bg-backgroundEduGif bg-contain  bg-center bg-no-repeat w-1/3 "></div>
                  <div className="flex flex-col w-1/3 h-[calc(100vh_-_11.2rem)] bg-[#3569D7] p-8">
                    <div className="bg-white h-full w-full rounded-lg">
                      <span className="flex justify-between w-full p-3 flex-col">
                        <p className="text-lg font-sans font-extrabold">
                          Branch :
                        </p>
                        <p className="font-google text-xl">
                          Computer Science Engineering
                        </p>
                      </span>
                      <span className="flex justify-between w-full p-3 flex-col">
                        <p className="text-lg font-sans font-extrabold">
                          Session :
                        </p>
                        <p className="font-google text-xl">2019-2023</p>
                      </span>
                      <span className="flex justify-between w-full p-3 flex-col">
                        <p className="text-lg font-sans font-extrabold">
                          College :
                        </p>
                        <p className="font-google text-xl">
                          Dr. Akhilesh Das Gupta Institute Of Technology &
                          Management
                        </p>
                      </span>
                      <span className="flex justify-between w-full p-3 flex-col">
                        <p className="text-lg font-sans font-extrabold">
                          Percentage :
                        </p>
                        <p className="font-google text-xl">
                          88.71%(till 6th semester)
                        </p>
                      </span>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Education;
