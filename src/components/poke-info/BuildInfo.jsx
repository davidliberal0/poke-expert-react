import React from "react";
import "../css/buildinfo.css";
import site from "../imgs/site.png";
import ImageProto from "./ImageProto";

const BuildInfo = () => {
  return (
    <div className="build-info-section bg-black flex items-center justify-center">
      <div className="flex flex-row items-center justify-center main-info">
        <div className="text-white info-of-build">
          <div className="text-white text-3xl uppercase bold">
            Building Uniquely
          </div>
          <br />
          <p>
            During the design process, I focused on creating a web application
            that could deliver information in the simplest way possible. After
            multiple iterations of design, I settled for a minimal modern
            approach.
          </p>
          <br />
          <p>
            In its first prototype the site was full of a veriety of colors,
            which was very distracting. So, I went back to the drawing board,
            and removed the colors completely. Additionally, I stream-lined all
            information on the site. The result was the first minimal pokemon
            database on the web.
          </p>
          <br />
          <a href="https://www.figma.com/file/Z67nDT7nboFqqhBSvlblCm/PokeExpert">
            <button type="button" className="btn-process">
              View the Process
            </button>
          </a>
        </div>
        <div className="img-cont">
          <img className="img-site" src={site} alt="cool" />
        </div>
      </div>
    </div>
  );
};

export default BuildInfo;
