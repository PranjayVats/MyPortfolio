import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import P from "../assets/p-logo.png";
import Drive from "../assets/drive.png";
import { IoMdOptions } from "react-icons/io";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import ProfileImage from "../assets/profile.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const Temp = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="Temp flex flex-col h-[calc(100vh_-_4rem)] overflow-y-auto overflow-hidden w-screen items-center">
      {!show && (
        <div className="flex flex-col h-full w-1/2 items-center bg-backgroundGif bg-no-repeat bg-cover bg-center justify-center">
          <figure className="flex flex-col w-3/4 h-auto items-center justify-center text-5xl ">
            <img className="w-2/3" src={P} alt="logo" />
            <figcaption className="font-google">Temp</figcaption>
          </figure>
          <div className="progress flex w-1/2 bg-gray-300 border-gray-300 h-3 rounded-full mt-5">
            <div className="progress-value h-full bg-orange-400 animate-preloader rounded-full"></div>
          </div>
        </div>
      )}
      {show && (
        <div className="flex flex-col w-full h-full">
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
            <nav className="flex sticky bg-white z-50 top-0 px-5 h-auto w-screen items-center justify-between py-2 border-b border-gray-300 ">
              <div className="flex items-center justify-start w-4/5">
                <figure className="flex flex-wrap justify-between items-center text-[#5F6368] text-xl font-google mr-10">
                  <img src={Drive} className="w-10 mr-2" alt="drive-Logo" />
                  <figcaption>Temp</figcaption>
                </figure>
                <div className="flex items-center justify-between px-5 py-2.5 rounded-lg w-4/6 lg:w-1/2 bg-[#F1F3F4]">
                  <span className="flex text-[#676B6F]">
                    <AiOutlineSearch className="text-2xl mr-3" />
                    Search in Drive
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
                  <CgMenuGridO className="text-[#5F6368] text-2xl" />
                </li>
                <li className="ml-3 cursor-pointer ">
                  <img
                    className="rounded-full h-8 "
                    src={ProfileImage}
                    alt="profile"
                  />
                </li>
              </ul>
            </nav>
            {/* </motion.div> */}
            <div className="text-black h-full">
              <h2>Center Mode</h2>
              <h4>First Slider</h4>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Temp;
