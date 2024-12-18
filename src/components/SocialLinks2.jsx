import { Tooltip, Zoom } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks2 = () => {
  const socialLinks = [
    {
      id: "linkedin",
      icon: <FaLinkedin size={20} />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/swastik-mohapatra-aa2791197/",
      position: "top-48",
    },
    {
      id: "github",
      icon: <FaGithub size={20} />,
      title: "GitHub",
      url: "https://github.com/swastik-mohapatra",
      position: "top-56",
    },
    {
      id: "email",
      icon: <HiOutlineMail size={20} />,
      title: "Email",
      url: "mailto:swastikmohapatra9000@gmail.com",
      position: "top-64",
    },
    {
      id: "instagram",
      icon: <FiInstagram size={20} />,
      title: "Instagram",
      url: "https://www.instagram.com/_swasteek_/profilecard/?igsh=Nm1neWkwbXhsZjJw",
      position: "top-72",
    },
  ];

  return (
    <div>
      <div className="w-1 sm:h-44 h-48 bg-blue-200 top-0 sm:left-16 left-12 fixed"></div>
      <div className="mt-10">
        {socialLinks.map(({ id, icon, title, url, position }) => (
          <Tooltip
            key={id}
            title={title}
            TransitionComponent={Zoom}
            arrow
            placement="right"
            sx={{ "& .MuiTooltip-tooltip": { backgroundColor: "#1f2937" } }}
            // componentsProps={{
            //   tooltip: {
            //     sx: {
            //       backgroundColor: "#1f2937", 
            //     },
            //   },
            //   arrow: {
            //     sx: {
            //       color: "#1f2937", 
            //     },
            //   },
            // }}
          >
            <button
              className={`sm:left-[56px] left-10 fixed ${position}`}
              onClick={() => window.open(url, "_blank")}
            >
              {icon}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks2;
