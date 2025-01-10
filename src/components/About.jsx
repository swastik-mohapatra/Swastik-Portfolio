/* eslint-disable react/prop-types */
import AboutPic from "../assets/images/image_about.jpg";
import Education from "./Education";
import { motion } from "framer-motion";

const About = ({ mainControls }) => {
  return (
    <div name="about" className="py-10 w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="mx-5 justify-center w-full h-fit">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="my-6">
            <div className="md:flex md:justify-between md:items-start gap-10">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <div className="relative aspect-w-3 aspect-h-4">
                  <img
                    src={AboutPic}
                    alt="My Profile"
                    className="rounded-[12px] object-cover shadow-lg shadow-slate-800"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <p>
                  Welcome to my digital space! I&apos;m passionate about
                  bringing ideas to life through code and creativity. With a
                  background in Information Technology, I specialize in crafting
                  seamless user experiences and architecting robust software
                  solutions. Driven by curiosity and a relentless pursuit of
                  excellence, I am constantly exploring new technologies and
                  pushing the boundaries of what&apos;s possible. Collaboration
                  is at the heart of everything I do.
                  <br />
                  Beyond the screen, you&apos;ll find me exploring the outdoors,
                  engaging in regular workouts, or indulging myself in fun
                  activities.
                </p>
                <br />
                <Education />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;


