import React, { useState } from 'react';
import Styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Loader } from '../../../misc/Loader';
import { venues, rulesets } from '../../data/GeneralData';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { usePostRequest } from '../../../helpers/PostRequest';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddChall = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    max-width: 600px;
    margin: 1rem auto;
`

export const AddChallenge = (props) => {
    const [fire, setFire] = useState(false)
    const [newChallenge, setNewChallenge] = useState({
        challenger: '',
        challenged: '',
        venue: '',
        ruleset: '',
        pot: 0,
        date: new Date('2014-08-18T21:11:54')
    })
    const [challengedArray, setChallengedArray] = useState([])
    const classes = useStyles();

    usePostRequest('challenges', newChallenge, fire)

    if (!props.players) {
        return <Loader />
    }

    const handleChallengerClick = (e) => {
        e.preventDefault()
        setNewChallenge({ ...newChallenge, challenger: e.target.value.name })
        const challengedArray = challengable.filter(item =>
            item.leaguePosition === e.target.value.leaguePosition - 1 ||
            item.leaguePosition === e.target.value.leaguePosition - 2 ||
            item.leaguePosition === e.target.value.leaguePosition - 3 ||
            item.leaguePosition === e.target.value.leaguePosition - 4 ||
            item.leaguePosition === e.target.value.leaguePosition - 5
        )
        setChallengedArray(challengedArray)
    }

    const handleChallengedClick = (e) => {
        e.preventDefault()
        setNewChallenge({ ...newChallenge, challenged: e.target.value.name })
    }

    const handleRulesetClick = (e) => {
        e.preventDefault()
        setNewChallenge({ ...newChallenge, ruleset: e.target.value })
    }

    const handleVenueClick = (e) => {
        e.preventDefault()
        setNewChallenge({ ...newChallenge, venue: e.target.value })
    }

    const handlePotChange = (e) => {
        e.preventDefault()
        setNewChallenge({ ...newChallenge, pot: e.target.value })
    }
    const handleDateChange = date => {
        setNewChallenge({ ...newChallenge, date: date });
    };

    function handleSubmit(e){
        e.preventDefault()
        console.log(newChallenge)
        setFire(true)
    }




    const challengable = props.players.data.filter(player => player.challengable === true)
    if (!challengable) {
        return <Loader />
    }
    return (
        <AddChall>
            <h1>Add Challenge</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="addChallenger">Challenger</InputLabel>
                    <Select
                        labelId="addChallenger"
                        id="addChallenger"
                        defaultValue={newChallenge.challenger}
                        onChange={handleChallengerClick}
                    >
                        {challengable.map(player => <MenuItem key={player._id} value={player}>{player.name}</MenuItem>)}

                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="addChallenged">Challenged</InputLabel>
                    <Select
                        labelId="addChallenged"
                        id="addChallenged"
                        defaultValue={newChallenge.challenged}
                        onChange={handleChallengedClick}
                    >
                        {challengedArray.map(player => <MenuItem key={player._id} value={player}>{player.name}</MenuItem>)}

                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="addruleset">Ruleset</InputLabel>
                    <Select
                        labelId="addruleset"
                        id="addruleset"
                        value={newChallenge.ruleset}
                        onChange={handleRulesetClick}
                    >
                        {rulesets.map((ruleset, index) => <MenuItem key={index} value={ruleset}>{ruleset}</MenuItem>)}

                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="addVenue">Venue</InputLabel>
                    <Select
                        labelId="addVenue"
                        id="addVenue"
                        value={newChallenge.venue}
                        onChange={handleVenueClick}
                    >
                        {venues.map((venue, index) => <MenuItem key={index} value={venue}>{venue}</MenuItem>)}

                    </Select>
                </FormControl>
                <TextField
                    id="pot"
                    label="pot"
                    type="number"
                    variant="outlined"
                    value={newChallenge.pot}
                    onChange={handlePotChange}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            defaultValue={newChallenge.date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </form>
        </AddChall>
    );
}
