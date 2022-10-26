import React from "react";
import "../css/pokemon.css";
import Pokemon from "./Pokemon.jsx";

const Team = (props) => {
  return (
    <div className="party-items-container">
      {props.members.map((member) => (
        <Pokemon
          key={member.dexNum}
          member={member.name}
          onDelete={props.onDelete}
          id={member.dexNum}
          img={member.img}
          type={member.type}
          typeTwo={member.typeTwo}
        />
      ))}
    </div>
  );
};

export default Team;
