import React, { useState, useEffect } from 'react';
import { useGetRequest } from '../helpers/GetRequest';
import { Spin } from 'antd';
import { venue, ruleset } from '../components/data/GeneralData';

export const AddChallenge = () => {

    const [challenge, setChallenge] = useState({ challenger: null, challenged: null, venue: 'WWFC', ruleset: 'World Rules', pot: null })
    const [challenger, setChallenger] = useState({})
    const [challenged, setChallenged] = useState(['blah', 'balh'])
    const players = useGetRequest('players')

    function challengerChangeHandler(e) {
        setChallenge({ ...challenge, challenger: parseInt(e.target.value) })
        setChallenger(parseInt(e.target.value))
        setChallenged(players.data.filter(item => {
            return item.leaguePosition === (e.target.value - 1) || item.leaguePosition === (e.target.value - 2) || item.leaguePosition === (e.target.value - 3) || item.leaguePosition === (e.target.value - 4);
        }))
    }


    function challengedChangeHandler(event) {
        setChallenge({ ...challenge, challenged: parseInt(event.target.value) })
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
        event.preventDefault()
        setChallenge(challenge)
        console.log(challenge)
        
    }

    if (!players) {
        return <Spin />
    }
    const challengers = players.data.filter(player => player.challengable !== false)
    const challengedPlayer = challenged.filter(player => player.challengable !== false)
    return (
        <form onSubmit={submitHandler}>
            <select onChange={(e) => challengerChangeHandler(e)} className="challenger">
                {challengers.map(item => {
                    return <option value={item.leaguePosition} name='challenger'>{item.name}</option>
                })}
            </select>
            <select onChange={challengedChangeHandler} className="challenged">

                {challengedPlayer.map(item => {
                    return <option value={item.leaguePosition} name='challenged'>{item.name}</option>
                })}
            </select>
            <select onChange={venueChangeHandler} className="venue">
                {venue.map(item => {
                    return <option name='venue'>{item}</option>
                })}
            </select>
            <select onChange={rulesetChangeHandler} className="ruleset">
                {ruleset.map(item => {
                    return <option key={item.leaguePosition} name='ruleset'>{item}</option>
                })}
            </select>
            <input onChange={potChangeHandler} placeholder={20} type='number' name='pot' />
            <button>Submit</button>
        </form>
    )
}