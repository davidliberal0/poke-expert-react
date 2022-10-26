import React from "react";
import "../css/pokemon.css";
import { FaTimes } from "react-icons/fa";
import squirtle from "../imgs/squirtle-sprite.png";

const Pokemon = (props) => {
  return (
    <div className="mb-2 party-item">
      <img className="team-image-sprite" src={props.img} alt="" />
      <div className="name-column flex flex-cols">
        <h1 className="mr-2 text-lg">{props.member}</h1>
        <div>
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => props.onDelete(props.id)}
          />
        </div>
        <div className="member-type">{props.type}</div>
        <div className="member-type-two"></div>
      </div>
      <p>lvl. 100</p>
    </div>
  );
};

export default Pokemon;
