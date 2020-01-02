import React, { useState } from 'react';
import { usePostRequest } from '../../helpers/PostRequest';
import { useDeleteRequest } from '../../helpers/DeleteRequest';
import { Spin, Button, DatePicker, Dropdown, Menu } from 'antd';
import Styled from 'styled-components';

const AddDiv = Styled.div`
    /* display: flex; */
    border: 1px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
`


export const AddPlayer = (props) => {
    const [newPlayer, setNewPlayer] = useState([]);
    const [sendRequest, setSendRequest] = useState(false)
    const [deleteMe, setDeleteMe] = useState('')
    const [fire, setFire] = useState(false)

    useDeleteRequest(deleteMe, fire)

    let toAdd = { name: '', dateOfBirth: '', leaguePosition: null, played: 0, won: 0, lost: 0, totalPrizeMoney: 0, results: [], challengable: true }
    usePostRequest('players', newPlayer, sendRequest)

    const submitNewPlayer = (e) => {
        e.preventDefault()
        setNewPlayer(toAdd)
        setSendRequest(true)
    }

    function handleSelectChange(e) {
        e.preventDefault()
        setDeleteMe(e.target.value)
    }
    function deleteHandler(e) {
        e.preventDefault()
        setFire(true)
    }

    const nameChangeHandler = (e) => {
        e.preventDefault()
        toAdd = { ...toAdd, name: e.target.value }
    }

    const dateChangeHandler = (date, string) => {
        toAdd = { ...toAdd, dateOfBirth: Date(string) }

    }
    const leaguePositionChangeHandler = (e) => {
        e.preventDefault()
        toAdd = { ...toAdd, leaguePosition: e.target.value }
    }

    function handleChallengerClick(e) {
        setDeleteMe(e.item.props.children)
    }
    if (!props.players) {
        return <Spin />
    }


    const challengerMenu = (
        <Menu onClick={handleChallengerClick}>
            {props.players.data.map(player =>
                <Menu.Item key={player._id}>{player.name}</Menu.Item>
            )}
        </Menu>
    );

    return (
        <div>
            <AddDiv>
                <h1>Add New Player</h1>
                <form onSubmit={e => submitNewPlayer(e)}>
                    <input
                        type='text'
                        name='name'
                        onChange={(e) => nameChangeHandler(e)}
                    />
                    <DatePicker onChange={dateChangeHandler} />
                    <input
                        type='number'
                        name='leaguePosition'
                        onChange={e => leaguePositionChangeHandler(e)}
                    />

                    <Button htmlType='submit'>Add Player</Button>
                </form>
            </AddDiv>
            <div>
                <h1>Delete Players</h1>
                <div id="components-dropdown-demo-dropdown-button">
                    <Dropdown.Button overlay={challengerMenu}>
                        Delete Me
                    </Dropdown.Button>
                </div>
                <form onSubmit={deleteHandler}>
                    <input
                        type='text'
                        name='delete'
                        value={deleteMe}
                    />
                    <Button htmlType='submit'>Delete this guy</Button>
                </form>
            </div>
        </div>
    )
}