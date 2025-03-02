import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="shimer-search">
    <input className="shimer-searchInp" type="text" placeholder="" />
    <button className="shimer-searchBtn" >
    </button>
    
    <button className="shimer-filter"></button>
</div>
  );
}

export default SearchBar;
