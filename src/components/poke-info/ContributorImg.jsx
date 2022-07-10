import React from "react";
import "../css/contributerimg.css";

// TODO: resize component - its clearly too large
const ContributorImg = (props) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-10">
      <div className="outer-most flex items-center justify-center">
        <div className="middle-black flex items-center justify-center">
          <div className="img-border flex items-center justify-center">
            <img
              // TODO: Replace src & alt with desired image when ready
              src={props.imgSrc}
              alt="none"
              className="contributor-img"
            />
          </div>
        </div>
      </div>
      <div className="text-white mt-6">{props.teamMemb}</div>
      <div className="text-white text-sm italic">{props.teamTitle}</div>
    </div>
  );
};

export default ContributorImg;
