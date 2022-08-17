import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const PokemonSelector = () => {
  console.log("rendered");

  useEffect(() => {
    async function fetchData() {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const res = await axios.get(`${url}${"1"}`);
      console.log(res.data);
    }
    fetchData();
  }, []);

  return <div className="bg-black">Something Goes Here</div>;
};

export default PokemonSelector;
