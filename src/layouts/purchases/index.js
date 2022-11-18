import React from "react";
import { Merchandise } from "../../components";
import "./purchases.css";
import shopnow from "../../assets/svg/shopnow.png";
import circle1 from "../../assets/svg/purchasecircleleft.png";
import circle from "../../assets/svg/purchasecircle.png";

const Purchases = () => {
  return (
    <>
      <div className="purchases__parent">
        <div className="purchases">
          <div className="block"></div>

          <div className="purchses__merchandise">
            <Merchandise />
          </div>
        </div>
        <div>
          <div className="purchases--context">
            <h1>WANT TO PURCHASE OUR MERCHANDISE</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </p>
            <button>
              {" "}
              SHOP NOW{" "}
              <span className="purchases__arrow">
                {" "}
                <img src={shopnow} alt="click to shop" />
              </span>
            </button>
          </div>
        </div>
        <div className="merchandise__circle1">
          <img src={circle1} alt="merchandise" />
        </div>
        <div className="merchandise__circle2">
          <img src={circle} alt="merchandise" />
        </div>
      </div>
    </>
  );
};

export default Purchases;
