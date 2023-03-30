import React, { useState, useEffect, useRef } from "react";
import News from "../assets/googleNews.webp";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import Loader from "../layout/Loader";
import Navbar from "../layout/Navbar";
import { skills } from "../data/SkillsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

const Skills = () => {
  let [skillset] = useState(skills);
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
          <div
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="flex items-center w-screen h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)]"
          >
            <Slider
              ref={slider}
              {...settings}
              className="w-full flex items-center"
            >
              {Object.values(skillset).map((s, idx) => (
                <div
                  className="flex flex-col items-center p-3 font-google"
                  key={idx}
                >
                  <h1 className="text-center text:xl md:text-2xl font-serif font-semibold text-black hover:underline underline-offset-2 ">
                    {s[0].heading}
                  </h1>
                  {s.map((i, ids) => (
                    <a href={i.link} target="_blank" rel="noreferrer" key={ids}>
                      <figure
                        className="w-full p-2 flex items-center cursor-pointer hover:animate-myAnim"
                        key={i.id}
                      >
                        <img
                          loading="lazy"
                          src={i.url}
                          className="w-1/5 mr-1 sm:mr-3 rounded-lg p-1 shadow bg-white"
                          alt=""
                        />
                        <figcaption className=" md:text-lg">
                          {i.title}
                        </figcaption>
                      </figure>
                    </a>
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
