import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Icons&Images
import userIcon from "../../Assets/Icons/perfil.png";
import logoDarkTheme from "../../Assets/Images/logo-export.png";
import logoLightTheme from "../../Assets/Images/logo-export-light.png";
import { ThemeContext } from "../../Context/ThemeContext";

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="nav-flex">
      <div className="logo">
        <Link to={"/"}>
          <img src={theme === "dark" ? logoDarkTheme : logoLightTheme} alt="" />
        </Link>
      </div>

      <div className="user-icon">
        <img
          src={userIcon}
          style={
            theme === "dark"
              ? { filter: "invert()", mixBlendMode: "lighten" }
              : { filter: "none" }
          }
          alt=""
        />
      </div>

      <nav className="navbar">
        <Link
          style={theme === "dark" ? null : { color: "black" }}
          to={"/resultados"}
        >
          Resultados
        </Link>
        <Link
          style={theme === "dark" ? null : { color: "black" }}
          to={"/modalidades"}
        >
          Modalidades
        </Link>
      </nav>

      <div className="theme-box">
        <input
          type="checkbox"
          name="theme"
          onChange={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
        />
        <label
          style={theme === "dark" ? { color: "white" } : { color: "black" }}
          htmlFor="theme"
        >
          {theme}
        </label>
      </div>

      <div className="logout-link">
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Nav;
