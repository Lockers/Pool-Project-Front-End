import React, { useState, useEffect } from 'react';
import { useGetRequest } from './GetRequest';
import { Spin } from 'antd';
import Axios from 'axios';

export function useEventHelper() {

    const [challenge, setChallenge] = useState({ challenger: null, challenged: null, venue: 'WWFC', ruleset: 'World Rules', pot: null })
    const [challenger, setChallenger] = useState({})
    const [challenged, setChallenged] = useState(['blah', 'balh'])
    const [buildChallenge, setBuildChallenge] = useState({})
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [player1Id, setPlayer1Id] = useState();
    const [updatePlayer1, setUpdatePlayer1] = useState()
    const [player2Id, setPlayer2Id] = useState();
    const [updatePlayer2, setUpdatePlayer2] = useState()
    const players = useGetRequest('players')

    useEffect(() => {
        if (challenge.challenger !== null)
            Axios.get(`http://localhost:5000/players/${challenge.challenger}`)
                .then(response => {
                    setChallenge({ ...challenge, challenger: response.data[0].name })
                    setName1(response.data[0].name)
                    setPlayer1Id(response.data[0]._id)
                    setUpdatePlayer1({ ...updatePlayer1, challengable: false });
                })
    }, [buildChallenge])
    useEffect(() => {
        Axios.put(`http://localhost:5000/players/${player1Id}`, updatePlayer1)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [updatePlayer1])

    useEffect(() => {
        if (challenge.challenger !== null)
            Axios.get(`http://localhost:5000/players/${challenge.challenged}`)
                .then(response => {
                    setChallenge({ ...challenge, challenged: response.data[0].name })
                    setName2(response.data[0].name)
                    setPlayer2Id(response.data[0]._id)
                    setUpdatePlayer2({ ...updatePlayer2, challengable: false });
                })
    }, [name1])
    useEffect(() => {
        Axios.put(`http://localhost:5000/players/${player2Id}`, updatePlayer2)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [updatePlayer2])

    useEffect(() => {
        if (challenge.challenger !== null)
            Axios.post(`http://localhost:5000/challenges`, challenge)
                .then(response => {
                    setUpdatePlayer1(false)
                })
                .catch(err => {
                    console.log(err)
                })
    }, [name2])

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
        setBuildChallenge(challenge)
        alert('Challenge Added')
    }

    if (!players) {
        return <Spin />
    }
    const challengers = players.data.filter(player => player.challengable !== false)
    const challengedPlayer = challenged.filter(player => player.challengable !== false)

    return { submitHandler, potChangeHandler, rulesetChangeHandler, venueChangeHandler, challengedChangeHandler, challengerChangeHandler, challengers, challengedPlayer }
}