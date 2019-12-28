import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';

export const AddResults = (props) => {
    const [challengerId, setChallengerId] = useState()
    const [challengedId, setChallengedId] = useState()


    function handleChallengerClick(e) {
        setChallengerId(e.item.props.children);
    }
    function handleChallengedClick(e) {
        setChallengedId(e.item.props.children);
    }

    
    function handleButtonClick(e) {
        console.log(e.target.value)
    }

    const menu1 = (
        <div>
            <Menu onClick={handleChallengerClick}>
                {props.players.data.map(player =>
                    <Menu.Item key={player._id}>{player.name}</Menu.Item>
                )}
            </Menu>
            
        </div>
    );
    const menu2 = (
        <div>
            <Menu onClick={handleChallengedClick}>
                {props.players.data.map(player =>
                    <Menu.Item key={player._id}>{player.name}</Menu.Item>
                )}
            </Menu>

        </div>
    );

    return (
        <div>
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown.Button onClick={handleButtonClick} overlay={menu1}>
                    Challenger: {challengerId}
                </Dropdown.Button>
                <Dropdown.Button overlay={menu2}>
                    Challenged: {challengedId}
            </Dropdown.Button>
            </div>
            <form>
                <input
                    type='text'
                    name='challenger'
                    value={challengerId}
                />
                <input
                    type='number'
                    name='challengerFrames'
                />
                <input
                    type='text'
                    name='challenged'
                    value={challengedId}
                />
                <input
                    type='number'
                    name='challengedFrames'
                />
            </form>
        </div>
    )



}