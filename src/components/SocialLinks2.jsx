import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks2 = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const renderTooltip = (tooltipText) => {
    return (
      <div className="absolute top-0 left-full mt-0 ml-2 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg">
        {tooltipText}
      </div>
    );
  };

  return (
    <div className="">
      <div className="w-1 sm:h-44 h-48 bg-blue-200 top-0 sm:left-16 left-12 fixed"></div>
      <div className="mt-10">
        <button
          className="sm:left-[56px] left-10 fixed top-48"
          onMouseEnter={() => handleMouseEnter("linkedin")}
          onMouseLeave={handleMouseLeave}
          onClick={()=>{window.open('https://www.linkedin.com/in/swastik-mohapatra-aa2791197/',"_blank")}}
        >
          <FaLinkedin size={20} />
          {hoveredButton === "linkedin" && renderTooltip("LinkedIn")}
        </button>
        <button
          className="sm:left-[56px] left-10 fixed top-56"
          onMouseEnter={() => handleMouseEnter("github")}
          onMouseLeave={handleMouseLeave}
          onClick={()=>{window.open('https://github.com/swastik-mohapatra','_blank')}}
        >
          <FaGithub size={20} />
          {hoveredButton === "github" && renderTooltip("GitHub")}
        </button>
        <button
          className="sm:left-[56px] left-10 fixed top-64"
          onMouseEnter={() => handleMouseEnter("email")}
          onMouseLeave={handleMouseLeave}
          onClick={()=>{window.open('mailto:swastikmohapatra9000@gmail.com','_blank')}}
        >
          <HiOutlineMail size={20} />
          {hoveredButton === "email" && renderTooltip("Email")}
        </button>
        <button
          className="sm:left-[56px] left-10 fixed top-72"
          onMouseEnter={() => handleMouseEnter("instagram")}
          onMouseLeave={handleMouseLeave}
          onClick={()=>{window.open('https://www.instagram.com/_swasteek_/profilecard/?igsh=Nm1neWkwbXhsZjJw','_blank')}}
        >
          <FiInstagram size={20} />
          {hoveredButton === "instagram" && renderTooltip("Instagram")}
        </button>
      </div>
    </div>
  );
};

export default SocialLinks2;
