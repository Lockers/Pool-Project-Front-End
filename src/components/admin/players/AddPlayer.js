import React from 'react';
import { usePlayerHelper } from '../../../helpers/playerHelpers/PlayerHelper';
import Styled from 'styled-components';
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
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    max-width: 600px;
    margin: 1rem auto;
`

export const AddPlayer = () => {
    const classes = useStyles();
    const playerHelper = usePlayerHelper();

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={playerHelper.submitNewPlayer}>
            <AddDiv>
                <h1>Add Player</h1>
                <TextField 
                    required id="playerName"
                    label="Name" placeholder="Name"
                    onChange={playerHelper.nameChangeHandler}
                />
                <TextField
                    required id="leaguePosition"
                    label="Starting League Position"
                    type="number" placeholder="Starting League Position"
                    onChange={playerHelper.leaguePositionChangeHandler}
                />

                <Button variant="contained" color="primary" type='submit'>
                    Add Player
                </Button>
            </AddDiv>
        </form>
    );
}
