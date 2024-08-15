import { useState } from "react";
import Logo from "../assets//logos/logo4.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [navResp, setNavResp] = useState(false);

  const handleClickNavbar = (linkName) => {
    setActiveLink(linkName);
    setNavResp(false);
  };

  const renderNavLink = (linkName, href) => {
    return (
      <li className="cursor-pointer">
        <Link
          to={href}
          smooth
          duration={500}
          className={`transition duration-300 ease-in-out hover:text-orange-300 ${
            activeLink === linkName ? "text-orange-300" : ""
          }`}
          onClick={() => handleClickNavbar(linkName)}
        >
          {activeLink === linkName ? `< ${linkName} >` : linkName}
        </Link>
      </li>
    );
  };

  return (
    <nav className="flex justify-between items-center w-full px-12 py-4">
      <div className="text-2xl cursor-pointer pl-2 md:pl-4">
        <img src={Logo} alt="Swastik" height="140" width="140" />
      </div>
      {/* <div className=""> */}
      <ul className="md:flex md:flex-row gap-8 list-reset font-medium hidden ">
        <li>{renderNavLink("Home", "home")}</li>
        <li>{renderNavLink("About", "about")}</li>
        <li>{renderNavLink("Skills", "skills")}</li>
        <li>{renderNavLink("Experience", "experience")}</li>
        <li>{renderNavLink("Contact", "contact")}</li>
      </ul>
      <div
        onClick={() => setNavResp(!navResp)}
        className="cursor-pointer pr-4  text-gray-500 md:hidden"
      >
        {navResp ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navResp && (
        <>
          <div className="fixed  justify-center text-2xl top-0 left-0  w-screen overflow-y-hidden h-screen  z-[10] bg-gradient-to-b from-black to-gray-800 text-gray-500">
            <div
              onClick={() => setNavResp(!navResp)}
              className="cursor-pointer right-0 absolute top-5 pr-7  mx-12 my-3  z-[12] text-gray-500 md:hidden"
            >
              {navResp ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <ul className="flex flex-col justify-center w-full h-full gap-y-6 items-center ">
              <li>{renderNavLink("Home", "home")}</li>
              <li>{renderNavLink("About", "about")}</li>
              <li>{renderNavLink("Skills", "skills")}</li>
              <li>{renderNavLink("Experience", "experience")}</li>
              <li>{renderNavLink("Contact", "contact")}</li>
            </ul>
          </div>
        </>
      )}
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
