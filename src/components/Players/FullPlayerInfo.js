import React from 'react';
import { Spin, Descriptions } from 'antd';
import Moment from 'react-moment';
import Styled from 'styled-components';

const Div = Styled.div`
margin: 1rem;
`

export const FullPlayerInfo = (props) => {
    
    if (!props.player) {
        return (
            <Spin />
        )
    }

    return (
        <div>
            <p>Name: {props.player[0].name}</p>
            <p>Played: {props.player[0].played}</p>
            <p>Won: {props.player[0].won}</p>
            <p>Total Prize Money Won: {props.player[0].totalPrizeMoney}</p>
            <h1>Previous results</h1>
            {props.player[0].results.map((result, index) => {
                return (
                    <Div>
                    <Descriptions key={index} bordered={true} size='small' layout='vertical' column='xs'>
                        <Descriptions.Item label="Venue">{result.venue}</Descriptions.Item>
                        <Descriptions.Item label="Date"><Moment format="DD/MM/YYYY">{result.date}</Moment></Descriptions.Item>
                        <Descriptions.Item label="Ruleset">{result.ruleset}</Descriptions.Item>
                        <Descriptions.Item label="Pot">£{result.pot}</Descriptions.Item>
                        <Descriptions.Item label="Result">{result.challenger} {result.challengerScore} - {result.challengedScore} {result.challenged}</Descriptions.Item>
                    </Descriptions>
                    </Div>
                )
            })}
        </div>
    )
}
