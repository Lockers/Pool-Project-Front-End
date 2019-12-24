import React from 'react';
import { PlayerCard } from './PlayerCard';
import { Spin } from 'antd';

export const Players = (props) => {
    
    if (!props.players) {
        return <Spin />
    }
    return (
        <div>
            {props.players.data.map(card => {
                return <PlayerCard key={card._id} player={card} handleClick={props.handleClick} />
            })}
        </div>
    )
}