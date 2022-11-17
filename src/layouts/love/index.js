import React from "react";
import "./love.css";
import dog from "../../assets/images/dog.png";
import beer1 from "../../assets/images/toitbeerleft.png";
import beer2 from "../../assets/images/toitbeerright.png";
import circle from "../../assets/svg/circle.png";

const Love = () => {
  return (
    <>
      <div className="love">
        <div>
          <div className="love__blank"></div>
          <div className="love__banner">
            <div className="love__bannergradient"></div>
          </div>
        </div>
        <div className="love__content">
          <div className="love__doglogo">
            <img src={dog} alt="dog logo" />
          </div>
          <p> COME BY. TRY EVERYTHING TWICE.</p>
          <h1> LOVE</h1>
        </div>
        <div className="love__beerleft">
          <img src={beer1} alt="" />
        </div>
        <div className="love__beerright">
          <img src={beer2} alt="" />
        </div>
        <div className="circle1">
          <img src={circle} alt="" />
        </div>
        <div className="circle2">
          <img src={circle} alt="" />
        </div>
      </div>
    </>
  );
};

export default Love;
