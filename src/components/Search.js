import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="md-form active-purple active-purple-2 mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      ></input>
    </div>
  );
};

export default Search;
