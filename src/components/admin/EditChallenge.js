import 'date-fns';
import React, {useState} from 'react';
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
import Button from '@material-ui/core/Button';
import { useUpdateRequest } from '../../helpers/UpdateHelper';

const Div = Styled.div`
     border: 1px solid black;
    padding: 1rem;
    margin: 1rem 0rem 1rem 0rem;
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

    const [fire, setFire] = useState(false)
    const [id, setId] = useState('3')
    const [newChallenge, setNewChallenge] = useState(props)

    useUpdateRequest(`challenges/${id}`, newChallenge, fire)
    const classes = useStyles();
    
    const handleDateChange = date => {
        setNewChallenge({ ...newChallenge, date: date });
    };

    const handleVenueChange = event => {
        event.preventDefault()
        setNewChallenge({ ...newChallenge, venue: event.target.value });
        
    };

    const handleRuleSetChange = event => {
        event.preventDefault()
        setNewChallenge({ ...newChallenge, ruleset: event.target.value });
        
    };

    const handlePot = event => {
        event.preventDefault()
        setNewChallenge({ ...newChallenge, pot: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setId(newChallenge._id)
        setFire(true)
    }

    if (!props) {
        return <Loader />
    }
    return (
        <Div>
            <div>
                <h1>Edit Challenge</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required id="challenger"
                        label="challenger"
                        type="text"
                        value={newChallenge.challenger}

                    />
                    <TextField
                        required id="challenged"
                        label="challenged"
                        type="text"
                        value={newChallenge.challenged}
                    />
                    <TextField
                        required id="challenged"
                        label="challenged"
                        type="text"
                        onChange={handlePot}
                    />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Ruleset</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Change Ruleset To"
                            onChange={handleRuleSetChange}
                    >
                        {rulesets.map((ruleset, index) => <MenuItem key={index} value={ruleset}>{ruleset}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Venue</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleVenueChange}
                    >
                        {venues.map((venue, index) => <MenuItem key={index} value={venue}>{venue}</MenuItem>)}
                    </Select>
                </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={newChallenge.date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button variant='contained' color='primary' type='submit'>Submit</Button>
                </form>
            </div>
        </Div>
    )
}