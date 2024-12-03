import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'; // Ensure you import uuid

const PokemonSelector = ({ addMember, members }) => { // Destructure addMember and members from props
  const [fetchedPoke, setFetchedPoke] = useState([]);
  const [pokeInfo, setPokeInfo] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const handlePokemonClick = async (pokemonName) => {
    const searchName = pokemonName.toLowerCase();
    const searchURL = `https://pokeapi.co/api/v2/pokemon/`; 
    const res = await axios.get(`${searchURL}${searchName}`);
    receiveData(res);
  };

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
        sprite: response.data.sprites.front_default // TODO: add a path to fallback on 
      };
    });

    const pokemons = await Promise.all(promises);
    setFetchedPoke(pokemons);
  }

  const handleMouseEnter = () => {
    setIsHovering(true); 
  }

  const handleMouseLeave = () => {
    setIsHovering(false); 
  }

  const receiveData = (res) => {
    const name = res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1);
    const type = res.data.types[0].type.name;
    const typeTwo = res.data.types.length > 1 ? res.data.types[1].type.name : null;
    const img = res.data.sprites.front_default || 'path/to/fallback/image.png'; // Fallback image
    const dexNum = `#${res.data.id}`;

    const newPokeInfo = {
      name,
      type,
      typeTwo,
      img,
      dexNum,
    };

    setPokeInfo(newPokeInfo);
    
    // Call addMember immediately after updating pokeInfo
    addMember({ uuid: uuidv4(), ...newPokeInfo }); 
  };

  return (
    <>
      <div className="grid grid-cols-10 gap-4 p-4">
        {fetchedPoke.map((pokemon) => (
          <div
            key={pokemon.name}
            className="flex flex-col items-center bg-black rounded-lg p-2 shadow-md cursor-pointer bg-zinc-900"
            onClick={() => handlePokemonClick(pokemon.name)}
            style={{
              boxShadow: isHovering ? `rgba(197, 184, 227,0.56) 0px 22px 10px 4px` : "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={pokemon.sprite} alt={pokemon.name} className="w-20 h-auto" />
            <p className="text-center">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonSelector;
