import React from 'react';
import { Spin } from 'antd';
import { venue, ruleset } from '../components/data/GeneralData';
import { useEventHelper } from '../helpers/ChallengeHelpers';

export const AddChallenge = () => {
    const challenge = useEventHelper()
    console.log(challenge)
    if (!challenge.challengers || !challenge.challengedPlayer) {
        return <Spin />
    }

    return (
        <form onSubmit={challenge.submitHandler}>
            <select onChange={(e) => challenge.challengerChangeHandler(e)} className="challenger">
                {challenge.challengers.map((item, index )=> {
                    return <option key={index} value={item.leaguePosition} name='challenger'>{item.name}</option>
                })}
            </select>
            <select onChange={challenge.challengedChangeHandler} className="challenged">

                {challenge.challengedPlayer.map((item, index) => {
                    return <option key={index} value={item.leaguePosition} name='challenged'>{item.name}</option>
                })}
            </select>
            <select onChange={challenge.venueChangeHandler} className="venue">
                {venue.map((item, index) => {
                    return <option key={index} name='venue'>{item}</option>
                })}
            </select>
            <select onChange={challenge.rulesetChangeHandler} className="ruleset">
                {ruleset.map((item, index) => {
                    return <option key={index} name='ruleset'>{item}</option>
                })}
            </select>
            <input onChange={challenge.potChangeHandler} placeholder={20} type='number' name='pot' />
            <button>Submit</button>
        </form>
    )
}