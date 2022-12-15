import React from "react";
import Error from "../assets/4042.gif";
import P from "../assets/p-logo.png";
// import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="contact flex flex-col h-[calc(100vh_-_4rem)] overflow-y-auto overflow-x-hidden w-screen items-center justify-center">
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
        <div className="grid grid-cols-5 w-full text-black h-full bg-white items-center ">
          <div className="flex flex-col col-span-2 p-2 w-full justify-evenly items-center text-center h-full">
            <h1 className="text-7xl font-semibold text-orange-500 font-google">
              Oops! It is Error404
            </h1>
            <h1 className="text-4xl font-medium text-[#676767] font-google">
              Look like you're lost. The page you are looking for is either not
              available or doesn't exist!
            </h1>
            <NavLink
              to="/"
              className="flex w-1/2 rounded-full border border-gray-300 items-center p-2 animate-bounce "
            >
              <figure className="flex items-center w-full justify-evenly text-2xl font-google">
                <img src={P} alt="homeicom" className="w-1/4" />
                <figcaption>Back To Home</figcaption>
              </figure>
            </NavLink>
          </div>
          <img
            src={Error}
            alt="Error"
            className="h-1024 w-full col-span-3 px-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Error404;
