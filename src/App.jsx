import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks2 from "./components/SocialLinks2";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <div className="px-20 w-full">
        <Home />
        <About/>
        <Skills/>
      </div>
      {/* <SocialLinks/> */}
      <SocialLinks2/>
    </div>
  );
}

export default App;
