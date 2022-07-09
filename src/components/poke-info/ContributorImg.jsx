import React from "react";
import "../css/contributerimg.css";

// TODO: resize component - its clearly too large
const ContributorImg = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="outer-most flex items-center justify-center">
        <div className="middle-black flex items-center justify-center">
          <div className="img-border flex items-center justify-center">
            <img
              // TODO: Replace src & alt with desired image when ready
              src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"
              alt="none"
              className="contributor-img"
            />
          </div>
        </div>
      </div>
      <div className="text-white mt-6">David Liberal</div>
      <div className="text-white text-sm italic">Front-End Developer</div>
    </div>
  );
};

export default ContributorImg;
