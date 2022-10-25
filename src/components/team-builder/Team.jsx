import React from "react";
import "../css/pokemon.css";
import Pokemon from "./Pokemon.jsx";

const Team = (props) => {
  return (
    <div className="party-items-container">
      {props.members.map((member) => (
        <Pokemon
          key={member.id}
          member={member.pokename}
          onDelete={props.onDelete}
          id={member.id}
        />
      ))}
    </div>
  );
};

export default Team;
