import React from "react";
import "./css/pokecard.css";

export default class PokeCard extends React.Component {
  render() {
    return (
      <section className="rect-section text-white">
        <div className="rect">
          <img
            src={this.props.pokeImg}
            alt=""
            className="legendary-image mr-6"
          />
          <div className="rect-name-type mr-6">
            <h3 className="pokemon-name">{this.props.pokeName}</h3>
            <h3 className="dex-number">{this.props.dexNum}</h3>
            <div className="type">{this.props.typeOne}</div>
            <div className="type-two"></div>
          </div>
          <div className="poke-desc"></div>
        </div>
      </section>
    );
  }
}
