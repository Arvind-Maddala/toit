import React from "react";
import { NavBar } from "../../components";
import "./toitintro.css";
import scroll from "../../assets/svg/scrolldown.png";
const ToitIntro = () => {
  return (
    <div className="ti--intro">
      <NavBar />
      <div className="ti__polkaoverlay"></div>
      <div className="ti--name">
        <div>
          <h1 className="ti__title"> TOIT</h1>
          <h1 className="ti__title"> BEER</h1>
        </div>

        <div className="ti--scrolldown">
          <button className="ti__scrollbtn">
            <img src={scroll} alt="scroll down" />
          </button>
          <p> SCROLL DOWN</p>
        </div>
      </div>
    </div>
  );
};

export default ToitIntro;
