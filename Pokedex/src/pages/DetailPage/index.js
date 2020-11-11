import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { PokemonInfo } from './PokemonInfo';
import { PokemonStats } from './PokemonStats';
import { baseUrl } from '../../constants.js'

const DetailPageWrapper = styled.div`
  display: grid;
  place-content:center;
  height: 100vh;
`

const DetailContainer = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 32px;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
`

const PokemonImage = styled.img`
  grid-row: 1/-1;
  grid-column: 2;
  place-self:center;
`

export const DetailPage = () => {
  const [pokemonDetails, setPokemonDetails] = useState({})

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    fetchPokemonDetails();
  }, [])

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/pokemon/${params.nomeDoPokemon}`
      );

      setPokemonDetails(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const pokemonData = {
    'id': 3,
    'name': 'venusaur',
    'sprites': {
      'back_default':"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      'back_female' : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png",
      'back_shiny' :	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
      'back_shiny_female'	:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/3.png",
      'front_default':	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    'types' : 
    [{
      'slot' : 1, 
      'type' : {'name':	"grass",'url':"https://pokeapi.co/api/v2/type/12/"
    }},{
      'slot' : 2, 
      'type' : {'name':	"poison",'url':"https://pokeapi.co/api/v2/type/4/"
    }}],
    'stats':
    [{
      'base_stat' : 80,
        'effort':	0,
        'stat' : { 'name'	: "hp", 'url': "https://pokeapi.co/api/v2/stat/1/" }
    },{
        'base_stat' : 82,
        'effort':	0,
        'stat' : {'name': "attack",'url': "https://pokeapi.co/api/v2/stat/2/" }
      },{
        'base_stat' : 83,
        'effort':	0,
        'stat' : {'name': "defense",'url': "https://pokeapi.co/api/v2/stat/3/" }
      },{
        'base_stat' : 100,
        'effort':	2,
        'stat' : {'name': "special-attack",'url': "https://pokeapi.co/api/v2/stat/4/" }
      },{
        'base_stat' : 100,
        'effort':	1,
        'stat' : {'name': "special-defense",'url': "https://pokeapi.co/api/v2/stat/5/" }
      },{
        'base_stat' : 80,
        'effort':	0,
        'stat' : {'name': "speed",'url': "https://pokeapi.co/api/v2/stat/6/" }
      }],

    

  }

  const goToHomePage = () => {
    history.push('/')
  }

  const isLoading = !pokemonDetails.types && !pokemonDetails.sprites;

  return(
      <DetailPageWrapper>
        <DetailContainer>
        <button onClick={goToHomePage}>Voltar para home page</button>
        {isLoading && <p>Buscando dados do pokemon...</p>}
        {!isLoading &&(
        <>
          <PokemonInfo 
            name={params.nomeDoPokemon} 
            types={pokemonDetails.types} 
          />
          <PokemonImage src={pokemonDetails.sprites.front_default} />
          <PokemonStats stats={pokemonDetails.stats}/>
        </>
        )}
        </DetailContainer>
      </DetailPageWrapper>
  )
}

