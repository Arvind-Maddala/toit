import React from "react";
import "./Navbar.css";
import toit from "../../assets/images/toit-logo.png";
import location from "../../assets/svg/findmybeericon.png";
import line1 from "../../assets/svg/menuline1.png";
import line2 from "../../assets/svg/menuline2.png";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Navbar--Menu">
          <div className="Navbar__menu">
            <div className="menu__links">
              <img className="NavBar__menuline1" src={line1} alt="menu" />
              <img className="NavBar__menuline2" src={line2} alt="menu" />
              <img className="NavBar__menuline3" src={line1} alt="menu" />
            </div>
          </div>
          <p>MENU</p>
        </div>
       <div className="navbar__logolinks">
       <div className="Navbar--logo">
          <img src={toit} alt="toit logo" />
        </div>
        <div className="Navbar--links">
          <p>KUDIX</p>
          <p>RESERVATION</p>
          <p> BREWERY TOUR</p>
          <div className="Navbar--location">
            <p> FIND MY BEER</p>
            <img src={location} alt="location" />
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default NavBar;
