import React from 'react';
import { PokemonItem } from './PokemonItem';
import styled from 'styled-components';

const ListWrapper = styled.div`
    box-shadow: 0px 1px 20px 0px lightgray;
    padding: 32px;
    width: 40%;
    max-width: 400px;
    overflow: hidden;

    h3 {
        padding-bottom: 16px;
    }
`

export const ListContainer = (props) => {
    const pokemonItens = props.pokemons.map((eachPokemon) => {
        return <PokemonItem key={eachPokemon.name} pokemon={eachPokemon} onClickPokemonFavorites={props.onClickPokemonFavorites}/> 
    })
  return (
      <ListWrapper>
          <h3>{props.title}</h3>
          <div>
              {pokemonItens}
          </div>
      </ListWrapper>
  )
}

