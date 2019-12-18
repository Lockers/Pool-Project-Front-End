import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

export const PlayerCard = (props) => {
    return (
        <Card title={props.player.Name}  style={{ width: 300 }}>
            <p>{props.player.name}</p>
            <p>Card content</p>
            <p>Card content</p>
            <Link to={`/players/${props.player.PosID}`}><button onClick={(e) => props.handleClick(props.player.PosID)}>More</button></Link>
        </Card>
    )
};