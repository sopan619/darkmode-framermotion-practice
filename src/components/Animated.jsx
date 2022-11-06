import React from "react";

const Animated = () => {
  const hoverArray = "Hover".split("");
  const hearArray = "Here".split("");

  return (
    <>
      <div className="pt-32 py-4 mx-auto text-5xl flex justify-center items-center dark:text-gray-200 cursor-pointer font-bold text-center">
        <div className="first">
          {hoverArray.map((item, index) => (
            <div
              className="inline-block transition-transform duration-300 z-0 ease-in-out hover:-translate-y-3 hover:text-yellow-500 dark:hover:text-pink-400 hover:scale-110 hover:animate-pulse"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="pl-4">
          {hearArray.map((item, index) => (
            <div
              className="inline-block transition-transform duration-300 z-0 ease-in-out hover:-translate-y-3 hover:text-yellow-500 dark:hover:text-pink-400 hover:scale-110 hover:animate-pulse"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Animated;
