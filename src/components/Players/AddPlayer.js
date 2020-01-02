import React, { useState } from 'react';
import { usePostRequest } from '../../helpers/PostRequest';
import { useDeleteRequest } from '../../helpers/DeleteRequest';
import { Spin } from 'antd';


export const AddPlayer = (props) => {
    const [newPlayer, setNewPlayer] = useState([]);
    const [sendRequest, setSendRequest] = useState(false)
    const [deleteMe, setDeleteMe] = useState('')
    const [fire, setFire] = useState(false)

    useDeleteRequest(deleteMe, fire)

    let toAdd = { name: '', dateOfBirth: '', leaguePosition: null, played: 0, won: 0, lost: 0, totalPrizeMoney: 0, results: [], challengable: true }
    usePostRequest('players', newPlayer, sendRequest)
    
    const submitNewPlayer = (e) => {
        e.preventDefault()
        setNewPlayer(toAdd)
        setSendRequest(true)
    }

    function handleSelectChange(e) {
        e.preventDefault()
        setDeleteMe(e.target.value)
    }
    function deleteHandler(e) {
        e.preventDefault()
        setFire(true)
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
    if (!props.players) {
       return <Spin />
   }
    return (
        <div>
        <div>
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
        </div>
        <div>
            <select onChange={handleSelectChange}>
                {props.players.data.map(player => {
                    return <option key={player._id}>{player.name}</option>
                
        })}
                </select>
                <form onSubmit={deleteHandler}>
                    <input
                        type='text'
                        name='delete'
                        value={deleteMe}
                        
                    />
                    <button>Delete this guy</button> 
                </form>
            </div>
        </div>
    )
}