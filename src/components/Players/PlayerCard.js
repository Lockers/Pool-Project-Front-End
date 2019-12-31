import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { usePostRequest } from '../../helpers/PostRequest';
import '../../App.css';


export const PlayerCard = (props) => {
    const [deleteId, setDeleteId] = useState()
    usePostRequest('players/archive', deleteId)

    const handleDelete = e => {
        setDeleteId(e)
    }

    return (
        <div className='playerCards'>
            
            <Card title={props.player.name} style={{ width: 300, margin: '1rem' }}>
                <p>{props.player.name}</p>
                <p>{props.player.dateOfBirth}</p>
                <p>{props.player.leaguePosition}</p>

                <Link to={`/players/${props.player._id}`}><button onClick={(e) => props.handleClick(props.player._id)}>More Info</button></Link>
                <button onClick={() => handleDelete(props.player._id)}>Remove Player</button>
            </Card>
        </div>
    )
};