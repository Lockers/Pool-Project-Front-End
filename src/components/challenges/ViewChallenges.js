import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Spin } from 'antd';
import Styled from 'styled-components'

const Span = Styled.span`
    margin: 1rem;
`


export const ViewChallenges = () => {
    const challenges = useGetRequest('challenges')
    if (!challenges) {
        return <Spin />
    }
    console.log(challenges)
    return (
        <div>
            {challenges.data.map(challenge => {
                return <div key={challenge._id}>
                    <Span>
                        <span>{challenge.challenger}</span> V
                        <span>{challenge.challenged}</span>
                        <span>{challenge.venue}</span>
                        <span>{challenge.ruleset}</span>
                        <span>{challenge.pot}</span>
                        <span>{challenge.date}</span>
                    </Span>
                    </div>
            })}
        </div>
    )
}