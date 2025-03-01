import React from "react";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import "./Header.css";

const Header = () => (
    <div className="container">
      <div>
        <a href="#">
          <FcAcceptDatabase />
        </a>
      </div>

      <div>
        <input className="searchInp" type="text" placeholder="Search..." />
        <button className="searchBtn">
          <FcSearch />
        </button>
      </div>

      <div>
        <a href="">
          <FcReading />
        </a>
      </div>
    </div>
  )

export default Header;

// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice
