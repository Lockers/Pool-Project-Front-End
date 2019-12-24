import { useState, useEffect } from 'react';
import { venue, ruleset } from '../data/GeneralData';
import React from 'react';
import { Spin } from 'antd';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export const Form = (props) => {

    //Set initial state for match creation using some default values
    const [challenge, setChallenge] = useState({ challenger: 'lol', challenged: '', venue: '', ruleset: '', pot: null, date: Date(2019, 0, 1) })
    const [postChallenge, setPostChallenge] = useState([])

    //Filter players for players only available to challenge and within 4 places of challenger
    const [challengedPlayer, setChallengedPlayer] = useState([])
    
    useEffect(() => {
        
        Axios
            .post('http://localhost:5000/challenges', postChallenge)
            .then(response => {
                if (response.status === 200) {
                    return (alert(response.data));
                }
            })
            .catch(err => {
            console.log(err)
        })
    }, [postChallenge])

    if (!props.players) {
        return <Spin />
    }

    //Filter for challengeable players once props.players is defined
    const challengablePlayers = props.players.data.filter(player => player.challengable === true)
    
    const submitHandler = (e) => {
        setPostChallenge(challenge);
        return < Redirect to="http://localhost:5000/upcomingchallenges" />
    }

    //Handler sets the challenger on state and filters for only challengable players within 4 spaces
    const challengerChangeHandler = (e) => {
        e.preventDefault()
        setChallenge({ ...challenge, challenger: e.target[e.target.selectedIndex].text })
        const challenger = challengablePlayers.filter(player => player.leaguePosition === e.target.value - 1 || player.leaguePosition === e.target.value - 2 || player.leaguePosition === e.target.value - 3 || player.leaguePosition === e.target.value - 4)
        setChallengedPlayer(challenger);
    }

    //Handler sets Challenged player on state
    const challengedChangeHandler = (e) => {
        e.preventDefault()
        setChallenge({ ...challenge, challenged: e.target.value })
    }

    //Handler set venue on State
    const venueChangeHandler = (e) => {
        e.preventDefault()
        setChallenge({ ...challenge, venue: e.target.value })
    }

    //Handler sets ruleset on state
    const rulesetChangeHandler = (e) => {
        e.preventDefault()
        setChallenge({ ...challenge, ruleset: e.target.value })
    }

    //Handler sets pot on state
    const potChangeHandler = (e) => {
        e.preventDefault()
        setChallenge({ ...challenge, pot: e.target.value })
    }

    return (
        <form onSubmit={submitHandler}>
            <select onChange={(e) => challengerChangeHandler(e)} className="challenger">
                {challengablePlayers.map((item, index) => {
                    return <option key={index} value={item.leaguePosition} name='challenger'>{item.name}</option>
                })}
            </select>
            <select onChange={challengedChangeHandler} className="challenged">

                {challengedPlayer.map((item, index) => {
                    return <option key={index} name='challenged'>{item.name}</option>
                })}
            </select>
            <select onChange={venueChangeHandler} className="venue">
                {venue.map((item, index) => {
                    return <option key={index} name='venue'>{item}</option>
                })}
            </select>
            <select onChange={rulesetChangeHandler} className="ruleset">
                {ruleset.map((item, index) => {
                    return <option key={index} name='ruleset'>{item}</option>
                })}
            </select>
            <input onChange={potChangeHandler} placeholder={20} type='number' name='pot' />
            <button>Submit</button>
        </form>
    )
}