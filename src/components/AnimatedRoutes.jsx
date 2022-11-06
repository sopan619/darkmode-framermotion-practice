import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Card } from "./Card";
import BigCard from "./BigCard";
import CodeBlock from "./CodeBlock";
import Animated from "./Animated";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={[<Animated />, <Card />, <BigCard />, <CodeBlock />]}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;

//Must use useLocation Hook in order to successfully apply Framer Motion Page Transition Animation
