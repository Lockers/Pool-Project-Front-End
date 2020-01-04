import React, { useState } from 'react';
import Styled from 'styled-components';
import { usePostRequest } from '../../helpers/PostRequest';
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
    /* display: flex; */
    border: 1px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
`


export const AddPlayer = () => {
    const classes = useStyles();

    const [newPlayer, setNewPlayer] = useState({ name: '', dateOfBirth: '', leaguePosition: 0, played: 0, won: 0, lost: 0, totalPrizeMoney: 0, results: [], challengable: true })
    // const [sendRequest, setSendRequest] = useState(false)
    // const [deleteMe, setDeleteMe] = useState('')
    const [fire, setFire] = useState(false)

    usePostRequest('players', newPlayer, fire)

    const submitNewPlayer = (e) => {
        e.preventDefault()
        setFire(true)
    }

    // function deleteHandler(e) {
    //     e.preventDefault()
    //     setFire(true)
    // }

    const nameChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, name: e.target.value })
    }

    // const dateChangeHandler = (date, string) => {
    //     toAdd = { ...toAdd, dateOfBirth: Date(string) }

    // }
    const leaguePositionChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, leaguePosition: e.target.value })
    }

    // function handleChallengerClick(e) {
    //     setDeleteMe(e.item.props.children)
    // }
    // if (!players) {
    //     return <Spin />
    // }


    // const challengerMenu = (
    //     <Menu onClick={handleChallengerClick}>
    //         {players.data.map(player =>
    //             <Menu.Item key={player._id}>{player.name}</Menu.Item>
    //         )}
    //     </Menu>
    // );

    // return (
    //         <div>
    //             <AddDiv>
    //                 <h1>Add New Player</h1>
    //                 <form onSubmit={e => submitNewPlayer(e)}>
    //                     <input
    //                         type='text'
    //                         name='name'
    //                         onChange={(e) => nameChangeHandler(e)}
    //                     />
    //                     <DatePicker onChange={dateChangeHandler} />
    //                     <input
    //                         type='number'
    //                         name='leaguePosition'
    //                         onChange={e => leaguePositionChangeHandler(e)}
    //                     />

    //                     <Button htmlType='submit'>Add Player</Button>
    //                 </form>
    //             </AddDiv>
    //             <div>
    //                 <h1>Delete Players</h1>
    //                 <div id="components-dropdown-demo-dropdown-button">
    //                     <Dropdown.Button overlay={challengerMenu}>
    //                         Delete Me
    //                     </Dropdown.Button>
    //                 </div>
    //                 <form onSubmit={deleteHandler}>
    //                     <input
    //                         type='text'
    //                         name='delete'
    //                         value={deleteMe}
    //                     />
    //                     <Button htmlType='submit'>Delete this guy</Button>
    //                 </form>
    //             </div>
    //         </div>
    //     )
    // }

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
