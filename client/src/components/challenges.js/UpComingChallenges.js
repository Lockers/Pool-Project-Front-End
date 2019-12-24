import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Challenge } from './Challenge';
import { Spin } from 'antd';

export const UpcomingChallenges = (props) => {
    const challenges = useGetRequest('challenges')
    if (!challenges) {
        return <Spin />
    }
    return (
        <div>
            <h1>Upcoming Challenges</h1>
            {challenges.data.map((challenge, index) => {
                return <Challenge key={index} challenge={challenge} addResultHandleClick={props.addResultHandleClick} />
            })}
    </div>
    )
}