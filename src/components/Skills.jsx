/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { techs } from "../constants";
import { motion } from "framer-motion";

const Skills = ({ mainControls }) => {
  return (
    <div name="skills" className="py-10 w-full ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className=" mx-5 justify-center w-full h-full">
          <h1 className="text-4xl font-bold">Skills</h1>
          <div className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 md:gap-10 gap-10  justify-center items-center">
              {techs.map(({ id, src, title, style, rating }) => (
                <div
                  key={id}
                  className={`shadow-md bg-gray-700 hover:bg-white hover:text-black hover:shadow-xl duration-500 p-2 w-40 h-full mx-auto text-center cursor-pointer rounded-lg shadow-slate-500 ${style} `}
                >
                  <img src={src} alt="" className="w-16 mx-auto my-3" />
                  <p className="mt-4">{title}</p>
                  <p className="mt-1 flex flex-row justify-center">
                    <Rating
                      name="read-only"
                      size="small"
                      value={rating}
                      precision={0.01}
                      readOnly
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
