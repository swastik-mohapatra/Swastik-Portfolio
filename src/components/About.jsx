/* eslint-disable react/prop-types */
import AboutPic from "../assets/images/image_about.jpg";
import Education from "./Education";
import { motion } from "framer-motion";

const About = ({ mainControls }) => {
  return (
    <div name="about" className="py-10 w-full ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <div className=" mx-5 justify-center w-full h-full">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="my-6">
            <div className="md:flex md:justify-between md:items-center flex-none grid grid-cols-1 md:grid-cols-0 gap-10">
              <div>
                <div className="about_img_container">
                  <img
                    src={AboutPic}
                    alt="My Profile"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="justify-normal">
                <p>
                  {" "}
                  Welcome to my digital space! I&apos;m passionate about
                  bringing ideas to life through code and creativity. With a
                  background in Information Technology, I specialize in crafting
                  seamless user experiences and architecting robust software
                  solutions.
                </p>
                <br />
                <p>
                  Driven by curiosity and a relentless pursuit of excellence, I
                  am constantly exploring new technologies and pushing the
                  boundaries of what&apos;s possible. Collaboration is at the
                  heart of everything I do.
                </p>
                <br />
                <p>
                  Beyond the screen, you&apos;ll find me exploring the outdoors,
                  engaging in regular workouts, or indulging myself in fun
                  activities.
                </p>
                <br />
              </div>
            </div>
          </div>
          <Education />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
