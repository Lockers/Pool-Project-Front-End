import React, { useState } from 'react';
import Styled from 'styled-components';
import { usePostRequest } from '../../../helpers/PostRequest';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const AddDiv = Styled.div`
    border: 1px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
`


export const AddPlayer = () => {
    const classes = useStyles();

    const [newPlayer, setNewPlayer] = useState({ name: '', dateOfBirth: '', leaguePosition: 0, played: 0, won: 0, lost: 0, totalPrizeMoney: 0, results: [], challengable: true })
    const [fire, setFire] = useState(false)

    usePostRequest('players', newPlayer, fire)

    const submitNewPlayer = (e) => {
        e.preventDefault()
        setFire(true)
    }

    const nameChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, name: e.target.value })
    }

    const leaguePositionChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, leaguePosition: e.target.value })
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitNewPlayer}>
            <AddDiv>
                <h1>Add Player</h1>
                <TextField
                    required id="standard-required"
                    label="Name" placeholder="Name"
                    onChange={nameChangeHandler}
                />
                <TextField
                    required id="standard-number"
                    label="Starting League Position"
                    type="number" placeholder="Starting League Position"
                    onChange={leaguePositionChangeHandler}
                />

                <Button variant="contained" color="primary" type='submit'>
                    Add Player
                </Button>
            </AddDiv>
        </form>
    );
}
