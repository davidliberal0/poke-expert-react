import React from "react";
import "../css/teambuilderpage.css";
import PartyTeam from "./PartyTeam";
import Searchbar from "../mainSearch/SearchbarTT";

const TeamBuilderPage = () => {
  return (
    <div className="text-white">
      <div className="team-build-page flex">
        <PartyTeam />
        <div className="poke-content-side">
          <div className="poke-search-content">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBuilderPage;
