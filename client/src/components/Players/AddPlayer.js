import React, { useState } from 'react';
import { usePostRequest } from '../../helpers/PostRequest';

export const AddPlayer = () => {
    const [newPlayer, setNewPlayer] = useState([]);
    let toAdd = { name: '', dateOfBirth: '', leaguePosition: null, played: 0, won: 0, lost: 0, totalPrizeMoney: 0, results: [], challengable: true }
    usePostRequest('players', newPlayer)
    
    const submitNewPlayer = (e) => {
        e.preventDefault()
        setNewPlayer(toAdd)
    }

    const nameChangeHandler = (e) => {
        e.preventDefault()
        toAdd = { ...toAdd, name: e.target.value }
    }

    const dateChangeHandler = (e) => {
        e.preventDefault()
        toAdd = { ...toAdd, dateOfBirth: e.target.value }

    }
    const leaguePositionChangeHandler = (e) => {
        e.preventDefault()
        toAdd = { ...toAdd, leaguePosition: e.target.value }
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