export const Card = () => {
  return (
    <>
      <div className="container shadow-lg border-l-4 border-red-500 dark:border-yellow-400 bg-stone-200 dark:text-slate-100 dark:bg-slate-600 w-[80vw] md:w-[50vw] mx-auto  p-5 rounded-lg ">
        <h1 className="font-bold text-xl text-center">
          Hello this is a Heading.
        </h1>
        <p className=" font-semibold text-lg text-red-400 dark:text-yellow-300  text-center">
          This is Dark Mode
        </p>
        <p className="text-left mx-auto w-[75%] pt-5 pb-3 text-gray-700 dark:text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          molestiae, aperiam minima rem impedit earum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Asperiores molestiae, aperiam
          minima rem impedit earum.
        </p>
      </div>
    </>
  );
};
