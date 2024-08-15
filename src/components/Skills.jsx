import ReactJS from "../assets/images/Skiils/react.png";
import html from "../assets/images/Skiils/html.png";
import css from "../assets/images/Skiils/css.png";
import javascript from "../assets/images/Skiils/javascript.png";
import tailwind from "../assets/images/Skiils/tailwind.png";
// import sapui5 from "../assets/images/Skiils/UI5_logo_wide.png";
import mui from "../assets/images/Skiils/mui.png";
// import cOriginal from "../assets/images/Skiils/c-original.png";
import nodejs from "../assets/images/Skiils/nodejs.png";
import jQuery from "../assets/images/Skiils/jQuery.png";
import git from "../assets/images/Skiils/git.png";
import bootstrap from "../assets/images/Skiils/bootstrap.png";
import mysql from "../assets/images/Skiils/mysql.png";
// import { CiStar } from "react-icons/ci";
import { Rating } from "@mui/material";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:shadow-orange-500",
      rating: "4.5"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "hover:shadow-blue-500",
      rating: "4.5"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "hover:shadow-yellow-500",
      rating: "3.73"
    },
    {
      id: 4,
      src: jQuery,
      title: "jQuery",
      style: "hover:shadow-blue-500",
      rating: "3"
    },
    {
      id: 5,
      src: ReactJS,
      title: "React",
      style: "hover:shadow-blue-600",
      rating: "4"
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "hover:shadow-green-400",
      rating: "2.73"
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "hover:shadow-sky-400",
      rating: "4.5"
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "hover:shadow-purple-400",
      rating: "4.5"
    },
    // {
    //   id: 9,
    //   src: sapui5,
    //   title: "SAP UI5",
    //   style: "hover:shadow-blue-200",
    // },
    // {
    //   id: 10,
    //   src: cOriginal,
    //   title: "C",
    //   style: "hover:shadow-teal-400",
    // },
    {
      id: 11,
      src: mui,
      title: "Material UI",
      style: "hover:shadow-sky-400",
      rating: "4.2"
    },
    {
      id: 12,
      src: git,
      title: "Git",
      style: "hover:shadow-orange-400",
      rating: "4.21"
    },
    // {
    //   id: 13,
    //   src: github,
    //   title: "GitHub",
    //   style: "hover:shadow-gray-400",
    // },
    {
      id: 14,
      src: mysql,
      title: "My SQL",
      style: "hover:shadow-blue-400",
      rating: "3"
    },
  ];

  return (
    <div name="skills" className="py-10 w-full ">
      <div className=" mx-5 justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Skills</h1>
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 md:gap-10 gap-10  justify-center items-center">
            {techs.map(({ id, src, title, style,rating }) => (
              <div
                key={id}
                className={`shadow-md bg-gray-700 hover:bg-white hover:text-black hover:shadow-xl duration-500 p-2 w-40 h-full mx-auto text-center cursor-pointer rounded-lg shadow-slate-500 ${style} `}
              >
                <img src={src} alt="" className="w-16 mx-auto my-3" />
                <p className="mt-4">{title}</p>
                <p className="mt-1 flex flex-row justify-center">
                  {/* <CiStar color="red" fill="red" />
                  <CiStar color="red" />
                  <CiStar color="red" />
                  <CiStar color="red" />
                  <CiStar color="red" /> */}
                  <Rating name="read-only" size="small" value={rating} precision={0.01} readOnly />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
