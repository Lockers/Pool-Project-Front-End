import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { Loader } from '../../misc/Loader';
import Styled from 'styled-components';
import { useDeleteRequest } from '../../helpers/DeleteRequest';

const DeleteDiv = Styled.div`
    border: 1px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
`

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
            marginBottom: '5rem',
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(0),
    },
}));

export const DeletePlayer = (props) => {

    const classes = useStyles();
    const [delPlayer, setDeletePlayer] = React.useState('');
    const [fire, setFire] = React.useState(false)

    useDeleteRequest(delPlayer, fire)

    const handleChange = event => {
        event.preventDefault()
        setDeletePlayer(event.target.value);
    };

    const deletePlayer = e => {
        e.preventDefault()
        setFire(true)
    }

    if (!props.players) {
        return <Loader />
    }
    return (
        <DeleteDiv>
            <h1>Delete Player</h1>
            <form onSubmit={deletePlayer}>
            <FormControl className={classes.margin} >
                <InputLabel id="demo-customized-select-label">Delete Player</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={delPlayer}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.players.data.map(player => <MenuItem key={player._id} value={player.name}>{player.name}</MenuItem>)}
                </Select>
                <Button variant="contained" color="primary" type='submit' className='test'>
                    Delete Player
                </Button>
                </FormControl>
            </form>
        </DeleteDiv>
    );
}