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

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const experienceInView = useInView(experienceRef, { once: true });
  const portfolioInView = useInView(portfolioRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const homeControls = useAnimation();
  const aboutControls = useAnimation();
  const skillsControls = useAnimation();
  const experienceControls = useAnimation();
  const portfolioControls = useAnimation();
  const contactControls = useAnimation();

  if (homeInView) homeControls.start("visible");
  if (aboutInView) aboutControls.start("visible");
  if (skillsInView) skillsControls.start("visible");
  if (experienceInView) experienceControls.start("visible");
  if (portfolioInView) portfolioControls.start("visible");
  if (contactInView) contactControls.start("visible");

  return (
    <div>
      <NavBar />
      <div className="px-20 mt-20 w-full">
        <div ref={homeRef}>
          <Home mainControls={homeControls} />
        </div>
        <div ref={aboutRef}>
          <About mainControls={aboutControls} />
        </div>
        <div ref={skillsRef}>
          <Skills mainControls={skillsControls} />
        </div>
        <div ref={experienceRef}>
          <Experience mainControls={experienceControls} />
        </div>
        <div ref={portfolioRef}>
          <Portfolio mainControls={portfolioControls} />
        </div>
        <div ref={contactRef}>
          <Contact mainControls={contactControls} />
        </div>
      </div>
      <SocialLinks2 />
    </div>
  );
}

export default App;
