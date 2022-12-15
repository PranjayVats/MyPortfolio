import React from "react";
import P from "../assets/p-logo.png";

const Loader = (props) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden w-screen items-center">
        <div className="flex flex-col h-full w-1/2 items-center bg-backgroundGif bg-no-repeat bg-cover justify-center bg-center">
          <figure className="flex flex-col w-3/4 h-auto items-center justify-center text-5xl ">
            <img className="w-2/3" src={P} alt="logo" />
            <figcaption className="font-google">{props.title}</figcaption>
          </figure>
          <div className="progress flex w-1/2 bg-gray-300 border-gray-300 h-3 rounded-full mt-5">
            <div className="progress-value h-full bg-orange-400 animate-preloader rounded-full"></div>
          </div>
        </div>
    </div>
  );
};
export default Loader;
