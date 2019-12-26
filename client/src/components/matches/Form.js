import { useState, useEffect } from 'react';
import { venue, ruleset } from '../data/GeneralData';
import React from 'react';
import { Spin } from 'antd';
import Axios from 'axios';


export const Form = (props) => {

    //Set initial state for match creation using some default values
    const [challenge, setChallenge] = useState({ challenger: 'lol', challenged: '', venue: '', ruleset: '', pot: null, date: Date(2019, 0, 1) })
    const [challenger1, setChallenger1] = useState(null)
    const [challenger2, setChallenger2] = useState(null)


    const [postChallenge, setPostChallenge] = useState(['blah'])
    const [postBuilt, setPostBuilt] = useState(false)
    const [challengeAdded, setChallengeAdded] = useState(false)
    const [playerUpdated, setPlayerUpdated] = useState(false)

    //Filter players for players only available to challenge and within 4 places of challenger
    const [challengedPlayer, setChallengedPlayer] = useState([])

    useEffect(() => {
        if (postBuilt) {
            Axios
                .post('https://telford-pool-back-end.herokuapp.com/challenges', postChallenge)
                .then(response => {
                    if (response.status === 200) {
                        setChallengeAdded(true)
                        setPostBuilt(false)
                        return (alert(response.data));
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [postChallenge])

    useEffect(() => {
        if (challengeAdded === true) {
            Axios
                .put(`https://telford-pool-back-end.herokuapp.com/${challenger1}`, { challengable: false })
                .then(response => {
                    if (response.status === 200) {
                        setPlayerUpdated(true)
                        setChallengeAdded(false)
                        return (alert(response.data));
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [challengeAdded])

    useEffect(() => {
        if (playerUpdated === true) {
            console.log('Am I firing', challenger2)
            Axios
                .put(`https://telford-pool-back-end.herokuapp.com/${challenger2}`, { challengable: false })
                .then(response => {
                    if (response.status === 200) {
                        setPlayerUpdated(false)
                        return (alert(response.data));
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [playerUpdated])

    if (!props.players) {
        return <Spin />
    }

    //Filter for challengeable players once props.players is defined
    const challengablePlayers = props.players.data.filter(player => player.challengable === true)

    const submitHandler = (e) => {
        e.preventDefault();
        setPostChallenge(challenge);
        setPostBuilt(true);
    }

    //Handler sets the challenger on state and filters for only challengable players within 4 spaces
    const challengerChangeHandler = (e) => {
        e.preventDefault()
        setChallenger1(e.target.value)
        setChallenge({ ...challenge, challenger: e.target[e.target.selectedIndex].text })
        const challenger = challengablePlayers.filter(player => player.leaguePosition === e.target.value - 1 || player.leaguePosition === e.target.value - 2 || player.leaguePosition === e.target.value - 3 || player.leaguePosition === e.target.value - 4)
        setChallengedPlayer(challenger);
    }

    //Handler sets Challenged player on state
    const challengedChangeHandler = (e) => {
        console.log(challenge)
        e.preventDefault()
        setChallenger2(e.target.value)
        setChallenge({ ...challenge, challenged: e.target[e.target.selectedIndex].text })
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
                    return <option key={index} value={item.leaguePosition} name='challenged'>{item.name}</option>
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