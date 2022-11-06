import React from "react";
import { motion } from "framer-motion";
const buttonAnimate = {
  first: { x: 185, y: 400, opacity: 0 },
  final: {
    x: 185,
    y: 342,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const PeakCard = (props) => {
  return (
    <motion.div
      className="absolute"
      variants={buttonAnimate}
      initial={"first"}
      whileInView={"final"}
    >
      <button
        className="bg-red-500 border-2 border-yellow-400 rounded-lg w-fit px-3 py-2 "
        onClick={props.vanish}
      >
        <p className="text-yellow-100 font-semibold text-base animate-pulse">
          Check it out 😉
        </p>
      </button>
      <span className="absolute top-[-4px] right-[-4px] animate-ping">🔴</span>
    </motion.div>
  );
};

export default PeakCard;
