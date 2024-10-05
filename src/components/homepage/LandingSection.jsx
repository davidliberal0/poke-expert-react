import React from "react";
import "../css/landingsection.css";
import { useNavigate } from "react-router-dom";

const LandingSection = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/database')
  }


  return (
    <div className="landing-section text-white flex flex-col items-center justify-between">
      {/* left side */}
      <div className="landing-title-box text-white rounded-br-xl flex justify-center items-center">
        <div>
          <div className="github-link  border border-gray-700 rounded-3xl inline pl-10 pr-9 pt-2 pb-2 text-gray-300 hover:bg-neutral-900">
            <a href="https://github.com/davidliberal0/poke-expert-react">
              Dive Deeper Behind the Client
            </a>
            <div
              className="seperator inline border border-gray-300 mr-4 ml-4"
              role="seperator"
            ></div>
            <a href="https://github.com/davidliberal0/poke-expert-react">
              Read Code <span className=" pl-1 text-lg">→</span>
            </a>
          </div>
          <div className="mt-8">
            <div className="text-7xl font-bold mb-2">Find Your Pokemon</div>
            <div className="text-7xl font-bold mb-6">To Build Your Team.</div>
          </div>
          <div className="main-land-line  mb-6 text-xl">
            PokeExpert streamlines the original pokedex and pokemon database.
            It's built for pokemon nerds who need information fast.
          </div>
          <div>
            {/* <button className="build-button bg-white hover:bg-red-300 text-black font-bold py-2 px-4 rounded">
              Build
            </button> */}
            <button
              onClick={handleButtonClick}
              type="button"
              className="build-button bg-red-700 rounded-xl text-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold px-4 py-2 text-center mr-2 mb-2"
            >
              Start searching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
