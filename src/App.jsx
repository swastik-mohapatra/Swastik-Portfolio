import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks2 from "./components/SocialLinks2";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollButton from "./components/ScrollButton";

const useSectionAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  if (isInView) controls.start("visible");

  return { ref, controls };
};

function App() {
  const sections = [
    { Component: Home, hook: useSectionAnimation() },
    { Component: About, hook: useSectionAnimation() },
    { Component: Skills, hook: useSectionAnimation() },
    { Component: Experience, hook: useSectionAnimation() },
    { Component: Portfolio, hook: useSectionAnimation() },
    { Component: Contact, hook: useSectionAnimation() },
  ];

  return (
    <div>
      <NavBar />
      <div className="px-20 mt-20 w-full">
        {sections.map(({ Component, hook }, index) => (
          <div ref={hook?.ref} key={index}>
            <Component mainControls={hook?.controls} />
          </div>
        ))}
      </div>
      <SocialLinks2 />
      <ScrollButton/>
    </div>
  );
}

export default App;
