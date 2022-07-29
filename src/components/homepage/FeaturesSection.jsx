import React from "react";
import "../css/featuressection.css";

const FeaturesSection = () => {
  return (
    <div className="features-section text-white flex flex-row items-center justify-center">
      <div className="bullet-land flex flex-col items-center justify-center mr-8 text-center">
        <div className="rounded-full w-10 h-10 bg-gradient-to-br from-red-800 to-red-500"></div>
        <div className="text-2xl uppercase mt-4 font-bold">Brainstorm</div>
        <div className="text-lg">
          Map out your jouney using comprehensive tools
        </div>
      </div>
      <div className="bullet-land flex flex-col items-center justify-center mr-8 text-center">
        <div className="rounded-full w-10 h-10 bg-gradient-to-br from-red-800 to-red-500"></div>
        <div className="text-2xl uppercase mt-4 font-bold">Search Pokémon</div>
        <div className="text-lg">
          Browse a database of pokemon from generation 1-5
        </div>
      </div>
      <div className="bullet-land flex flex-col items-center justify-center text-center">
        <div className="rounded-full w-10 h-10 bg-gradient-to-br from-red-800 to-red-500"></div>
        <div className="text-2xl uppercase mt-4 font-bold">Build your team</div>
        <div className="text-lg">
          Assemble your team using our team modern team builder
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
