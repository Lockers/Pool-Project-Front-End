import React from 'react';
import { PlayerCard } from './PlayerCard';
import { useGetRequest } from '../../helpers/GetRequest';
import { Spin } from 'antd';

export const Players = (props) => {
    const players = useGetRequest('players')
    if (players === undefined) {
        return <Spin />
    }
    return (
        <div>
            {players.data.map(card => {
                return <PlayerCard key={card.PosID} player={card} handleClick={props.handleClick} />
            })}
        </div>
    )
}