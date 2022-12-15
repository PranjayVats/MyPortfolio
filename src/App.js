import "./App.css";
import React, { Fragment, useEffect } from "react";
import WebFont from "webfontloader";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Header from "./layout/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Navbar from "./layout/Navbar";

function App() {
  useEffect(() => {
    WebFont.load({
      google: { families: ["Lobster", "Roboto", "Drold Sans"] },
    });
  }, []);
  
  return (
    <Fragment>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/temp" element={<Navbar />}></Route>
          <Route path="*" element={<Error404 />}>
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
