import React from "react";

const BigCard = () => {
  return (
    <>
      <div className="container mt-8 shadow-lg border-l-4 border-red-500 dark:border-green-500 bg-stone-200 dark:text-slate-100 dark:bg-slate-600 w-[80vw] md:w-[50vw] mx-auto  p-5 rounded-lg ">
        {/* The heading */}
        <h1 className="font-bold text-xl text-center">
          This is Second Component Heading.
        </h1>
        {/* The Sub Heading */}
        <p className=" font-semibold text-base text-red-400 dark:text-green-400  text-center">
          Let's see how to controll all Component Styles from one place.
        </p>
        {/* The lorem paragraph */}
        <p className="text-left mx-auto w-[75%] pt-5 pb-3 text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          molestiae, aperiam minima rem impedit earum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Asperiores molestiae, aperiam
          minima rem impedit earum.
        </p>
      </div>
    </>
  );
};

export default BigCard;
