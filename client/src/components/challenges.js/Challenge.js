import React from 'react';
import { Link } from 'react-router-dom';

export const Challenge = (props) => {

    return (


        <div className='matches'>
            <div >
                <span> {props.challenge.challenger} v {props.challenge.challenged}  {props.challenge.venue}  {props.challenge.ruleset}  £{props.challenge.pot} {props.challenge.date} </span>
            </div>
            <Link to='/addResult'><button onClick={e => props.addResultHandleClick(props.challenge._id)}>Result</button></Link>
        </div>

    )
}