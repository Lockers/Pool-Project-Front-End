import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export const AddPlayer = () => {
    const [newPlayer, setNewPlayer] = useState({ name: '', dateOfBirth: '', leaguePosition: null, played: 0, won: 0, lost: 0, totalPrizeMoney: 0, results: [], challengable: true });
    const [playerToAdd, setPlayerToAdd] = useState(false);

    useEffect(() => {
        if (playerToAdd)
            Axios
                .post(`https://telford-pool-back-end.herokuapp.com/players/`, newPlayer)
                .then(response => {
                    console.log('Happy Path', response)
                    setPlayerToAdd(false)
                })
                .catch(error => {
                    console.log('Sad Path', error)
                })
    }, [playerToAdd])

    const submitNewPlayer = (e) => {
        e.preventDefault()
        setPlayerToAdd(true)
    }

    const nameChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, name: e.target.value })
    }

    const dateChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, dateOfBirth: e.target.value })

    }
    const leaguePositionChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, leaguePosition: e.target.value })
    }

    return (
        <form onSubmit={e => submitNewPlayer(e)}>
            <input
                type='text'
                name='name'
                onChange={(e) => nameChangeHandler(e)}
            />
            <input
                type='date'
                name='dateOfBirth'
                onChange={e => dateChangeHandler(e)}
            />
            <input
                type='number'
                name='leaguePosition'
                onChange={e => leaguePositionChangeHandler(e)}
            />

            <button>Add Player</button>
        </form>
    )
}