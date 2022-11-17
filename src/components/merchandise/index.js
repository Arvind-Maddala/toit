import React from "react";
import cap from "../../assets/images/cap.png";
import circle1 from "../../assets/svg/purchasecircleleft.png";
import circle from "../../assets/svg/purchasecircle.png";
import "./merchandise.css";

const Merchandise = () => {
  return (
    <>
      <div className="merchandise"></div>
      <div className="merchandise__cap">
        <img src={cap} alt="merchandise" />
      </div>
      <div className="merchandise__circle1">
        <img src={circle1} alt="merchandise" />
      </div>
      <div className="merchandise__circle2">
        <img src={circle} alt="merchandise" />
      </div>
    </>
  );
};

export default Merchandise;
