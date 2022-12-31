import React, { useState, useEffect, useRef } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  let [skillset] = useState({
    Programming: [
      {
        id: 1,
        heading: "Programming Languages",
        title: "C",
        url: cIcon,
        link: "https://www.w3schools.com/c/c_intro.php"
      },
      {
        id: 2,
        title: "C++",
        url: cPlusIcon,
        link:"https://www.w3schools.com/cpp/cpp_intro.asp"
      },
    ],
    Frontend: [
      {
        id: 1,
        heading: "Frontend",
        title: "React",
        url: reactIcon,
        link:"https://reactjs.org/"
      },
      {
        id: 2,
        title: "Javascript",
        url: javascriptIcon,
        link:"https://www.javascript.com/"
      },
      {
        id: 3,
        title: "HTML",
        url: htmlIcon,
        link: "https://www.w3schools.com/html/html_intro.asp"
      },
      {
        id: 4,
        title: "CSS",
        url: cssIcon,
        link:"https://www.w3schools.com/css/css_intro.asp"
      },
      {
        id: 5,
        title: "Tailwind",
        url: tailwindIcon,
        link:"https://tailwindcss.com/"
      },
    ],
    Backend: [
      {
        id: 1,
        heading: "Backend",
        title: "Express",
        url: expressIcon,
        link:"https://expressjs.com/"
      },
      {
        id: 2,
        title: "NodeJS",
        url: nodeIcon,
        link:"https://nodejs.org/en/"
      },
    ],
    Database: [
      {
        id: 1,
        heading: "Database",
        title: "Mongodb",
        url: mongodbIcon,
        link:"https://www.mongodb.com/"
      },
    ],
    DevelopmentTools: [
      {
        id: 1,
        heading: "Web Development Tools",
        title: "Git",
        url: gitIcon,
        link:"https://git-scm.com/"
      },
      {
        id: 2,
        title: "Github",
        url: githubIcon,
        link:"https://github.com/"
      },
      {
        id: 3,
        title: "Redux",
        url: reduxIcon,
        link:"https://redux.js.org/"
      },
    ],
    CloudServices: [
      {
        id: 1,
        heading: "Cloud Services",
        title: "Heroku",
        url: herokuIcon,
        link:"https://dashboard.heroku.com/login"
      },
      {
        id: 2,
        title: "Firebase",
        url: firebaseIcon,
        link:"https://firebase.google.com/"
      },
      {
        id: 3,
        title: "Netlify",
        url: netlifyIcon,
        link:"https://www.netlify.com/"
      },
    ],
  });
  const [slides, setSlides] = useState(5);
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    if (width >= "1100") setSlides(5);
    else if (width >= "850") setSlides(4);
    else if (width >= "520") setSlides(3);
    else setSlides(1);
  }, [width]);
  const slider = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: slides,
    speed: 1500,
    pauseOnHover: true,
    autoplay: true,
    cssEase: "linear",
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="skills flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-y-auto overflow-hidden w-screen items-center">
      {!show ? (
        <Loader title="Skills" />
      ) : (
        <div className="w-screen">
            <Navbar image={News} title="Skills" search="skills" />
            <div data-aos="zoom-in" data-aos-duration="1100" className="flex items-center w-screen h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)]">
              <Slider
                ref={slider}
                {...settings}
                className="w-full flex items-center"
              >
                {Object.values(skillset).map((s, idx) => (
                  <div className="flex flex-col items-center p-3 font-google" key={idx}>
                    <h1 className="text-center text:xl md:text-2xl font-serif font-semibold text-black hover:underline underline-offset-2 ">
                      {s[0].heading}
                    </h1>
                    {s.map((i) => (
                      <a href={i.link} target="_blank" rel="noreferrer">
                      <figure
                        className="w-full p-2 flex items-center cursor-pointer hover:animate-myAnim"
                        key={i.id}
                      >
                        <img
                          src={i.url}
                          className="w-1/5 mr-1 sm:mr-3 rounded-lg p-1 shadow bg-white"
                          alt=""
                        />
                        <figcaption className=" md:text-lg">
                          {i.title}
                        </figcaption>
                      </figure></a>
                    ))}
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex absolute inset-y-1/2 w-screen justify-between px-2 pr-0 items-center z-10">
              <button onClick={() => slider?.current?.slickPrev()}>
                <MdArrowBackIos className="text-5xl text-indigo-700 hover:text-indigo-800" />
              </button>
              <button onClick={() => slider?.current?.slickNext()}>
                <MdArrowForwardIos className="text-5xl text-indigo-700 hover:text-indigo-800" />
              </button>
            </div>
        </div>
      )}
    </div>
  );
};
export default Skills;
