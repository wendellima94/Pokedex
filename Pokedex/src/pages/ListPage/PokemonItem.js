import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';

const slideFromTop = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px) translateY(-300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`

const PokemonWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  margin-bottom: 8px;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  P {
    margin: 0;
  }
  animation: ${slideFromTop} 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`

const FavoriteStar = styled.p`
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  color: ${props => (props.favorite ? "yellow" : "black")};
`

const ButtonStyle = styled.button`
  width: 60px;
  height: 30px;
  background-color: orange;
  color: whitesmoke;
`

export const PokemonItem = (props) => {
  const history = useHistory();

  const onClickFavorite = () => {
    props.onClickPokemonFavorites(props.pokemon)

  }

  const goToDetailPokemonPage = () => {
    history.push(`/detalhes/${props.pokemon.name}`)
  }

  return (
      <PokemonWrapper>
          <p>{props.pokemon.name}</p>
          <ButtonStyle onClick={goToDetailPokemonPage}>detalhes</ButtonStyle>
          <FavoriteStar favorite={props.pokemon.favorite} onClick={onClickFavorite}
          >★
          </FavoriteStar>
      </PokemonWrapper>
  )
}

