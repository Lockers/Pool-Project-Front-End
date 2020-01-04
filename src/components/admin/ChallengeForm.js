import React from 'react';
import { Dropdown, Button, DatePicker } from 'antd';
import Styled from 'styled-components';

const Div = Styled.div`
    display: flex;
    border: 1px black solid;
    padding: 1rem;
`

export const ChallengeForm = (props) => {

    return (
        <Div>
        <div>
            <h1>Add A Challenge</h1>
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown.Button overlay={props.challenge.challengerMenu}>
                    Challenger
            </Dropdown.Button>
                <Dropdown.Button overlay={props.challenge.challengedMenu}>
                    Challenged
            </Dropdown.Button>
                <Dropdown.Button overlay={props.challenge.venuesMenu}>
                    Venue
            </Dropdown.Button>
                <Dropdown.Button overlay={props.challenge.rulesetMenu}>
                    Ruleset
            </Dropdown.Button>
        </div>

            <form onSubmit={e => props.challenge.submitHandler(e)}>
                <input
                    className='textInput'
                    type='text'
                    name='challenger'
                    value={props.challenge.challenger}
                />
                V
            <input
                    className='textInput'
                    type='text'
                    name='challenged'
                    value={props.challenge.challenged}
                />
                <input
                    className='textInput'
                    type='text'
                    name='venue'
                    value={props.challenge.venue}

                />
                <input
                    className='textInput'
                    type='text'
                    name='ruleset'
                    value={props.challenge.ruleSet}
                />
                <input
                    className='numberInput'
                    type='number'
                    name='pot'
                    onChange={props.challenge.potChangeHandler}
                />
                <DatePicker onChange={props.challenge.dateChangeHandler} />  
                <Button htmlType='submit'>Submit</Button>
            </form>
            </div>
        </Div>
    )
}
