import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, text }) => {
  const location = useLocation();

  /*   const isActive = (path) => {
    return location.pathname === path ? "text-desaturatedcyan" : "";
  }; */

  return (
    <Link to={to}>
      <li>{text}</li>
    </Link>
  );
};

export default NavLink;
