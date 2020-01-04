import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { NavLink } from 'react-router-dom';
import { Spin, Button } from 'antd';
import Styled from 'styled-components';
import Moment from 'react-moment';

const Span = Styled.span`
    margin: 1rem;
`
const Div = Styled.div`
    border: 1px solid black;
    display:flex;
`
export const AmendChallenges = (props) => {
    const challenges = useGetRequest('challenges')
    if (!challenges) {
        return <Spin />
    }
    return (
        <div>
            {challenges.data.map(challenge => {
                return <Div key={challenge._id}>
                    <Span>
                        <span>{challenge.challenger}</span> V
                        <span>{challenge.challenged}</span>
                        <span>{challenge.venue}</span>
                        <span>{challenge.ruleset}</span>
                        <span>{challenge.pot}</span>
                        <span><Moment format="DD/MM/YYYY">{challenge.date}</Moment></span>
                    </Span>
                    <NavLink to='submitchallenge'><Button onClick={e => props.resultHandler(challenge)}>Result</Button></NavLink>
                    <NavLink to='editchallenge'><Button onClick={e => props.resultHandler(challenge)}>Edit</Button></NavLink>
                </Div>
            })}
        </div>
    )
}