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
      {" | "}
      <NavLink to="/form" activeStyle={activeStyle}>
        Login Form
      </NavLink>
      {" | "}
      <NavLink to="/child" activeStyle={activeStyle}>
        Route Child
      </NavLink>
    </nav>
  );
};

export default Header;
