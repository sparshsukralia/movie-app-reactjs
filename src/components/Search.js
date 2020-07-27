import React from "react";
import "./Search.css";

function Search({ searchInput }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Movie..."
        className="search"
        onChange={searchInput}
      />
    </div>
  );
}

export default Search;
