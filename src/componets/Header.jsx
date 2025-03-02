import React from "react";
import "./Header.css";
import { LOGO_URL } from "../utils/config";

const Header = () => (
  <div className="container">
  <div className="logo">
    <a href="#">
      <img src={LOGO_URL} alt="logo" />
    </a>
  </div>

  <div>
    <ul className="navLinks">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Cart</a>
      </li>
    </ul>
  </div>

</div>
  )

export default Header;

// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice
