import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonSelector = (props) => {
  const [fetchedPoke, setFetchedPoke] = useState([]);
  const [pokeInfo, setPokeInfo] = useState([]); 

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const handlePokemonClick = async (pokemonName) => {
    console.log(pokemonName)
    const searchName = pokemonName.toLowerCase()
    const searchURL = `https://pokeapi.co/api/v2/pokemon/`; 
    const res = await axios.get(`${searchURL}${searchName}`)
    receiveData(res) 
  }

  async function fetchAllPokemon() {
    const numberToSelect = 50;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${numberToSelect}`;
    const res = await axios.get(url);
    fetchPokemon(res.data.results);
  }

  async function fetchPokemon(pokemonList) {
    const promises = pokemonList.map(async (pokeURL) => {
      const response = await axios.get(pokeURL.url);
      return {
        name: response.data.name,
        sprite: response.data.sprites.front_default,
      };
    });

    const pokemons = await Promise.all(promises);
    setFetchedPoke(pokemons);
  }

  const receiveData = (res) => {
    if (res.data["types"].length === 1) {
      setPokeInfo((prev) => ({
        ...prev,
        name: `${
          res.data["name"].charAt(0).toUpperCase() + res.data["name"].slice(1)
        }`,
        type: res.data["types"][0]["type"]["name"],
        typeTwo: null,
        img: `${res.data["sprites"]["front_default"]}`,
        dexNum: `#${res.data["id"]}`,
      }));
      // TODO : find work around
      // if ("typeTwo" in pokeInfo) {
      //   delete pokeInfo.typeTwo;
      // }
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
  }    
 
  

  return (
    <>
      <div className="bg-black text-white p-4">Something Goes Here</div>
      <div className="grid grid-cols-10 gap-4 p-4">
        {fetchedPoke.map((pokemon) => (
          <div key={pokemon.name} className="flex flex-col items-center bg-white rounded-lg p-2 shadow-md" onClick={() => {
            handlePokemonClick(pokemon.name)
            setTimeout(() => {
              props.addMember(pokeInfo)
            }, 300)}}>
            <img src={pokemon.sprite} alt={pokemon.name} className="w-20 h-auto" />
            <p className="text-center">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonSelector;
