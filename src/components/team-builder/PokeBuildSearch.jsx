import React, { useState, useEffect } from "react";
import "../css/searchbar.css";
import "../css/pokebuildsearch.css";
import PokeBuildCard from "./PokeBuildCard";
import axios from "axios";
import { useTransition, animated } from "react-spring";

const Searchbar = () => {
  const [searchItem, isSubmitted] = useState("");
  const [pokeInfo, setPokeInfo] = useState({});
  const [showCard, setShowCard] = useState(false);
  const transition = useTransition(showCard, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 200,
  });

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
    // console.log(res);
    receiveData(res);
    updateDesc(res);
    setShowCard(true);
    // setDisplayCard("block"); // control card display
  }

  const receiveData = (res) => {
    if (res.data["types"].length === 1) {
      setPokeInfo((prev) => ({
        ...prev,
        name: `${
          res.data["name"].charAt(0).toUpperCase() + res.data["name"].slice(1)
        }`,
        type: res.data["types"][0]["type"]["name"],
        img: `${res.data["sprites"]["front_default"]}`,
        dexNum: `#${res.data["id"]}`,
      }));
      if ("typeTwo" in pokeInfo) {
        delete pokeInfo.typeTwo;
      }
    } else {
      setPokeInfo((prev) => ({
        ...prev,
        name: `${
          res.data["name"].charAt(0).toUpperCase() + res.data["name"].slice(1)
        }`,
        type: res.data["types"][0]["type"]["name"],
        typeTwo: res.data["types"][1]["type"]["name"],
        img: `${res.data["sprites"]["front_default"]}`,
        dexNum: `#${res.data["id"]}`,
      }));
    }
  };

  async function updateDesc(res) {
    const specURL = `https://pokeapi.co/api/v2/pokemon-species/`;
    const dexNumber = `${res.data["id"]}`;
    const fetchSpec = await axios.get(`${specURL}${dexNumber}`);
    let description = null;
    // Function that searches for the english description - o(n) time complexity
    function descFetch() {
      let count = 0;
      for (let info of fetchSpec.data["flavor_text_entries"]) {
        if (info.language["name"] === "en") {
          return `${fetchSpec.data["flavor_text_entries"][count]["flavor_text"]}`;
        }
        count++;
      }
    }
    // store the found english description
    description = descFetch();
    setPokeInfo((prev) => ({
      ...prev,
      desc: description,
    }));
    setShowCard(true);
    // setDisplayCard("block"); // control card disply
  }

  return (
    <div>
      <section className="search-section">
        <div className="oval-one">
          <form action="" id="searchForm" onSubmit={handleSubmit}>
            <div className="oval-two">
              <input
                value={searchItem.query}
                type="text"
                placeholder="START LOOKING FOR POKEMON..."
                className="search-box"
                name="query"
                onChange={handleChange}
              />
            </div>
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass text-white search-icon fa-2x"></i>
            </button>
          </form>
        </div>
      </section>
      {transition((style, item) =>
        item ? (
          <animated.h2 style={style} className="text-white mt-6 result-text">
            {" "}
            Results...
          </animated.h2>
        ) : null
      )}
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <div className="container">
              <button id="x">x</button>
              <PokeBuildCard
                dexNum={pokeInfo.dexNum}
                pokeImg={pokeInfo.img}
                pokeName={pokeInfo.name}
                typeOne={pokeInfo.type}
                desc={pokeInfo.desc}
                typeTwo={
                  pokeInfo.hasOwnProperty("typeTwo") ? pokeInfo.typeTwo : null
                }
                // displayCard={displayCard}
                showCard={setShowCard}
              />
            </div>
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default Searchbar;
