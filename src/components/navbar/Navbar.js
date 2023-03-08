import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import SearchBar from "../searchBar/SearchBar.js";
import { ThemeContext } from "../../context/ThemeContext.js";

export default function Navbar() {
  // NOTE getting color from the global context of ThemeContext
  const { color } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
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
