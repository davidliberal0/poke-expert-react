import React from "react";
import "./css/pokecard.css";

const PokeCard = (props) => {
  // console.log(props);
  // const [name, setName] = useState("");
  // const [img, setimage] = useState("");
  // const [description, setDescription] = useState("");
  // const [type, setType] = useState("");
  // const [dexNum, setDexNum] = useState("");

  return (
    <section className="rect-section text-white">
      <div className="rect">
        <img src={props.pokeImg} alt="" className="legendary-image mr-6" />
        <div className="rect-name-type mr-6">
          <h3 className="pokemon-name">{props.pokeName}</h3>
          <h3 className="dex-number">{props.dexNum}</h3>
          <div className="type">{props.typeOne}</div>
          <div className="type-two"></div>
        </div>
        <div className="poke-desc">{props.desc}</div>
      </div>
    </section>
  );
};

export default PokeCard;
