import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import '../../App.css';
import Styled from 'styled-components';

const Div = Styled.div`
    margin: 0 auto;
`
export const PlayerCard = (props) => {
    
    return (
        <Div className='playerCards'>
            
            <Card title={props.player.name} style={{ width: '500px', margin: '1rem' }}>
                <p>{props.player.name}</p>
                <p>{props.player.dateOfBirth}</p>
                <p>{props.player.leaguePosition}</p>

                <Link to={`/players/${props.player._id}`}><button onClick={(e) => props.handleClick(props.player._id)}>More Info</button></Link>
            </Card>
        </Div>
    )
};