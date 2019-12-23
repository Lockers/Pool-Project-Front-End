import React from 'react';

export const Challenge = (props) => {
    return (
        <div>
            <span> {props.challenge.challenger} v {props.challenge.challenged} venue: {props.challenge.venue} ruleset: {props.challenge.ruleset} Pot: {props.challenge.pot}</span>
        </div>
    )
}