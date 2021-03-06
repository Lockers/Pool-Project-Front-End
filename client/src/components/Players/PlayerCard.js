import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

export const PlayerCard = (props) => {

    return (
        <Card title={props.player.name}  style={{ width: 300 }}>
            <p>{props.player.name}</p>
            <p>{props.player.dateOfBirth}</p>
            <p>{props.player.leaguePosition}</p>

            <Link to={`/players/${props.player._id}`}><button onClick={(e) => props.handleClick(props.player._id)}>More Info</button></Link>
            <button onClick={() => props.removePlayer(props.player._id)}>Remove Player</button>
        </Card>
    )
};