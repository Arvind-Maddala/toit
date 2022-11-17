import React from "react";
import arrow from "../../assets/svg/footerarrow.png";
import "./footer.css";
import footerleft from "../../assets/svg/footerleft.png";
import footerright from "../../assets/svg/footerright.png";
import footerdrink from "../../assets/images/footerdrink.png";
import scrollTop from "../../assets/svg/scrolltop.png";

const Footer = () => {
  return (
    <>
      <div className="footer__parent">
        <div className="footer">
          <div className="footer--left">
            <div className="footer__links">
              <ul>
                <li>
                  <span>
                    <img src={arrow} alt="visit about" />
                  </span>
                  About
                </li>
                <li>
                  <span>
                    <img src={arrow} alt="visit beers" />
                  </span>
                  Beers
                </li>
                <li>
                  <span>
                    <img src={arrow} alt="visit food" />
                  </span>
                  Food
                </li>
                <li>
                  <span>
                    <img src={arrow} alt="visit shop" />
                  </span>
                  Shop
                </li>
                <li>
                  <span>
                    <img src={arrow} alt="visit contact" />
                  </span>
                  Contact
                </li>
              </ul>
            </div>
            <p className="footer__copyright"> &copy; Copyright 2021</p>
          </div>
          <div className="footer--right">
            <div className="footer__contactdetails">
              <div className="footer__address">
                <p> 298, 100Ft Rd</p>
                <p> Indira Nagar II Stage</p>
                <p> Bengaluru 560038</p>
                <p> Karnataka</p>
              </div>
              <div>
                <p className="footer__number"> +91 90197 13388</p>
                <p className="footer__email"> toitblr@toit</p>
              </div>
              <p className="footer__copyright2"> All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div className="footer__scrolltop">
          <div className="footer__scrolltopAlign">
            <img src={scrollTop} alt="footer" />
            <p>TOP</p>
          </div>
        </div>
        <div className="footer--drink">
          <div className="footer__bannerleft">
            <img src={footerleft} alt="footer" />
          </div>
          <div className="footer__bannerdrink">
            <img src={footerdrink} alt="footer" />
          </div>
          <div className="footer__bannerright">
            <img src={footerright} alt="footer" />
          </div>
        </div>
      </div>
      <div className="footer-gradient"></div>
    </>
  );
};

export default Footer;
