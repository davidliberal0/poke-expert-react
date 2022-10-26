import React, { useState } from "react";
import "../css/teambuilderpage.css";
import PartyTeam from "./PartyTeam";
import "../css/searchbar.css";
import PokemonSelector from "./PokemonSelector";
// import Searchbar from "../mainSearch/Searchbar";
import PokeBuildSearch from "./PokeBuildSearch";

const TeamBuilderPage = () => {
  const [members, setMember] = useState([
    {
      pokename: "David",
      id: 1,
    },
    {
      pokename: "Jason",
      id: 2,
    },
    {
      pokename: "Chelsea",
      id: 3,
    },
  ]); // top level

  // Delete team member
  const deleteMember = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="text-white">
      <div className="team-build-page flex">
        <PartyTeam members={members} onDelete={deleteMember} />
        <div className="poke-content-side flex flex-col items-center">
          <div className="poke-search-content mt-5">
            <PokeBuildSearch />
          </div>
          <PokemonSelector />
        </div>
      </div>
    </div>
  );
};

export default TeamBuilderPage;
