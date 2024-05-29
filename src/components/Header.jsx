import React from "react";
import coffeeIcon from "./images/coffeeicon.png";
import hamburger from "./images/hamm.jpg";


function Header() {
  return (
    <div style={{ fontFamily: "Quesha" }}>
      <div className="large_header">
        <div className="head_flex">
          <div className="head_logo">
            <p style={{ fontFamily: "Quesha" }}>
              {" "}
              <img className="company_logo" src={coffeeIcon} />
              Cafe Reagire
            </p>
          </div>
          <div class="navbar">
            <ul>
              <li>Home</li>
              <li><a href="/products.jsx">Products</a></li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <header className="mobile_header">
        <div className="mobile_logo">
          <img className="company_logo" src={coffeeIcon} />
        </div>
        <h1>CAFE REAGIRE</h1>
        <div class="hamburger_open">
          <button onclick="show_nav()" id="myButton" class="ham_click">
            <img className="hamburger_button" id="myImg" src={hamburger} />
          </button>
        </div>
      </header>

      <div id="navbar" className="mobile_menu hide ">
        <ul className="mobile_nav_list">
          <li>
            {" "}
            <a href="home.php">HOME</a>
          </li>
          <li>SHIRTS</li>
          <li>
            {" "}
            <a href="home.php">- European Shirts</a>
          </li>
          <li>
            {" "}
            <a href="home.php">- American Shirts</a>
          </li>
          <li>
            {" "}
            <a href="home.php">- African Shirts</a>
          </li>
          <li>
            {" "}
            <a href="home.php">- Asian Shirts</a>
          </li>
          <li>
            {" "}
            <a href="home.php">RETRO SHIRTS</a>
          </li>
          <li>
            {" "}
            <a href="home.php">SPECIALST SHIRTS</a>
          </li>
          <li>
            {" "}
            <a href="home.php">OTHER FOOTBALL PRODUCTS</a>
          </li>
          <li>
            {" "}
            <a href="home.php">CONTACT US</a>
          </li>
        </ul>
      </div>
      <img className="cafe_mobile" src={cafe} />
    </div>
  );
}

export default Header;
