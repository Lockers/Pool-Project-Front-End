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
import { Loader } from '../../../misc/Loader';
import { venues, rulesets } from '../../data/GeneralData';
import Button from '@material-ui/core/Button';
import { useUpdateRequest } from '../../../helpers/UpdateHelper';

const EditChall = Styled.div`
    display: flex;
    align-items: center;
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
        <EditChall>
            <h1>Edit Challenge</h1>
                <Form onSubmit={handleSubmit}>
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
                        required id="pot"
                        label="Pot"
                        type="text"
                        onChange={handlePot}
                    />
                <FormControl className={classes.formControl}>
                    <InputLabel id="editRuleset">Ruleset</InputLabel>
                    <Select
                            labelId="editRuleset"
                            id="editRuleset"
                            label="Change Ruleset To"
                            onChange={handleRuleSetChange}
                    >
                        {rulesets.map((ruleset, index) => <MenuItem key={index} value={ruleset}>{ruleset}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="editVenue">Venue</InputLabel>
                    <Select
                        labelId="editVenue"
                        id="editVenue"
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
                            id="EditChallengePicker"
                            label="Edit Date"
                            value={newChallenge.date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button variant='contained' color='primary' type='submit'>Submit</Button>
                </Form>
            </EditChall>
    )
}