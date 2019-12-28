import React from 'react';
import { Spin } from 'antd';

export const FullPlayerInfo = (props) => {
    
    if (!props.player) {
        return (
            <Spin />
        )
    }
    console.log(props)
    return (
        <div>
            <p>Name: {props.player[0].name}</p>
            <p>Played: {props.player[0].played}</p>
            <p>Won: {props.player[0].won}</p>
            <p>Total Prize Money Won: {props.player[0].totalPrizeMoney}</p>
            Results
            {props.player[0].results.map(result => {
                return (
                    <div>
                    <p>{result.challenger}</p>
                    <p>{result.challengerScore}</p>
                    <p>{result.challengedScore}</p>
                    <p>{result.challenged}</p>
                    <p>{result.venue}</p>
                        </div>
                )
            })}
        </div>
    )
}
