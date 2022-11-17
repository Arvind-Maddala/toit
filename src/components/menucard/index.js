import React from "react";
import "./menucard.css";
import bars from "../../assets/images/bars.png";

const MenuCard = ({ title, picture }) => {
  return (
    <>
      <div
        className="menucard"
        style={{
          width: "100%",
          height: "827px",
          background: `url(${picture}) no-repeat`,
        }}
      >
        <div className="menucard__content ">
          <p className="menucard__title">{title}</p>
          <p className="menucard--description">
            Lorem Ipsum Dollor Dummy Text should be here
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
