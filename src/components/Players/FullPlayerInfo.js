import React from 'react';
import { Spin } from 'antd';
import Moment from 'react-moment';

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
            {props.player[0].results.map((result, index) => {
                return (
                    <div key={index}>
                        <span>{result.challenger}</span>
                    <span>{result.challengerScore}</span>
                    <span>{result.challengedScore}</span>
                    <span>{result.challenged}</span>
                        <span>{result.venue}</span>
                        <span><Moment format="DD/MM/YYYY">{result.date}</Moment></span>
                        </div>
                )
            })}
        </div>
    )
}
