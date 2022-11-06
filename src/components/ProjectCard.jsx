import React from "react";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
  return (
    <motion.div className="">
      <div className="btn mt-5 ml-auto">
        <button
          class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          onClick={props.vanish}
        >
          <span class="block rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-transparent">
            Back
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

// initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5, duration: 1.25 }}
