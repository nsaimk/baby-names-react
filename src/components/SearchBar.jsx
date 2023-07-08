import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a name"
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default SearchBar;
