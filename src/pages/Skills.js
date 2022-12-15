import React, {useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import News from "../assets/googleNews.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";
import reactIcon from "../assets/react.png";
import expressIcon from "../assets/express.png";
import mongodbIcon from "../assets/mongodb.png";
import nodeIcon from "../assets/nodejs.png";
import htmlIcon from "../assets/html5.png";
import cssIcon from "../assets/css3.png";
import cIcon from "../assets/c.png";
import cPlusIcon from "../assets/c++.png";
import firebaseIcon from "../assets/firebase.png";
import herokuIcon from "../assets/heroku.png";
import gitIcon from "../assets/git.png";
import githubIcon from "../assets/github.png";
import javascriptIcon from "../assets/javascript.png";
import tailwindIcon from "../assets/tailwind.png";
import netlifyIcon from "../assets/netlify.png";
import reduxIcon from "../assets/redux.png";
import Loader from "../layout/Loader";
import Navbar from "../layout/Navbar";

const Skills = () => {
  let [skillset] = useState({
    Programming: [
      {
        id: 1,
        heading: "Programming Languages",
        title: "C",
        url: cIcon,
      },
      {
        id: 2,
        title: "C++",
        url: cPlusIcon,
      },
    ],
    Frontend: [
      {
        id: 1,
        heading: "Frontend",
        title: "React",
        url: reactIcon,
      },
      {
        id: 2,
        title: "Javascript",
        url: javascriptIcon,
      },
      {
        id: 3,
        title: "HTML",
        url: htmlIcon,
      },
      {
        id: 4,
        title: "CSS",
        url: cssIcon,
      },
      {
        id: 5,
        title: "Tailwind",
        url: tailwindIcon,
      },
    ],
    Backend: [
      {
        id: 1,
        heading: "Backend",
        title: "Express",
        url: expressIcon,
      },
      {
        id: 2,
        title: "NodeJS",
        url: nodeIcon,
      },
    ],
    Database: [
      {
        id: 1,
        heading: "Database",
        title: "Mongodb",
        url: mongodbIcon,
      },
    ],
    DevelopmentTools: [
      {
        id: 1,
        heading: "Web Development Tools",
        title: "Git",
        url: gitIcon,
      },
      {
        id: 2,
        title: "Github",
        url: githubIcon,
      },
      {
        id: 3,
        title: "Redux",
        url: reduxIcon,
      },
    ],
    CloudServices: [
      {
        id: 1,
        heading: "Cloud Services",
        title: "Heroku",
        url: herokuIcon,
      },
      {
        id: 2,
        title: "Firebase",
        url: firebaseIcon,
      },
      {
        id: 3,
        title: "Netlify",
        url: netlifyIcon,
      },
    ],
  });
  const slider = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    speed: 2000,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed:3000,
    cssEase: "linear",
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="skills flex flex-col h-[calc(100vh_-_4rem)] overflow-y-auto overflow-hidden w-screen items-center">
      {!show ? <Loader title="Skills"/>:(
        <>
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
            <Navbar image={News} title="Skills" search="skills"/>
          </motion.div>
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
          <div className=" flex items-center b w-screen h-[calc(100vh_-_7.3rem)]">
            <Slider
              ref={slider}
              {...settings}
              className="w-full flex items-center"
            >
              {Object.values(skillset).map((s, idx) => (
                <div className="flex flex-col p-3 font-google">
                  <h1 className="text-center font-semibold underline underline-offset-2 text-2xl text-[#313132] hover:text-[rgb(255,99,71)] ">
                    {s[0].heading}
                  </h1>
                  {s.map((i) => (
                    <figure
                      className="w-1/3 p-2 flex items-center cursor-pointer"
                      key={i.id}
                    >
                      <img src={i.url} className="w-4/5 mr-3 rounded-lg p-1 shadow" alt="" />
                      <figcaption className="text-lg">{i.title}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex absolute inset-y-1/3 w-screen justify-between px-2 pr-0 items-center z-10">
            <button onClick={() => slider?.current?.slickPrev()}>
              <MdArrowBackIos className="text-5xl text-orange-400 hover:text-orange-500" />
            </button>
            <button onClick={() => slider?.current?.slickNext()}>
              <MdArrowForwardIos className="text-5xl text-orange-400 hover:text-orange-500" />
            </button>
          </div>
          </motion.div>
        </>
      )}
    </div>
  );
};
export default Skills;