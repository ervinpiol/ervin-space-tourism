import React, { useState, useEffect } from "react";
import Logo from "../../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Menu from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";
import { useMediaQuery } from "@react-hook/media-query";

const Navbar = () => {
  const links = [
    { id: "home", to: "/", text: "HOME" },
    { id: "destination", to: "/destinations", text: "DESTINATION" },
    { id: "crew", to: "/crew", text: "CREW" },
    { id: "technology", to: "/technology", text: "TECHNOLOGY" },
  ];
  const [activeLink, setActiveLink] = useState(""); // Initialize activeLink as an empty string
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveLink("home");
        break;
      case "/destinations":
        setActiveLink("destination");
        break;
      case "/crew":
        setActiveLink("crew");
        break;
      case "/technology":
        setActiveLink("technology");
        break;
      default:
        setActiveLink("");
    }
  }, [location]);

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCloseClick = () => {
    setToggleMenu((prevState) => !prevState);
    if (!toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const ss = useMediaQuery("(max-width: 768px)");

  return (
    <nav className="text-white flex justify-between items-center font-Bellefair font-normal absolute w-full ss:p-8">
      <Link to="/">
        <motion.img
          src={Logo}
          alt="Logo"
          className="p-[3.65rem] md:p-10 ss:p-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        />
      </Link>
      <motion.ul
        id="nav_link"
        className={`${
          toggleMenu
            ? "ss:flex ss:flex-col ss:absolute ss:right-0 ss:top-0 ss:h-screen ss:w-80 ss:pt-36"
            : "ss:hidden"
        } flex gap-10 font-base tracking-[2px] py-8 pr-[160px] pl-[128px] bg-white bg-opacity-10 backdrop-blur-md md:h-full md:px-14 z-50 transition duration-300 ease-in-out ss:px-12`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            onClick={!ss ? toggleMenu : handleCloseClick}
          >
            <motion.li
              className={`flex gap-[6px] link ${
                activeLink === link.id && !ss ? "nav_link" : ""
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.indexOf(link) * 0.3, duration: 0.3 }}
            >
              <span className="font-bold md:hidden ss:block">
                0{links.indexOf(link)}
              </span>
              {link.text}
            </motion.li>
          </Link>
        ))}
      </motion.ul>
      <img
        src={toggleMenu ? Close : Menu}
        alt={toggleMenu ? "Close" : "Menu"}
        className={`${
          toggleMenu ? "ss:absolute ss:right-[35px] ss:z-50" : ""
        } ss:block sm:hidden`}
        onClick={handleCloseClick}
      />
    </nav>
  );
};

export default Navbar;
