import React from 'react';
import styled from 'styled-components'

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 32px;
`


export const PokemonInfo = (props) => {
  return (
        <InfoWrapper>
          <h3>{props.name.toUpperCase()}</h3>
          <div>
            {props.types.map((eachType) => {  
              return <p key={eachType.type.name}>{eachType.type.name.toUpperCase()}</p>
            })}
          </div>
        </InfoWrapper>  
  )
} 
