import React, { useState } from "react";
import PeakCard from "./PeakCard";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Animation Values are here
const titleAnimate = {
  first: { x: -100, y: 20, opacity: 0 },
  final: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 550,
    transition: {
      duration: 1,
      ease: "easeIn",
      type: "spring",
      bounce: 0.5,
    },
  },
};
const headingAnimate = {
  first: { y: 50, opacity: 0 },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 1.5,
      ease: "easeIn",
      type: "spring",
      bounce: 0.5,
    },
  },
};
const paraAnimate = {
  first: { x: 100, opacity: 0 },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: 150,
    y: 200,
    transition: {
      duration: 1.5,
      ease: "easeIn",
      type: "spring",
      bounce: 0.5,
    },
  },
};
const wholeCard = {
  first: { x: -150, opacity: 0 },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -350,
    transition: {
      duration: 1.5,
      ease: "easeIn",
      type: "spring",
      bounce: 0.5,
    },
  },
};

const ProCard = (props) => {
  const [intro, setIntro] = useState(true);
  const [proCard, setCard] = useState(false);
  const vanish = () => {
    setIntro(!intro);
    setCard(!proCard);
  };

  return (
    <>
      <AnimatePresence>
        {intro && (
          <motion.div
            key={props.key}
            className="card flex flex-col border border-white p-3  mx-auto w-[50vw] md:w-[35vw] h-[400px] rounded-lg bg-[#D58BDD] dark:bg-[#FF99D7]"
            initial={"first"}
            whileInView={"final"}
            exit={"exit"}
            transition={{ staggerChildren: 0.25 }}
            variants={wholeCard}
          >
            {/* Inner Title Here */}
            <motion.div
              className="content p-5 bg-[#C8FFD4] dark:bg-[#FB2576]  rounded-lg h-[150px] shadow-xl shadow-[#C8FFD4]/60 dark:shadow-[#FB2576]/60 flex justify-center items-center text-5xl font-bold text-stone-800 dark:text-stone-200 border border-white"
              variants={titleAnimate}
            >
              {props.title}
            </motion.div>
            {/* Some Heading Here */}
            <motion.h1
              className="px-6 py-4 text-xl font-bold break-words"
              variants={headingAnimate}
            >
              Lorem ipsum dolor sit.
            </motion.h1>
            {/* Some Paragraph Here  */}
            <motion.p
              className="paragraph px-6 pb-5 text-base break-words"
              variants={paraAnimate}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              ratione a maxime consectetur, soluta laboriosam beatae aut
              incidunt dolores porro.
            </motion.p>
            <PeakCard vanish={vanish} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {proCard && <ProjectCard vanish={vanish} />}
      </AnimatePresence>
    </>
  );
};

export default ProCard;
