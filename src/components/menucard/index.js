import React from "react";
import "./menucard.css";

const MenuCard = ({ title, picture }) => {
  return (
    <>
      <div
        className="menucard"
        style={{
          minWidth: "635px",
          height: "827px",
          background: `url(${picture}) no-repeat`,
          backgroundSize:"cover"
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
