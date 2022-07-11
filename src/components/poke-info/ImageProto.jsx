import React from "react";
import "../css/imageproto.css";
import homeimg from "../imgs/homeimg.png";
import searchimg from "../imgs/searchimg.png";

const ImageProto = () => {
  return (
    <div className="img-comp absolute">
      <div className="proto-container absolute ">
        <div className="aboslute blur-circle left-0 right-0 top-0 bottom-0 m-0"></div>
        <div className="absolute w-96 left-0 top-0 -z-1">
          <img src={homeimg} alt="home-image" />
        </div>
        <div className="absolute w-96 left-20 top-20 -z-1">
          <img src={searchimg} alt="search-image" />
        </div>
      </div>
    </div>
  );
};

export default ImageProto;
