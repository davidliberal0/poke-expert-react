import React from "react";
import "../css/pokemon.css";
import { FaTimes } from "react-icons/fa";
import squirtle from "../imgs/squirtle-sprite.png";

const Pokemon = (props) => {
  return (
    <div className="wrapper">
      <div className="mb-2 party-item">
        <img className="team-image-sprite" src={props.img} alt="" />
        <div className="name-column ml-2">
          <h1 className="mr-2 mb-5 mt-5 text-lg">{props.member}</h1>
          <div className="member-type">{props.type}</div>
          <div className="member-type-two">{props.typeTwo}</div>
        </div>
        <p className="ml-8">lvl. 100</p>
      </div>
      <div className="close">
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.id)}
        />
      </div>
    </div>
  );
};

export default Pokemon;
