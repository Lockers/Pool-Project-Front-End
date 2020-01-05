import {useState } from 'react';
import { usePostRequest } from '../PostRequest';

export const useResultHelper = () => {
    const [fire, setFire] = useState(false)
    const [result, setResult] = useState({
        challenger: '',
        challengerScore: null,
        challenged: '',
        challengedScore: null,
        venue: '',
        ruleset: '',
        pot: null,
        date: new Date('2014-08-18T21:11:54')
    });

    usePostRequest('results', result, fire)

    const handleDateChange = date => {
        setResult({ ...result, date: date });
    };

    const handleChallengerChange = event => {
        setResult({ ...result, challenger: event.target.value });
    };

    const handleChallengedChange = event => {
        setResult({ ...result, challenged: event.target.value });
    };

    const handleChallengerScoreChangeHandler = event => {
        setResult({ ...result, challengerScore: event.target.value });
    };

    const handleChallengedScoreChangeHandler = event => {
        setResult({ ...result, challengedScore: event.target.value });
    };

    const handleVenueChange = event => {
        setResult({ ...result, venue: event.target.value });
    };

    const handleRuleSetChange = event => {
        setResult({ ...result, ruleset: event.target.value });
    };

    const handlePotChange = event => {
        setResult({ ...result, pot: event.target.value });
    };

    const submitResult = event => {
        event.preventDefault()
        setFire(true)
    };
    return {
        submitResult,
        handleChallengedChange,
        handleChallengedScoreChangeHandler,
        handleChallengerChange,
        handleChallengerScoreChangeHandler,
        handleDateChange,
        handlePotChange,
        handleRuleSetChange,
        handleVenueChange, 
        result
    }
}