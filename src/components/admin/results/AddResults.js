import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useResultHelper } from '../../../helpers/resultHelpers/AddResultHelper';


const AddResult = Styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    max-width: 600px;
    margin: 1rem auto;
`

const Form = Styled.form`
     display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    max-width: 600px;
    margin: 1rem auto;
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
    const result = useResultHelper()
    const classes = useStyles();
  
    if (!props.players) {
        return <Loader />
    }

    return (
        <AddResult>
            <h1>Add Historic Result</h1>
            <Form onSubmit={result.submitResult}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="frames1">Challenger</InputLabel>
                    <Select
                        labelId="challengerSelect"
                        id="challengerSelect"
                        value={result.result.challenger}
                        onChange={result.handleChallengerChange}
                    >
                        {props.players.data.map(player => <MenuItem key={player._id} value={player.name}>{player.name}</MenuItem>)}
                    </Select>
                    <TextField
                        id="challengerFrames"
                        placeholder="Frames"
                        type="number"
                        onChange={result.result.handleChallengerScoreChangeHandler}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="frames2">Challenged</InputLabel>
                    <Select
                        labelId="challengedSelect"
                        id="frames2"
                        value={result.result.challenged}
                        onChange={result.handleChallengedChange}
                    >
                        {props.players.data.map(player => <MenuItem key={player._id} value={player.name}>{player.name}</MenuItem>)}
                    </Select>
                    <TextField
                        id="Frames2"
                        placeholder="Frames"
                        type="number"
                        onChange={result.handleChallengedScoreChangeHandler}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="venueChange">Rule Set</InputLabel>
                    <Select
                        labelId="venueChange"
                        id="venueChange"
                        value={result.result.venue}
                        onChange={result.handleVenueChange}
                    >
                        {rulesets.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="ruleChange">Venue</InputLabel>
                    <Select
                        labelId="ruleChange"
                        id="ruleChange"
                        value={result.result.ruleset}
                        onChange={result.handleRuleSetChange}
                    >
                        {venues.map((venue, index) => <MenuItem key={index} value={venue}>{venue}</MenuItem>)}
                    </Select>
                    <TextField
                        id="pot"
                        placeholder="Pot"
                        type="number"
                        onChange={result.handlePotChange}
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
                        id="resultDate"
                        label="Result Date"
                        value={result.result.date}
                        onChange={result.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </Form>
        </AddResult>
    );
}
