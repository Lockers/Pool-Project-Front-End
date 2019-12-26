import React from 'react';
import { PlayerCard } from './PlayerCard';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';

export const Players = (props) => {
    
    if (!props.players) {
        return <Spin />
    }
    return (
        <div>
            <Link to='/addplayer'><button>Add Player</button></Link>
            {props.players.data.map(card => {
                return <PlayerCard key={card._id} player={card} handleClick={props.handleClick} />
            })}
        </div>
    )
}