import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Styled from 'styled-components';
import { Loader } from '../../../misc/Loader';
import { venues, rulesets } from '../../data/GeneralData';
import { Button } from '@material-ui/core';
import { usePostRequest } from '../../../helpers/PostRequest';

const AddResult = Styled.div`
     border: 1px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
`

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const AddResults = (props) => {
    const [fire, setFire] = useState(false)
    const classes = useStyles();
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
        console.log(result)
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
        console.log(result)
    };

    if (!props.players) {
        return <Loader />
    }

    return (
        <AddResult>
            <h1>Add Historic Result</h1>
            <form onSubmit={submitResult}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="frames1">Challenger</InputLabel>
                    <Select
                        labelId="challengerSelect"
                        id="demo-simple-select"
                        value={result.challenger}
                        onChange={handleChallengerChange}
                    >
                        {props.players.data.map(player => <MenuItem key={player._id} value={player.name}>{player.name}</MenuItem>)}
                    </Select>
                    <TextField
                        id="challengerFrames"
                        placeholder="Frames"
                        type="number"
                        onChange={handleChallengerScoreChangeHandler}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="frames2">Challenged</InputLabel>
                    <Select
                        labelId="challengedSelect"
                        id="demo-simple-select"
                        value={result.challenged}
                        onChange={handleChallengedChange}
                    >
                        {props.players.data.map(player => <MenuItem key={player._id} value={player.name}>{player.name}</MenuItem>)}
                    </Select>
                    <TextField
                        id="Frames2"
                        placeholder="Frames"
                        type="number"
                        onChange={handleChallengedScoreChangeHandler}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="venueChange">Rule Set</InputLabel>
                    <Select
                        labelId="venueCHange"
                        id="venueChange"
                        value={result.venue}
                        onChange={handleVenueChange}
                    >
                        {rulesets.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="ruleChange">Venue</InputLabel>
                    <Select
                        labelId="ruleChange"
                        id="ruleChange"
                        value={result.ruleset}
                        onChange={handleRuleSetChange}
                    >
                        {venues.map((venue, index) => <MenuItem key={index} value={venue}>{venue}</MenuItem>)}
                    </Select>
                    <TextField
                        id="pot"
                        label="Pot"
                        type="number"
                        onChange={handlePotChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={result.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </form>
        </AddResult>
    );
}
