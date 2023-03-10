import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "../searchBar/SearchBar.js";
// import { ThemeContext } from "../../context/ThemeContext.js";
import { useTheme } from "../../hooks/useTheme.js";

export default function Navbar() {
  // NOTE getting color from the global context of ThemeContext
  // const { color } = useContext(ThemeContext);
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav
        onClick={() =>
          changeColor(
            `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
              Math.random() * 255
            )},${Math.floor(Math.random() * 255)})`
          )
        }
      >
        <div className="display">
          <Link className="brand" to="/">
            <h1>Home</h1>
          </Link>
          <div className="search">
            <SearchBar />
          </div>
        </div>
        <Link className="brand" to="/create">
          Create
        </Link>
      </nav>
    </div>
  );
}
