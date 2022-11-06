import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="h-screen w-full overflow-scroll overflow-x-hidden scroll-smooth"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      <div className="text-9xl text-center text-red-500 dark:text-yellow-300 py-40">
        This is Contacts
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <div className="w-40 h-40 text-5xl border-4 text-center py-12 rounded-2xl border-red-500 dark:border-yellow-300 mx-auto">
          😲
        </div>
      </motion.div>
      <div className="w-screen my-20 h-96 overflow-scroll snap-mandatory snap-y overflow-x-hidden scroll-smooth">
        <div className="bg-yellow-400 h-96 w-screen text-black flex justify-center items-center snap-center">
          One
        </div>
        <div className="bg-red-400 h-96 w-screen text-black flex justify-center items-center snap-center">
          Two
        </div>
        <div className="bg-emerald-400 h-96 w-screen text-black flex justify-center items-center snap-center">
          Three
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
