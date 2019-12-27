import React  from 'react';
import { PlayerCard } from './PlayerCard';
import { Link } from 'react-router-dom';

export const Players = (props) => {
    
    return (
        <div>
            <Link to='/addplayer'><button>Add Player</button></Link>
            {props.players.data.map(card => {
                return <PlayerCard key={card._id} player={card} handleClick={props.handleClick} />
            })}
        </div>
    )
}