import 'date-fns';
import React, {useState, useEffect} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Styled from 'styled-components';
import { Loader } from '../../../misc/Loader';
import Button from '@material-ui/core/Button';
import { useUpdateRequest } from '../../../helpers/UpdateHelper';


const EditChall = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    max-width: 400px;
    margin: 1rem auto;
     @media(min-width: 600px) {
  
    max-width: 800px;
  
}
`
const Form = Styled.form`
     display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    max-width: 400px;
    margin: 1rem auto;
     @media(min-width: 600px) {
  
    max-width: 800px;
  
}
`

export const EditChallenge = (props) => {

    const [fire, setFire] = useState(false)
    const [id, setId] = useState('3')
    const challenge = props.challenge
    const [newChallenge, setNewChallenge] = useState(challenge)
    
    useEffect(() => {
        setNewChallenge(challenge)
    }, [challenge])

    useUpdateRequest(`challenges/${id}`, newChallenge, fire)
    
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
   
    if (!newChallenge) {
        return <Loader />
    }
    return (
        <div>
        <EditChall>
            <h1>Edit Challenge</h1>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        required id="challenger"
                        type="text"
                        value={newChallenge.challenger}

                    />
                    <TextField
                        required id="challenged"
                        type="text"
                        value={newChallenge.challenged}
                    />
                    <TextField
                        required id="pot"
                        label="Pot"
                        type="text"
                        value={newChallenge.pot}
                        onChange={handlePot}
                    />
                    <TextField
                        required id="pot"
                        label="Venue"
                        type="text"
                        value={newChallenge.venue}
                        onChange={handleVenueChange}
                    />
                    <TextField
                        required id="pot"
                        label="Ruleset"
                        type="text"
                        value={newChallenge.ruleset}
                        onChange={handleRuleSetChange}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
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
        </div>
    )
}