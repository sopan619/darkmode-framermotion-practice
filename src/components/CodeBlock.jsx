import React from "react";

const CodeBlock = () => {
  return (
    <>
      <div className="pb-32">
        <div className="my-6 shadow-xl w-[90vw]  md:w-[30vw] flex mx-auto border-l-4 border-sky-400 dark:border-orange-400 rounded-lg justify-center text-green-300 bg-indigo-900">
          {/* Code Block is here */}
          <pre className="py-2">
            <code>
              {`  const themeChanger = () => {
    let d = document.getElementById
    ("mode").classList;  
    if (d.contains("dark")) {
      d.remove("dark");
    } else {
      d.add("dark");
    }
  };  `}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default CodeBlock;
