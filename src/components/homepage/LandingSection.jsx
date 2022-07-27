import React from "react";
import "../css/landingsection.css";
import delphox from "../imgs/delphox.png";

const LandingSection = () => {
  return (
    <div className="landing-section text-white flex flex-col items-center justify-between">
      {/* left side */}
      <div className="landing-title-box text-white rounded-br-xl flex justify-center items-center">
        <div>
          <button className="github-link rounded-xl ">
            Check out the repository
          </button>
          <div>
            <div className="text-7xl uppercase font-bold mb-2">Find Your Pokemon</div>
            <div className="text-7xl uppercase font-bold mb-6">
              To Build Your Team
            </div>
          </div>
          <div className="main-land-line uppercase mb-6 text-xl">
            PokeExpert streamlines the original pokedex and pokemon database. It's built for pokemon nerds who need information fast.
          </div>
          <div>
            {/* <button className="build-button bg-white hover:bg-red-300 text-black font-bold py-2 px-4 rounded">
              Build
            </button> */}
            <button type="button" class="build-button rounded-xl text-white bg-gradient-to-r from-red-500 to-red-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded px-4 py-2 text-center mr-2 mb-2">
              Start searching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
