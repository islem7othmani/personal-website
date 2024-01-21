import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import analytics from '../Images/analytics3.png';
import wattpad from '../Images/wattpad.png';
import meet from '../Images/meet.jpg';
import ec from '../Images/ec.jpg';
import chattapp from '../Images/chattapp.png';
import facebookclone from '../Images/facebookclone.jpg';
import videoapp from '../Images/videoapp.jpg';
import ABtest from './ABtest';
import { Link } from 'react-router-dom';

function Projects() {
  const projectsData = [
    {
      image: videoapp,
      title: 'Video Call',
      description:
        'A project of a video call application using Html, CSS, javaScript, webRTC',
        githubLink: 'https://github.com/islem7othmani/Project_video_call',
        videoLink: 'Your video link here',
      },
    {
      image: chattapp,
      title: 'Chat App',
      description:
        'Real-Time Chat Application, using React JS, TailwindCSS, Node JS, MongoDB, Express JS, Socket.io',
        githubLink: 'https://github.com/islem7othmani/chatappSocket.io',
        videoLink: 'Your video link here',
      },
    {
      image: wattpad,
      title: 'Wattpad Clone',
      description:
        'Internship project at Sapious,Backend using Node JS, MongoDB, Express JS',
      githubLink: 'https://github.com/islem7othmani/project_wattpad-clone',
      videoLink: 'Your video link here',
    },
    {
      image: facebookclone,
      title: 'Facebook Clone',
      description:
        'Project in progress using React JS, TailwindCSS, Node JS, MongoDB, Express JS',
      githubLink: 'https://github.com/islem7othmani/FacebookClone',
      videoLink: 'Your video link here',
    },
    {
      image: analytics,
      title: 'A/B test',
      description:
        'PFE project at Fouita, using Golang, Dgraph, Svelte JS, TailwindCSS',
      githubLink: '',
      videoLink: 'Your video link here',    
    },
    {
      image: ec,
      title: 'E-commerce Website',
      description:
        'Project in progress using React JS, TailwindCSS, Node JS, MongoDB, Express JS',
      githubLink: '',
      videoLink: 'Your video link here',    
    }
  ];

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} focus:outline-none`} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} focus:outline-none`} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container my-24 mx-auto md:px-6" id='projects'>
      <section className="mb-32 text-center lg:text-left">
        <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>

        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <div key={index} className="mb-12 lg:mb-0">
              <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                <img src={project.image} className="w-full h-72" />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
              </div>

              <h5 className="mb-4 text-lg font-bold">{project.title}</h5>
              <p className="text-neutral-500 dark:text-neutral-300 -mt-4">{project.description}</p>
              <div className='flex justify-between mt-2'>
              {project.githubLink && (
                <Link to={project.githubLink} className="text-pink-500 bg-white py-2 px-4">
                  Github link
                </Link>
              )}
              {project.videoLink && (
                <span className="text-white bg-pink-500 shadow-xl py-2 px-4 rounded-lg">See video</span>
              )}
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Projects;
