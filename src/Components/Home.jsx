import React from "react";
import hero from '../Images/hero.png'
function Home() {
  return (
    <>
      <div className=" h-auto w-auto ">
        <img src={hero} alt="hero" />
        <div className="left-36 absolute top-6 flex ">
        <nav className="text-white list-none  flex space-x-4  font-bold">
            <li className="hover:text-blue-500 cursor-pointer">HOME</li>
            <li className="hover:text-blue-500 cursor-pointer">ABOUT ME</li>
            <li className="hover:text-blue-500 cursor-pointer">SERVICES</li>
            <li className="hover:text-blue-500 cursor-pointer">PROJECTS</li>
            <li className="hover:text-blue-500 cursor-pointer">CONTACT</li>
        </nav>
        <button className="bg-blue-700 text-white py-2 px-4 rounded-xl relative bottom-2 left-96">CONTACT ME</button>
        </div>
        

        <div className="text-white absolute right-48 w-96 top-36">
          <h1 className="text-blue-500 font-bold pb-2 text-2xl">ISLEM OTHMANI</h1>
          <span className="text-slate-500">// This Is Me</span>
          <h1 className="font-extrabold text-3xl pb-4 pt-2 ">
            MERN Stack Developer And Contant Creator
          </h1>
          <p className="text-slate-500 text-xl">
            Bachlor degree on Management Coputing Business Intelligence
          </p>
          <p className="text-slate-500 text-xl">
            I derive immense joy from crafting websites and delighting in the
            creation of exquisite UI designs for my endeavors...
          </p>
          <span class="inline-block animate-bounce rounded-full p-4 bg-blue-700 text-white text-sm relative top-36 left-44">
        <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </span>
        </div>
      </div>
      
    </>
  );
}

export default Home;
