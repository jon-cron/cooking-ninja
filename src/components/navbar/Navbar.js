import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "../searchBar/SearchBar.js";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="brand" to="/">
          <h1>Home</h1>
        </Link>
        <SearchBar />
        <Link className="brand" to="/create">
          Create
        </Link>
      </nav>
    </div>
  );
}
