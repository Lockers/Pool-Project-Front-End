import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Axios from 'axios';

export const PlayerCard = (props) => {
    const [playerToRemove, setPlayerToRemove] = useState('')
    const [addToArchive, setAddToArchive] = useState()

    const removePlayer = (id) => {
        setPlayerToRemove(id)
    }

    useEffect(() => {
        if(playerToRemove)
            Axios
                .delete(`https://telford-pool-back-end.herokuapp.com/${playerToRemove}`)
                .then(response => {
                    setAddToArchive(response)
                })
                .catch(error => {
            console.log('Sad Path', error)
        })
    }, [playerToRemove])

    useEffect(() => {
        if (addToArchive)
            Axios
                .post(`https://telford-pool-back-end.herokuapp.com/players/archive/`, addToArchive.data)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log('Sad Path', error)
                })
    }, [addToArchive])

    return (
        <Card title={props.player.name}  style={{ width: 300 }}>
            <p>{props.player.name}</p>
            <p>Card content</p>
            <p>Card content</p>
            <Link to={`/players/${props.player._id}`}><button onClick={(e) => props.handleClick(props.player._id)}>More</button></Link>
            <button onClick={() => removePlayer(props.player._id)}>Remove Player</button>
        </Card>
    )
};