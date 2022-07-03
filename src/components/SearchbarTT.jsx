import React, { useState } from "react";
import "./css/searchbar.css";
import PokeCard from "./PokeCard";
import axios from "axios";

const Searchbar = () => {
  const [searchItem, setSearchItem] = useState({});
  const [item, isSubmitted] = useState("");
  const found = false;

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setSearchItem((prev) => ({
  //     ...prev,
  //   }));
  // };

  // async const dataFetch = () => {
  //   const url = "https://pokeapi.co/api/v2/pokemon/"
  //   const res = await axios.get(`${url}$`)
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    const { value } = event.target;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const res = await axios.get(`${url}${value}`);
    found = true;
    isSubmitted(true); // test code
    receiveData(res);
  }

  // Seperate api call needed to fetch description located at a different route
  // async function fetchDesc(res) {
  //   const specURL = `https://pokeapi.co/api/v2/pokemon-species/`;
  //   const dexNumber = `${res.data["game_indices"][8]["game_index"]}`;
  //   const fetchSpec = await axios.get(`${specURL}${dexNumber}`);
  //   const desc = document.querySelector("#poke-desc");
  //   desc.innerHTML = fetchSpec.data["flavor_text_entries"][1]["flavor_text"];
  // }

  const receiveData = (res) => {
    recieveImg(res);
    recieveDexNum(res);
    recieveName(res);
    recieveTypeOne(res);
  };

  const recieveImg = (receiveData) => {
    return `${receiveData.data["sprites"]["front_default"]}`;
  };

  const recieveName = (receiveData) => {
    return `${
      receiveData.data["name"].charAt(0).toUpperCase() +
      receiveData.data["name"].slice(1)
    }`;
  };

  const recieveDexNum = (receiveData) => {
    return `#${receiveData.data["game_indices"][8]["game_index"]}`;
  };

  const recieveTypeOne = (receiveData) => {
    return receiveData.data["types"][0]["type"]["name"];
  };

  const recieveTypeTwo = (receiveData) => {
    if (receiveData.data["types"][1]["type"]["name"]) {
      return receiveData.data["types"][1]["type"]["name"];
    }
    return;
  };

  return (
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
                // onChange={handleChange}
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass text-white search-icon fa-2x"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <PokeCard
        dexNum={recieveDexNum}
        pokeImg={recieveImg}
        pokeName={recieveName}
        typeOne={recieveTypeOne}
      /> */}
    </div>
  );
};

export default Searchbar;
