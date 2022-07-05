import React, { useState } from "react";
import "./css/searchbar.css";
import PokeCard from "./PokeCard";
import axios from "axios";

let found = false;

const Searchbar = () => {
  const [searchItem, isSubmitted] = useState("");
  const [pokeInfo, setPokeInfo] = useState({});

  const handleChange = (event) => {
    isSubmitted({
      searchItem: event.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.query.value.toLowerCase();
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const res = await axios.get(`${url}${searchTerm}`);
    console.log(res);
    found = true;
    receiveData(res);
    updateDesc(res);
  }

  const receiveData = (res) => {
    setPokeInfo((prev) => ({
      ...prev,
      name: `${
        res.data["name"].charAt(0).toUpperCase() + res.data["name"].slice(1)
      }`,
      type: res.data["types"][0]["type"]["name"],
      img: `${res.data["sprites"]["front_default"]}`,
      dexNum: `#${res.data["game_indices"][8]["game_index"]}`,
    }));

    console.log(pokeInfo);
  };

  async function updateDesc(res) {
    const specURL = `https://pokeapi.co/api/v2/pokemon-species/`;
    const dexNumber = `${res.data["game_indices"][8]["game_index"]}`;
    const fetchSpec = await axios.get(`${specURL}${dexNumber}`);
    const desc = document.querySelector("#poke-desc");
    setPokeInfo((prev) => ({
      ...prev,
      desc: fetchSpec.data["flavor_text_entries"][1]["flavor_text"],
    }));
  }

  // Holds the rendered jsx
  let content;

  if (found) {
    content = (
      <div>
        <section className="search-section">
          <div className="oval-one">
            <div className="oval-two">
              <form action="" id="searchForm" onSubmit={handleSubmit}>
                <input
                  value={searchItem.query}
                  type="text"
                  placeholder="START LOOKING FOR POKEMON..."
                  className="search-box"
                  name="query"
                  onChange={handleChange}
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass text-white search-icon fa-2x"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
        <h2 className="text-white mt-6 result-text">Results...</h2>
        <PokeCard
          dexNum={pokeInfo.dexNum}
          pokeImg={pokeInfo.img}
          pokeName={pokeInfo.name}
          typeOne={pokeInfo.type}
          desc={pokeInfo.desc}
        />
      </div>
    );
  } else {
    content = (
      <div>
        <section className="search-section">
          <div className="oval-one">
            <div className="oval-two">
              <form action="" id="searchForm" onSubmit={handleSubmit}>
                <input
                  value={searchItem.query}
                  type="text"
                  placeholder="START LOOKING FOR POKEMON..."
                  className="search-box"
                  name="query"
                  onChange={handleChange}
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass text-white search-icon fa-2x"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return content;
};

export default Searchbar;
