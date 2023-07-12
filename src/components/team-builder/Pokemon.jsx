import React from "react";
import "../css/pokemon.css";
import { FaTimes } from "react-icons/fa";

const typeColor = {
  ground: "#b59469",
  water: "#0037ff",
  fire: "#ff2a00",
  grass: "#0b7026",
  ghost: "#310273",
  dragon: "#964ef5",
  steel: "#8a8888",
  fairy: "#b569b4",
  psychic: "#f781ef",
  normal: "#e3d8ca",
  fighting: "#800c04",
  flying: "#c5b8e3",
  dark: "#0f0f1f",
  electric: "#ffee00",
  poison: "#772ff5",
  ice: "#14bbe0",
  rock: "#AE964D",
};

const Pokemon = (props) => {
  return (
    <div className="wrapper">
      <div
        className="mb-2 party-item"
        style={{
          backgroundColor: "black",
          borderRight: `0.5rem solid ${typeColor[props.type]}`,
          borderRadius: "5px",
          // borderBottomRightRadius: "5px",
          // borderTopRightRadius: "5px",
        }}
      >
        <img className="team-image-sprite" src={props.img} alt="" />
        <div className="name-column ml-2">
          <h1 className="mr-2 mb-5 mt-5 text-lg">{props.member}</h1>
          <div
            className="member-type"
            style={{
              backgroundColor: `${typeColor[props.type]}`,
              textTransform: "capitalize",
              color: "black",
            }}
          >
            {props.type}
          </div>
          <div
            className="member-type-two"
            style={
              props.typeTwo
                ? {
                    backgroundColor: typeColor[props.typeTwo],
                    textTransform: "capitalize",
                    color: "black",
                    display: "block",
                  }
                : {}
            }
          >
            {props.typeTwo ? props.typeTwo : ""}
          </div>
        </div>
        <p className="ml-8">lvl. 100</p>
      </div>
      <div className="close">
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.pokemon.uuid)}
        />
      </div>
    </div>
  );
};

export default Pokemon;
