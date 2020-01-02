import React, { useState } from 'react'
import { Menu, Spin } from 'antd';
import { venues, rulesets } from '.././components/data/GeneralData';
import { usePostRequest } from './PostRequest';

export const useChallengeCreator = (players) => {

    const [challenger, setChallenger] = useState()
    const [challengedArray, setChallengedArray] = useState()
    const [challenged, setChallenged] = useState()
    const [venue, setVenue] = useState()
    const [ruleSet, setRuleSet] = useState()

    const [newChallenge, setNewChallenge] = useState({
        challenger: '',
        challenged: '',
        venue: '',
        ruleset: '',
        pot: null,
        date: ''
    })
    const [send, setSend] = useState(false)

    usePostRequest('challenges/', newChallenge, send)

    const challengable = players.data.filter(player => player.challengable === true)

    const getChallenger = (key) => {
        return challengable.filter(item => item._id === key)
    }

    function handleChallengerClick(e) {

        const player = getChallenger(e.key)
        setChallenger(player[0].name)
        const challengedArray = challengable.filter(item =>
            item.leaguePosition === player[0].leaguePosition - 1 ||
            item.leaguePosition === player[0].leaguePosition - 2 ||
            item.leaguePosition === player[0].leaguePosition - 3 ||
            item.leaguePosition === player[0].leaguePosition - 4
        )
        setChallengedArray(challengedArray)
        setNewChallenge({ ...newChallenge, challenger: player[0].name })

    }

    //////////////////////////////////////////////////////////////////////////////
    function handleChallengedClick(e) {
        setChallenged(e.item.props.children)
        setNewChallenge({ ...newChallenge, challenged: e.item.props.children })
    }

    /////////////////////////////////////////////////////////

    function handleVenueClick(e) {
        setVenue(e.item.props.children)
        setNewChallenge({ ...newChallenge, venue: e.item.props.children })
    }


    function handleRulesetClick(e) {
        setRuleSet(e.item.props.children)
        setNewChallenge({ ...newChallenge, ruleset: e.item.props.children })
    }

    function potChangeHandler(e) {
        e.preventDefault()
        setNewChallenge({ ...newChallenge, pot: e.target.value })
    }

    function dateChangeHandler(date, dateString) {
        console.log(date)
        setNewChallenge({ ...newChallenge, date: Date(dateString) })
    }
    function submitHandler(e) {
        console.log('firing')
        e.preventDefault()
        setSend(true)
    }

    const challengerMenu = (
        <Menu onClick={handleChallengerClick}>
            {challengable.map(player =>
                <Menu.Item key={player._id}>{player.name}</Menu.Item>
            )}
        </Menu>
    );

    const challengedMenu = (
        <Menu onClick={handleChallengedClick}>
            {challengedArray ?
                challengedArray.map(player =>
                    <Menu.Item key={player._id}>{player.name}</Menu.Item>
                ) : <Spin />}
        </Menu>
    );
    const venuesMenu = (
        <Menu onClick={handleVenueClick}>
            {venues.map((venue, index) => <Menu.Item key={index}>{venue}</Menu.Item>)}
        </Menu>
    );
    const rulesetMenu = (
        <Menu onClick={handleRulesetClick}>
            {rulesets.map((ruleset, index) => <Menu.Item key={index}>{ruleset}</Menu.Item>)}
        </Menu>
    );
    
    return {
        ruleSet,
        rulesetMenu,
        venuesMenu,
        challengedMenu,
        challengerMenu,
        submitHandler,
        dateChangeHandler,
        potChangeHandler,
        handleChallengedClick,
        handleChallengerClick,
        handleRulesetClick,
        handleVenueClick,
        challenger,
        challenged,
        venue

    }

}