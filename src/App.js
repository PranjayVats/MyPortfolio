import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
const Search = lazy(() => import("./pages/Search"));
const Skills = lazy(() => import("./pages/Skills"));
const Header = lazy(() => import("./layout/Header"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Education = lazy(() => import("./pages/Education"));
const Projects = lazy(() => import("./pages/Projects"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Fragment>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/search"
            element={
              <Suspense fallback={<>...</>}>
                <Search />
              </Suspense>
            }
          ></Route>
          <Route
            path="/skills"
            element={
              <Suspense fallback={<>...</>}>
                <Skills />
              </Suspense>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <Suspense fallback={<>...</>}>
                <Contact />
              </Suspense>
            }
          ></Route>
          <Route
            path="/education"
            element={
              <Suspense fallback={<>...</>}>
                <Education />
              </Suspense>
            }
          ></Route>
          <Route
            path="/projects"
            element={
              <Suspense fallback={<>...</>}>
                <Projects />
              </Suspense>
            }
          ></Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<>...</>}>
                <Error404 />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
