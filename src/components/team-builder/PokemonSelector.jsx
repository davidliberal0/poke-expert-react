import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonSelector = () => {
  const [selected, setSelected] = useState({});

  // store the pokemon fetched
  const [fetchedPoke, setFetchedPoke] = useState([]);

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  // store pokemon selection list in state

  console.log("rendered");

  async function fetchAllPokemon() {
    let numberToSelect = 10;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${numberToSelect}`;
    const res = await axios.get(url);
    console.log(res.data.results);
    fetchPokemon(res); // call the fetchPokemon array
  }

  async function fetchPokemon(res) {
    for (let pokeURL of res.data.results) {
      const url = pokeURL["url"];
      const response = await axios.get(url);
      // const sprite = response.data["sprites"]["front_default"];
      const vitals = {
        sprite: `${response.data["sprites"]["front_default"]}`,
      };
      setFetchedPoke((prev) => ({
        ...prev,
        vitals,
      }));
    }
  }

  // // fetchAllPokemon();
  // console.log(fetchedPoke);

  return (
    <>
      <div className="bg-black">Something Goes Here</div>
      <div className="selection-container">
        {/* {fetchedPoke.map((pokemon) => (
          <img src={pokemon.sprite} alt={""} />
        ))} */}
        <img src={fetchedPoke.sprite} alt={""} />
      </div>
    </>
  );
};

export default PokemonSelector;
