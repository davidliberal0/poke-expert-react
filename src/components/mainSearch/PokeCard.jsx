import React, { useState } from "react";
import "../css/pokecard.css";

// All Possible Types w/ Color Hex Values
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
  bug: "#c5f542",
  rock: "#AE964D",
};

// --------------

const rgbas = {
  ground: "rgba(181, 148, 105,",
  water: "rgba(0, 55, 255,",
  fire: "rgba(255, 42, 0,",
  grass: "rgba(11, 112, 38,",
  ghost: "rgba(49, 2, 115,",
  dragon: "rgba(150, 78, 245,",
  steel: "rgba(138, 136, 136,",
  fairy: "rgba(181, 105, 180,",
  psychic: "rgba(247, 129, 239,",
  normal: "rgba(227, 216, 202,",
  fighting: "rgba(128, 12, 4,",
  flying: "rgba(197, 184, 227,",
  dark: "rgba(15, 15, 31,",
  electric: "rgba(255, 238, 0,",
  poison: "rgba(119, 47, 245,",
  ice: "rgba(20, 187, 224,",
  bug: "rgba(197, 245, 66,",
  rock: "rgba(174, 150, 77,",
};

const PokeCard = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="rect-section text-white">
      <a
        href={`https://bulbapedia.bulbagarden.net/wiki/${props.pokeName}_(Pokémon)`}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="rect"
          style={{
            display: "flex",
            boxShadow: isHovering
              ? `${rgbas[props.typeOne]}0.56) 0px 22px 70px 4px`
              : "none",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={props.pokeImg} alt="" className="legendary-image mr-6" />
          <div className="rect-name-type mr-6">
            <h3 className="pokemon-name">{props.pokeName}</h3>
            <h3 className="dex-number">{props.dexNum}</h3>
            <div
              className="type"
              style={{
                backgroundColor: typeColor[props.typeOne],
                color: "black",
              }}
            >
              {props.typeOne.charAt(0).toUpperCase() + props.typeOne.slice(1)}
            </div>
            <div
              className="type-two"
              style={
                "typeTwo" in props
                  ? {
                      backgroundColor: typeColor[props.typeTwo],
                      textTransform: "capitalize",
                      color: "black",
                      display: "block",
                    }
                  : {}
              }
            >
              {"typeTwo" in props ? props.typeTwo : ""}
            </div>
          </div>
          <div className="poke-desc">{props.desc}</div>
        </div>
      </a>
    </section>
  );
};

export default PokeCard;
