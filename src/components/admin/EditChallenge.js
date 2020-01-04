import 'date-fns';
import React from 'react';
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
import { Loader } from '../../misc/Loader';
import { venues, rulesets } from '../../components/data/GeneralData';
// import Button from 

const Div = Styled.div`
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


export const EditChallenge = (props) => {

    const classes = useStyles();
    const [challenger, setChallenger] = React.useState('');
    const [challenged, setChallenged] = React.useState('');
    const [venue, setVenue] = React.useState('')
    const [ruleset, setRuleset] = React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleChallengerChange = event => {
        setChallenger(event.target.value);
    };

    const handleChallengedChange = event => {
        setChallenged(event.target.value);
    };
    console.log(props)
    if (!props.singleChallenge) {
        return <Loader />
    }
    return (
        <Div>
            <div>
                <h1>Edit Challenge</h1>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Challenger</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={challenger}
                        onChange={handleChallengerChange}
                    >
                        {props.players.data.map(player => <MenuItem value={player.name}>{player.name}</MenuItem>)}
                    </Select>
                    <TextField
                        id="standard-number"
                        label="Frames"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <form onSubmit={e => props.challenge.submitHandler(e)}>
                    <input
                        className='textInput'
                        type='text'
                        name='challenger'
                        value={props.singleChallenge.challenger}
                    />
                    V
            <input
                        className='textInput'
                        type='text'
                        name='challenged'
                        value={props.singleChallenge.challenged}
                    />
                    <input
                        className='textInput'
                        type='text'
                        name='venue'
                        value={props.singleChallenge.venue}

                    />
                    <input
                        className='textInput'
                        type='text'
                        name='ruleset'
                        value={props.singleChallenge.ruleset}
                    />
                    <input
                        className='numberInput'
                        type='number'
                        name='pot'
                        onChange={props.singleChallenge.pot}
                    />
                    {/* <DatePicker onChange={props.challenge.dateChangeHandler} /> */}
                    {/* <Button htmlType='submit'>Submit</Button> */}
                </form>
            </div>
        </Div>
    )
}