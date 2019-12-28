import React, {useState} from 'react';
import { Dropdown } from 'antd';
import { useResultHelper } from '../../helpers/AddResultHelper';

export const AddResults = (props) => {
    const dunno = useResultHelper(props.players)
    return (
        <div>
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown.Button onClick={dunno.handleButtonClick} overlay={dunno.challengerMenu}>
                    Challenger: {dunno.challengerId}
                </Dropdown.Button>
                <Dropdown.Button overlay={dunno.challengedMenu}>
                    Challenged: {dunno.challengedId}
                </Dropdown.Button>
                <Dropdown.Button overlay={dunno.venueMenu}>
                    Venue: {dunno.venue}
                </Dropdown.Button>
                <Dropdown.Button overlay={dunno.rulesetMenu}>
                    RuleSet: {dunno.ruleset}
                </Dropdown.Button>

            </div>
            <form onSubmit={dunno.newResultSubmitHandler}>
                <input
                    className='textInput'
                    type='text'
                    name='challenger'
                    value={dunno.challengerId}
                />
                <input
                    className='numberInput'
                    type='number'
                    name='challengerFrames'
                    onChange={e => dunno.challengerScoreChangeHandler(e)}
                />
                :
                 <input
                    className='numberInput'
                    type='number'
                    name='challengedFrames'
                    onChange={e => dunno.challengedScoreChangeHandler(e)}
                />
                <input
                    className='textInput'
                    type='text'
                    name='challenged'
                    value={dunno.challengedId}
                />
                <input
                    className='textInput'
                    type='text'
                    name='venue'
                    value={dunno.venue}
                />
                <input
                    className='textInput'
                    type='text'
                    name='ruleset'
                    value={dunno.ruleset}
                />
                <input
                    className='numberInput'
                    type='number'
                    name='pot'
                    onChange={e => dunno.potChangeHandler(e)}
                />
                <input
                    className='textInput'
                    type='date'
                    name='date'
                    onChange={e => dunno.dateChangeHandler(e)}
                />
                <button>Submit</button>
            </form>
        </div>
    )



}