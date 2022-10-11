import React from "react";
import "../css/teambuilderpage.css";
import PartyTeam from "./PartyTeam";
import "../css/searchbar.css";
import PokemonSelector from "./PokemonSelector";
import Searchbar from "../mainSearch/Searchbar";

const TeamBuilderPage = () => {
  return (
    <div className="text-white">
      <div className="team-build-page flex">
        <PartyTeam />
        <div className="poke-content-side flex flex-col items-center">
          <div className="poke-search-content mt-5">
            <Searchbar />
          </div>
          <PokemonSelector />
        </div>
      </div>
    </div>
  );
};

export default TeamBuilderPage;
