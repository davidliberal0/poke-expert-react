import React from "react";
import "../css/landingsection.css";
import delphox from "../imgs/delphox.png";

const LandingSection = () => {
  return (
    <div className="landing-section text-white flex items-center justify-between">
      {/* left side */}
      <div className="landing-title-box text-black bg-red-400 mr-4 rounded-r-xl rounded-br-xl flex justify-center items-center">
        <div>
          <div>
            <div className="text-5xl uppercase font-bold mb-2">Find Your</div>
            <div className="text-5xl uppercase font-bold mb-2">Pokemon To</div>
            <div className="text-5xl uppercase font-bold mb-6">
              Build Your Team.
            </div>
          </div>
          <div className="uppercase mb-6">
            Explore our database of pokemon from generation 1-5
          </div>
          <div>
            <button className="explore-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-5">
              Explore
            </button>
            <button className="build-button bg-white hover:bg-red-300 text-black font-bold py-2 px-4 rounded">
              Build
            </button>
          </div>
        </div>
      </div>
      {/* <div className="delphox-container">
        <img className="delphox-img" src={delphox} alt="delphox" />
      </div> */}
      <div className="landing-left text-black text-8xl bg-red-400 rounded-l-xl rounded-bl-xl flex flex-col justify-center items-center">
        <div className="delphox-container">
          <img className="delphox-img" src={delphox} alt="delphox" />
        </div>
        <div className="align-center ml-40 font-bold tracking-widest">
          <div className="mb-8 uppercase">Build.</div>
          <div className="mb-8 uppercase">Battle.</div>
          <div className="mb-8 uppercase">Search.</div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
