import React, { useState } from "react";
import "../css/teambuilderpage.css";
import PartyTeam from "./PartyTeam";
import "../css/searchbar.css";
import PokemonSelector from "./PokemonSelector";
// import Searchbar from "../mainSearch/Searchbar";
import PokeBuildSearch from "./PokeBuildSearch";
import { v4 as uuidv4 } from "uuid";

const TeamBuilderPage = () => {
  const [members, setMember] = useState([]); // top level
  console.log(members);

  // Delete team member
  const deleteMember = (uuid) => {
    console.log("delete", uuid);
    setMember((prev) => {
      console.log(`This is previous: ${members}`);
      return prev.filter((member) => member.uuid !== uuid);
    });
  };

  // function for adding a member to the team
  const addMember = (pokeInfo) => {
    setMember((prev) => [...prev, pokeInfo]);
  };

  return (
    <div className="text-white">
      <div className="team-build-page flex">
        <PartyTeam members={members} onDelete={deleteMember} />
        <div className="poke-content-side flex flex-col items-center">
          <div className="poke-search-content mt-5">
            <PokeBuildSearch addMember={addMember} />
          </div>
          <PokemonSelector />
        </div>
      </div>
    </div>
  );
};

export default TeamBuilderPage;
