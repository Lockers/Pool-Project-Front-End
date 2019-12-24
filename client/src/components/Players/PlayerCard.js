import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

export const PlayerCard = (props) => {
    return (
        <Card title={props.player.name}  style={{ width: 300 }}>
            <p>{props.player.name}</p>
            <p>Card content</p>
            <p>Card content</p>
            <Link to={`/players/${props.player._id}`}><button onClick={(e) => props.handleClick(props.player._id)}>More</button></Link>
        </Card>
    )
};