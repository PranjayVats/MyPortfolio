import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileImage2 from "../assets/aboutImage2.jpg";
import Namaste from "../assets/namaste-covid.gif";
import GoogleCloud from "../assets/googleCloud.svg";
import Photos from "../assets/googlePhotos.png";
import Loader from "../layout/Loader";
import Navbar from "../layout/Navbar";

const About = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="about flex flex-col overflow-y-auto h-[calc(100vh_-_4rem)]  overflow-x-hidden w-screen items-center ">
      {!show ? (
        <Loader title="About" />
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
          <Navbar image={Photos} title="About" search="Photos" />
          <div className="grid grid-cols-3 items-center divide-x divide-orange-400 gap-10 gap-x-10 h">
            <div className="flex flex-col items-end p-1 col-span-1">
              <img
                src={ProfileImage2}
                className="w-4/5 border-orange-400 border-8 border-double mt-10"
                alt="profileImage"
              ></img>
            </div>
            <div className="flex flex-col col-span-2 px-10 font-google text-lg font-medium text-[#676767] ">
              <span className="flex items-center ">
                <img src={Namaste} className="w-12 mr-1" alt="namaste" />
                Hey everyone!
                <img src={Namaste} className="w-12 mr-1" alt="namaste" />
              </span>
              <p className="mt-5 text-justify">
                My name is Pranjay Vats and I am pursuing my Bachelor in
                Technology from Dr. Akhilesh Das Gupta Institute of Technology &
                Management and my specialization is in Computer Science
                Engineering.
              </p>
              <p className="mt-5 text-justify">
                I have a deep interest in Web Development and especially in
                frontend development and I have made some full stack projects
                using React & Node js. And to use my web development skills I
                have participated in many hackathons and I and my team has also
                been a grand finalist in Smart India Hackathon 2022. My
                strengths are my self-confidence and my willingness to improve
                myself. My hobbies are listening to music and various podcasts
                and reading books.
              </p>
              <p className="mt-5 text-xl font-medium text-[#676767] text-justify">
                Currently I am looking to join a tech company where I can learn
                from others as well as apply the knowledge which I have learned
                in my college life.
              </p>
              <a
                className="flex rounded-3xl w-1/4 justify-between border border-orange-500 items-center p-2 animate-bounce mt-8"
                href="./MyResume.pdf"
                download
                target="_blank"
              >
                <figure className="flex w-auto text-lg justify-center">
                  <img
                    src={GoogleCloud}
                    alt="googlecloud"
                    className="w-1/5 mr-1"
                  />
                  <figcaption className="flex">My Resume</figcaption>
                </figure>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default About;