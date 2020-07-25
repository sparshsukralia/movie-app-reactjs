import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Movie..."
        className="search"
      />
    </div>
  );
}

export default Search;
