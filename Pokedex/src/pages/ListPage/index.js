import React, { useState, useEffect } from 'react';
import { ListContainer } from './ListContainer';
import axios from 'axios';
import styled from 'styled-components'
import { baseUrl } from '../../constants.js'

const ListPageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 64px;

`

export const ListPage = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetchPokemonList();
  }, []);  

  const fetchPokemonList = async () => {
    try{
      const response = await axios.get(`${baseUrl}/pokemon?limit=151`)

      setPokemonList(response.data.results)
    }catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
    }
  }

  const [favoritesList, setFavoritesList] = useState([])

  const togglePokemonToFavorites = (pokemon) => {
    const isPokemonInFavorites = favoritesList.find((eachPokemon) => {
      return eachPokemon.name === pokemon.name 
    });

    if(isPokemonInFavorites) {
      //Já está nos favoritos
      //Remover ele dos favoritos
    const favoritesCopy = favoritesList.filter((eachPokemon) => {
      return eachPokemon.name !== pokemon.name
    });

     setFavoritesList(favoritesCopy)
    } else {
      //Adiciona ele aos favoritos
      const favoritesCopy = [ ... favoritesList, {...pokemon, favorite: true}]
      setFavoritesList(favoritesCopy)
    }
  };

  return (
    <ListPageWrapper>
        <ListContainer 
        onClickPokemonFavorites={togglePokemonToFavorites} 
        pokemons={pokemonList} 
        title={'Pokemons'}
         />
        <ListContainer 
        onClickPokemonFavorites={togglePokemonToFavorites} 
        pokemons={favoritesList} 
        title={'Favoritos'}
         />
    </ListPageWrapper>
  )
};