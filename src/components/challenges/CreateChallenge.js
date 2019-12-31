import React, { useState } from 'react'
import { Menu, Dropdown, Spin } from 'antd';
import { venues, rulesets } from '../data/GeneralData';

export const CreateChallenge = (props) => {

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
        date: ''})

    const challengable = props.players.data.filter(player => player.challengable === true)

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

        console.log('Am I firing')
        setNewChallenge({ ...newChallenge, pot: e.target.value })
        console.log(newChallenge)
    }

    function dateChangeHandler(e) {
        e.preventDefault()
        setNewChallenge({ ...newChallenge, date: e.target.value })
        console.log(newChallenge)
    }
    function submitHandler(e) {
        e.preventDefault()
        console.log(newChallenge)
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

    return (
        <div>
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown.Button overlay={challengerMenu}>
                    Challenger
            </Dropdown.Button>
                <Dropdown.Button overlay={challengedMenu}>
                    Challenged
            </Dropdown.Button>
                <Dropdown.Button overlay={venuesMenu}>
                    Venue
            </Dropdown.Button>
                <Dropdown.Button overlay={rulesetMenu}>
                    Ruleset
            </Dropdown.Button>
            </div>
            <form onSubmit={e => submitHandler(e)}>
                <input
                    className='textInput'
                    type='text'
                    name='challenger'
                    value={challenger}
                />
                V
            <input
                    className='textInput'
                    type='text'
                    name='challenged'
                    value={challenged}
                />
                <input
                    className='textInput'
                    type='text'
                    name='venue'
                    value={venue}
                    
                />
                <input
                    className='textInput'
                    type='text'
                    name='ruleset'
                    value={ruleSet}
                />
                <input
                    className='numberInput'
                    type='number'
                    name='pot'
                    onChange={potChangeHandler}
                />
                <input
                    className='textInput'
                    type='date'
                    name='date'
                    onChange={dateChangeHandler}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}