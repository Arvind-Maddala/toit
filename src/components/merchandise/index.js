import React from "react";
import cap from "../../assets/images/cap.png";
import "./merchandise.css";

const Merchandise = () => {
  return (
    <>
      <div className="merchandise">
        <img className="merchandise__cap" src={cap} alt="merchandise" />
      </div>
    </>
  );
};

export default Merchandise;
