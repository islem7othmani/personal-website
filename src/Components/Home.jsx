import React from "react";
import backgroundimg from "../Images/backgroundimg.jpg";
import girl from "../Images/girl.png";
import cv from "../Images/islem othmani pfe cv.pdf";
import { Typewriter } from "react-simple-typewriter";
import AboutMe from "./AboutMe";
import justme from '../Images/justme.jpg'
import card from '../styles/cardCSS.css'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Navbar = () => {
    return (
      <nav className="bg-black fixed w-full z-20 top-0 left-0 z-50" id="Home">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold text-white">
              Islem Othmani
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-pink-500 text-white text-sm py-2 px-4 rounded-lg font-semibold"
            >
              Contact
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
            
              <li>
                <button
                  
                  onClick={() => scrollToSection('AboutMe')}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  
                  onClick={() => scrollToSection("education")}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  
                  onClick={() => scrollToSection("experience")}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button
                  
                  onClick={() => scrollToSection("projects")}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  
                  onClick={() => scrollToSection("acheive")}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Interests
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <>
      <div className="h-auto w-auto">
        <img src={backgroundimg} alt="hero" className="w-full mb-12 h-screen z-0" />
        <div className="absolute inset-0 overlay"></div>
        <div className="absolute -bottom-56">
        <div class="card absolute h-80 w-80 bottom-96 lg:left-64 xl:left-64 z-50">
  <img
    src={justme}
    alt=""
    class="rounded-full h-full w-full "
  />
</div>
</div>


        <Navbar />

        <div className="text-white absolute right-64 w-96 top-48">
          <h1 className="text-white font-bold pb-2 text-2xl">Hello,</h1>
          <h1 className="font-extrabold text-3xl pb-4 pt-2">
            <span className="pr-2">
              I'm
              <span
                className="pl-2 text-4xl"
                style={{ color: "rgb(232 121 249)", fontWeight: "bold" }}
              >
                <Typewriter
                  className="text-pink-800 font-bold"
                  words={["Software Engineering Student", "Web Developer"]}
                  loop={5}
                  cursor
                ></Typewriter>
              </span>
            </span>
          </h1>

          <p className="text-slate-300 text-xl">
          I take immense satisfaction in developing websites and relish the process of creating robust full-stack solutions for my projects....
          </p>
          <a
            href={cv}
            download
            className="relative px-6 py-3 font-bold text-white rounded-lg group top-8"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">DOWNLOAD MY RESUME</span>
          </a>
          <div className="absolute top-96 mt-20 right-96 mr-18 ">
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </div>

    </>
    
  );
};

export default Home;
