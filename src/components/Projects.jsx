import React from "react";
import { motion } from "framer-motion";
import ProCard from "./ProCard";
const Projects = () => {
  return (
    // Presence Animation, Don't mess
    <motion.div
      className="h-full font-helve scroll-smooth"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <div className="container flex flex-col py-20 justify-center items-center mx-auto ">
        <div className="welcome p-5 my-40  flex items-center justify-between">
          <motion.div
            className="heading font-bold h-[160px] hover:dark:text-yellow-400 transition duration-500 ease-out text-center text-5xl md:text-7xl text-black dark:text-stone-300 hover:scale-105 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, ease: "easeOut", duration: 2.5 }}
          >
            WELCOME TO <br />
            <div className="text-fuchsia-500 transition duration-500 ease-out  hover:text-pink-500 text-7xl md:text-9xl inline-block hover:scale-105 hover:border-t-2 hover:border-b-2 hover:border-pink-800">
              PROJECTS
            </div>
          </motion.div>
        </div>
        <div className="arrow">
          <div className="container text-red-800 dark:text-green-200">
            arrow
          </div>
        </div>
      </div>
      <div className="btn flex flex-col-reverse fixed bottom-7 right-5 scale-90">
        <button
          className="px-2 py-2 bg-fuchsia-800 dark:bg-fuchsia-400 dark:text-gray-700 text-stone-300 rounded-lg border-2 border-white"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Top
        </button>
      </div>
      <div className="project-wrapper mt-40">
        <div className="backdrop bg-[#FF99D7] dark:bg-[#905E96] h-[100vh] flex items-center justify-center  snap-start">
          <ProCard key="1" title="Coler Flipper" />
        </div>
        <div className="backdrop bg-[#FCC5C0] dark:bg-[#937DC2] h-[100vh] flex items-center justify-center  snap-start">
          <ProCard key="2" title="Text Ranger" />
        </div>
        <div className="backdrop bg-[#FF99D7] dark:bg-[#905E96] h-[100vh] flex items-center justify-center snap-start">
          <ProCard key="3" title="Weather App" />
        </div>
        <div className="backdrop bg-[#FCC5C0] dark:bg-[#937DC2] h-[100vh] flex items-center justify-center  snap-start">
          <ProCard key="4" title="Converter" />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
