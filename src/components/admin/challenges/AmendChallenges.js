import React, { useState } from 'react';
import { useGetRequest } from '../../../helpers/GetRequest';
import { Spin, Button } from 'antd';
import Styled from 'styled-components';
import Moment from 'react-moment';
import { EditChallenge } from './EditChallenge';
import { SubmitChallenge } from './SubmitChallenge';

const Span = Styled.span`
    margin: 1rem;
`
const Div = Styled.div`
    border: 1px solid black;
    display:flex;
`
export const AmendChallenges = (props) => {
    const [singleChallenge, setSingleChallenge] = useState()

    const challenges = useGetRequest('challenges')
    if (!challenges) {
        return <Spin />
    }

    const handleChallengeClick = (e) => {
        setSingleChallenge(e)
    }

    const resultHandler = (e) => {
        setSingleChallenge(e)   
    }
    
    return (
        
        <div>
            <EditChallenge singleChallenge={singleChallenge} players={props.players}/>
            <SubmitChallenge singleChallenge={singleChallenge} players={props.players}/>
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
                    
                    <Button onClick={e => resultHandler(challenge)}>Result</Button>
                    <Button onClick={e => handleChallengeClick(challenge)}>Edit</Button>
                </Div>
            })}
        </div>
    )
}