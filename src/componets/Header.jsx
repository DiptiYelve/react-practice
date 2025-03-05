import React from "react";
import "./Header.css";
import logo from "../utils/logo.png";
import { Link } from "react-router";

const Header = () => (
  <div className="container">
  <div className="logo">
    <a href="#">
      <img src={logo} alt="logo" />
    </a>
  </div>

  <div>
    <ul className="navLinks">
      <li>
      <Link to="/"> Home </Link> 
      </li>
      <li>
      <Link to="/about"> About </Link> 
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li> 
      <li>
        <Link to="#">Cart</Link>
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
