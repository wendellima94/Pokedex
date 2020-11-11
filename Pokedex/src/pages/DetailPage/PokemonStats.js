import React from 'react';
import styled from 'styled-components';


const StatsWrapper = styled.div`
  border: 1px solid black;
  padding: 16px;
`

export const PokemonStats = (props) => {
  return (
    <StatsWrapper>
      <h3>Stats</h3>
      <div>    
        {props.stats.map((eachStats) => {
          return (
            <>
              <p key={eachStats.stat.name}>
              {eachStats.stat.name} - {eachStats.base_stat} 
              </p>
              <progress max={100} value={eachStats.base_stat}/>
          </>
          )
        })}
      </div>
        </StatsWrapper>  
  )
} 