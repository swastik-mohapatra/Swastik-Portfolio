/* eslint-disable react/prop-types */
import Typewriter from "typewriter-effect";
// import AIPIC from "../assets/images/comp5.png";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import resume from "../assets/files/Swastik-Mohapatra-Resume.pdf";

function Home({ mainControls }) {
  return (
    <div name="home">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="py-10">
          <div className="md:flex md:justify-between md:items-center flex-none grid grid-cols-1 md:grid-cols-0 gap-2">
            <div className="ml-0 md:ml-6 md:mt-5 leading-relaxed">
              <h1 className="text-4xl font-bold leading-normal">Hi,</h1>
              <h1 className="text-4xl font-bold leading-normal">
                I am Swastik Mohapatra
              </h1>
              <h1 className="text-3xl font-bold leading-normal">
                <Typewriter
                  options={{
                    strings: ["Associate Software Engineer", "Front End Developer"],
                    autoStart: true,
                    pauseFor: 4000,
                    loop: true,
                  }}
                />
              </h1>
              <br />
              <p className="flex flex-col justify-center">
                Crafting seamless user experiences through code mastery –
                Welcome to the digital frontier of web design and software
                architecture.
              </p>

              <div className="flex flex-row gap-6 sm:ml-[-4px] mt-7">
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = resume
                      link.download = "Swastik_Resume.pdf"; 
                      link.click();
                    }}
                    className=" bg-indigo-500 text-gray-100 p-3 text-sm  rounded-lg tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-white hover:text-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    Download Resume
                  </button>
                <button
                  onClick={() => {
                    const contactSection =
                      document.getElementsByName("contact")[0];
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="  text-gray-100 p-3 text-sm border  rounded-lg tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-white hover:text-black shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Contact me
                </button>
              </div>
            </div>
            <div className="ml-0 md:ml-16 justify-center items-center text-center">
              <div className="w-full hidden md:block">
                {/* <img
                src={AIPIC}
                alt="My Profile"
                className="object-cover"
                width="650"
                height="100"
              /> */}
                <Spline scene="https://prod.spline.design/ZXTHTk1nEWEUSlVv/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
