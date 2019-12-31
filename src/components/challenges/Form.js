import React from 'react';
import { Dropdown } from 'antd';

export const Form = (props) => {

    return (
        <div>
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
                <input
                    className='textInput'
                    type='date'
                    name='date'
                    onChange={props.challenge.dateChangeHandler}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}