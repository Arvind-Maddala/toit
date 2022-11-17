import React from "react";
import toit from "../../assets/images/toitbuilding.png";
import line from "../../assets/svg/line.png";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus--parent">
        <div className="aboutus">
          <div className="aboutus__blank"> </div>
          <div className="aboutus__toitbuilding">
            <img src={toit} alt="toit building" />
          </div>
        </div>
        <div className="aboutus__content">
          <p className="aboutus__title">ABOUT US</p>
          <h1> WE ARE TOIT.</h1>
          <h1> YOU SHOULD BE TOO...</h1>
          <p className="aboutus__desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <div className="aboutus__explore">
            <p> EXPLORE</p>
            <button></button>
          </div>
        </div>
        <div className="aboutus__line">
          <img src={line} alt="line" />
        </div>
        <div className="aboutus__gradient"></div>
        <div className="aboutus__brand">
          <p>TOIT BREWERY</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
