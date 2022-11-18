import React from "react";
import cap from "../../assets/images/cap.png";

import "./merchandise.css";

const Merchandise = () => {
  return (
    <>
      <div className="merchandise__parent">
        <div className="merchandise"></div>
        <div className="merchandise__cap">
          <img src={cap} alt="merchandise" />
        </div>
        
      </div>
    </>
  );
};

export default Merchandise;
