import React from "react";
import toit from "../../assets/images/toitbuilding.png";
import line from "../../assets/svg/line.png";
import circle from "../../assets/svg/explorecircle.png";
import arrow from "../../assets/svg/explorearrow.png";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus--parent">
        <div className="aboutus">
          <div className="aboutus__blank"> </div>
          <div className="aboutus__toitbuilding">
            <img className="aboutus__toitbuildingimg" src={toit}  alt="toit building" />
          </div>
        </div>
        <div className="aboutus__content">
          <p className="aboutus__title">ABOUT US</p>
          <h1> WE ARE TOIT.</h1>
          <h1> YOU SHOULD BE TOO...</h1>
          <p className="aboutus__desc">
            Toit is a brew pub, brewing a revolutionary culture. We started out
            as a sweet little Bengaluru brewing culture with the promise of some
            bodacious brews, fabulous foods and a supreme brew-pub experience
          </p>

          <div className="aboutus__explore">
            <p> EXPLORE</p>
            <button className="aboutus__explorebtn">
              <div className="aboutus__explorecircle">
                <img src={circle} alt="explore toit" />
              </div>
              <div className="aboutus__explorearrow">
                {" "}
                <img src={arrow} alt="explore toit" />
              </div>
            </button>
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
