import React, {useState } from 'react';
import { Menu } from 'antd';
import { rulesets, venues } from '.././components/data/GeneralData';
import { usePostRequest } from './PostRequest';

export const useResultHelper = (players) => {
    const [challengerId, setChallengerId] = useState()
    const [challengedId, setChallengedId] = useState()
    const [ruleset, setRuleset] = useState()
    const [venue, setVenue] = useState()
    const [newResult, setNewResult] = useState({
        challenger: '',
        challengerScore: null,
        challenged: '',
        challengedScore: null,
        venue: '',
        ruleset: '',
        pot: null,
        date: ''
    })
    const [sendRequest, setSendRequest] = useState(false)

    usePostRequest('results', newResult, sendRequest)    
    function dateChangeHandler(date, dateString) {
        setNewResult({ ...newResult, date: Date(dateString) })
        console.log(date)
    }
    function newResultSubmitHandler(e) {
        e.preventDefault()
        setSendRequest(true)

    }
    function handleChallengerClick(e) {
        setChallengerId(e.item.props.children);
        setNewResult({ ...newResult, challenger: e.item.props.children })
    }
    function handleChallengedClick(e) {
        setChallengedId(e.item.props.children);
        setNewResult({ ...newResult, challenged: e.item.props.children })
    }
    function handleRulesetClick(e) {
        setRuleset(e.item.props.children);
        setNewResult({ ...newResult, ruleset: e.item.props.children })
    }
    function handleVenueClick(e) {
        setVenue(e.item.props.children);
        setNewResult({ ...newResult, venue: e.item.props.children })
    }

    function handleButtonClick(e) {
        console.log(e.target.value)
    }
    
    function challengerScoreChangeHandler(e) {
        e.preventDefault()
        setNewResult({ ...newResult, challengerScore: e.target.value })
    }
    function challengedScoreChangeHandler(e) {
        e.preventDefault()
        setNewResult({ ...newResult, challengedScore: e.target.value })
    }
    function potChangeHandler(e) {
        e.preventDefault()
        setNewResult({ ...newResult, pot: e.target.value })
    }

    const challengerMenu = (
        <div>
            <Menu onClick={handleChallengerClick}>
                {players.data.map(player =>
                    <Menu.Item key={player._id}>{player.name}</Menu.Item>
                )}
            </Menu>

        </div>
    );
    const challengedMenu = (
        <div>
            <Menu onClick={handleChallengedClick}>
                {players.data.map(player =>
                    <Menu.Item key={player._id}>{player.name}</Menu.Item>
                )}
            </Menu>

        </div>
    );
    const venueMenu = (
        <div>
            <Menu onClick={handleVenueClick}>
                {venues.map((venue, index) =>
                    <Menu.Item key={index}>{venue}</Menu.Item>
                )}
            </Menu>

        </div>
    );
    const rulesetMenu = (
        <div>
            <Menu onClick={handleRulesetClick}>
                {rulesets.map((ruleset, index) =>
                    <Menu.Item key={index}>{ruleset}</Menu.Item>
                )}
            </Menu>

        </div>
    );
    return {
        rulesetMenu,
        venueMenu,
        challengedMenu,
        challengerMenu,
        challengedId,
        challengerId,
        handleButtonClick,
        ruleset,
        venue,
        challengerScoreChangeHandler,
        challengedScoreChangeHandler,
        potChangeHandler,
        newResultSubmitHandler,
        dateChangeHandler,
        newResult
    }
}

