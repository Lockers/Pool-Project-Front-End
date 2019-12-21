import React, { useState, useEffect } from 'react';
import { useGetRequest } from '../helpers/GetRequest';
import { Spin } from 'antd';
import { venue, ruleset } from '../components/data/GeneralData';
import Axios from 'axios';


export const AddChallenge = (props) => {

    const [challenge, setChallenge] = useState({ Challenger: null, Challenged: 1, venue: 'WWFC', ruleset: 'World Rules', pot: null })
    const [challenger, setChallenger] = useState({})
    const [challenged, setChallenged] = useState(['blah', 'balh'])
    const players = useGetRequest('players')

    function challengerChangeHandler(e) {
        setChallenge({ ...challenge, Challenger: parseInt(e.target.value) })
        setChallenger(parseInt(e.target.value))
        setChallenged(players.data.filter(item => {
            return item.PosID < e.target.value;
        }))
    }


    function challengedChangeHandler(event) {
        setChallenge({ ...challenge, Challenged: parseInt(event.target.value) })
    }


    function venueChangeHandler(event) {
        setChallenge({ ...challenge, venue: event.target.value })
    }


    function rulesetChangeHandler(event) {
        setChallenge({ ...challenge, ruleset: event.target.value })
    }


    function potChangeHandler(event) {
        setChallenge({ ...challenge, pot: event.target.value })
    }

    function submitHandler(event) {
        setChallenge(challenge)
      
    }

    if (!players) {
        return <Spin />
    }
    const challengers = players.data.filter(player => player.Challengable !== false)
    const challengedPlayer = challenged.filter(player => player.Challengable !== false)
    return (
        <form onSubmit={submitHandler}>
            <select onChange={(e) => challengerChangeHandler(e)} className="challenger">
                {challengers.map(item => {
                    return <option value={item.PosID} name='challenger'>{item.Name}</option>
                })}
            </select>
            <select onChange={challengedChangeHandler} className="challenged">

                {challengedPlayer.map(item => {
                    return <option value={item.PosID} name='challenged'>{item.Name}</option>
                })}
            </select>
            <select onChange={venueChangeHandler} className="venue">
                {venue.map(item => {
                    return <option name='venue'>{item}</option>
                })}
            </select>
            <select onChange={rulesetChangeHandler} className="ruleset">
                {ruleset.map(item => {
                    return <option key={item.PosID} name='ruleset'>{item}</option>
                })}
            </select>
            <input onChange={potChangeHandler} placeholder={20} type='number' name='pot' />
            <button>Submit</button>
        </form>
    )
}