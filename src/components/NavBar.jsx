import { useState, useEffect } from "react";
import Logo from "../assets/logos/logo4.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [navResp, setNavResp] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Portfolio",
    "Contact",
  ];

  const handleClickNavbar = (linkName) => {
    setActiveLink(linkName);
    setNavResp(false);
  };

  const renderNavLink = (linkName) => (
    <li className="cursor-pointer">
      <Link
        to={linkName.toLowerCase()}
        spy
        smooth
        duration={500}
        offset={-80} // Adjust offset to align with your section
        className={`transition duration-300 ease-in-out hover:text-orange-300 ${
          activeLink === linkName ? "text-orange-300" : ""
        }`}
        onSetActive={() => setActiveLink(linkName)}
        onClick={() => handleClickNavbar(linkName)}
      >
        {activeLink === linkName ? `< ${linkName} >` : linkName}
      </Link>
    </li>
  );

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center w-full px-12 py-6 -mt-20 z-[2] fixed transition duration-300 ${
        scrolling ? "bg-black bg-opacity-80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="text-2xl cursor-pointer pl-2 md:pl-4">
        <img src={Logo} alt="Swastik" height="140" width="140" />
      </div>

      <ul className="hidden md:flex gap-8 font-medium">
        {navLinks.map((linkName) => renderNavLink(linkName))}
      </ul>

      <div
        onClick={() => setNavResp(!navResp)}
        className="cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {navResp ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navResp && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[10] bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <div
            onClick={() => setNavResp(false)}
            className="absolute top-5 right-5 text-gray-500"
          >
            <FaTimes size={30} />
          </div>
          <ul className="flex flex-col justify-center items-center h-full gap-6 text-2xl">
            {navLinks.map((linkName) => renderNavLink(linkName))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
