import React from "react";
import { Merchandise } from "../../components";
import "./purchases.css";
import shopnow from "../../assets/svg/shopnow.png";

const Purchases = () => {
  return (
    <>
      <div className="purchases__parent">
        <div className="purchases">
          <div className="block"></div>

          <div>
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
      </div>
    </>
  );
};

export default Purchases;
