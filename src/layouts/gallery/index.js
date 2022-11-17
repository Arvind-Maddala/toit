import React from "react";
import "./gallery.css";
import image1 from "../../assets/images/gallery1.png";
import image2 from "../../assets/images/gallery2.png";
import image3 from "../../assets/images/gallery3.png";
import image4 from "../../assets/images/gallery4.png";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <img src={image1} alt="images gallery" />
        <img src={image2} alt="images gallery" />
        <img src={image3} alt="images gallery" />
        <img src={image4} alt="images gallery" />
      </div>
    </>
  );
};

export default Gallery;
