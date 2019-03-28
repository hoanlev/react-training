import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/counter" activeStyle={activeStyle}>
        Counter
      </NavLink>
      {" | "}
      <NavLink to="/table" activeStyle={activeStyle}>
        Table
      </NavLink>
    </nav>
  );
};

export default Header;
