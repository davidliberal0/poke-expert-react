import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonSelector = () => {
  const [selected, setSelected] = useState({});

  console.log("rendered");

  useEffect(() => {
    async function fetchData() {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const res = await axios.get(`${url}${"1"}`);
      console.log(res.data);
    }
    fetchData();
  }, []);

  async function fetchData() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const res = await axios.get(`${url}${"1"}`);
    console.log(res.data);
  }

  return <div className="bg-black">Something Goes Here</div>;
};

export default PokemonSelector;
