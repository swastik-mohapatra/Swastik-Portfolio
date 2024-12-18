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
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);
  return (
    <div>
      <NavBar />
      <div className="px-20 mt-20 w-full">
        <Home mainControls={mainControls} />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
      {/* <SocialLinks/> */}
      <SocialLinks2 />
    </div>
  );
}

export default App;
