import axios from "axios";
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

export const getpokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemon());

    //TODO: Realizar peticón HTTP

    //fetch mode
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10 }`)
    // const data = await resp.json() 
    //axios mode
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10 }`);  
    const payload = {
        page: page + 1,
        pokemons: data.results
    }
    dispatch(setPokemons(payload));
  };
};
