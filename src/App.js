import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <>
      <div className={darkmode && "dark"}>
        <div className="components overflow-x-hidden bg-slate-100 dark:bg-slate-800">
          <Navbar onChange={() => setDarkmode(!darkmode)} />
          <AnimatedRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
