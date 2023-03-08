import "./SearchBar.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setSearch("");
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSearch}>
        <input
          placeholder="search recipes..."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
}
