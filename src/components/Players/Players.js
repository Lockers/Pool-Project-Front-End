import React  from 'react';
import { PlayerCard } from './PlayerCard';
import Styled from 'styled-components';

const Div = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
`

export const Players = (props) => {
    
    return (
        <Div className='PlayerCardContainer'>
            {props.players.data.map(card => {
                return <PlayerCard key={card._id} player={card} handleClick={props.handleClick} />
            })}
        </Div>
    )
}