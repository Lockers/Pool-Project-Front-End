import React, { useState, useEffect } from 'react';
import { useGetRequest } from '../helpers/GetRequest';
import { Spin } from 'antd';
import { venue, ruleset } from '../components/data/GeneralData';


export const AddChallenge = (props) => {

    const [challenge, setChallenge] = useState({})
    const players = useGetRequest('players')
    function changeHandler(event) {
        console.log([event.target.value])
    }
    function submitHandler(event) {
        event.preventDefault()
        console.log(event.target)
        console.log(event.target.pot.value)
    }

    if (players === undefined) {
        return <Spin />
    }
    const filteredPlayers = players.data.filter(player => player.Challengable !== false)
    console.log(filteredPlayers)
    return (
        <form onSubmit={submitHandler}>
            <select onChange={changeHandler} className="challenger">
                {filteredPlayers.map(item => {
                    return <option name='challenger'>{item.Name}</option>
                })}
            </select>
            <select onChange={changeHandler} className="challenged">
                {players.data.map(item => {
                    return <option name='challenged'>{item.Name}</option>
                })}
            </select>
            <select onChange={changeHandler} className="venue">
                {venue.map(item => {
                    return <option name='venue'>{item}</option>
                })}
            </select>
            <select onChange={changeHandler} className="ruleset">
                {ruleset.map(item => {
                    return <option name='ruleset'>{item}</option>
                })}
            </select>
            <input onChange={changeHandler} type='number' name='pot' />
            <button>Submit</button>
        </form>
    )
}