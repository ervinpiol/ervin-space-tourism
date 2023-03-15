import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, text }) => {
  const location = useLocation();

  return (
    <Link to={to}>
      <li>{text}</li>
    </Link>
  );
};

export default NavLink;
