import React from "react";
import { MenuCard } from "../../components";
import "./menucards.css";
import bars from "../../assets/images/bars.png";
import beers from "../../assets/images/beers.png";
import brewery from "../../assets/images/brewery.png";

const MenuCards = () => {
  return (
    <div className="menucards">
      <MenuCard picture={bars} title="BARS" />
      <MenuCard picture={beers} title="BEERS" />
      <MenuCard picture={brewery} title="BREWERY" />
    </div>
  );
};

export default MenuCards;
