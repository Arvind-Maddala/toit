import React from "react";
import "./Navbar.css";
import toit from "../../assets/images/toit-logo.png";
import location from "../../assets/svg/findmybeericon.png";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Navbar--Menu">
          <div></div>
          <h5>MENU</h5>
        </div>
        <div className="Navbar--logo">
          <img src={toit} alt="toit logo" />
        </div>
        <div className="Navbar--links">
          <h6>KUDIX</h6>
          <h6>RESERVATION</h6>
          <h6> BREWERY TOUR</h6>
          <div className="Navbar--location">
            <h5> FIND MY BEER</h5>
            <img src={location} alt="location" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
