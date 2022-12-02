import React from "react";
import "../css/pokemon.css";
import Pokemon from "./Pokemon.jsx";
import { v4 as uuidv4 } from "uuid";

const Team = (props) => {
  console.log(`team: ${props.members}`);
  return (
    <div className="party-items-container">
      {props.members.map((member) => (
        <Pokemon
          key={uuidv4()}
          member={member.name}
          onDelete={props.onDelete}
          id={member.dexNum}
          img={member.img}
          type={member.type}
          typeTwo={member.typeTwo}
          pokemon={member}
        />
      ))}
    </div>
  );
};

export default Team;
