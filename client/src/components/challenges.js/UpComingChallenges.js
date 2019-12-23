import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Challenge } from './Challenge';
import { Spin } from 'antd';

export const UpcomingChallenges = () => {
    const challenges = useGetRequest('challenges')
    if (!challenges) {
        return <Spin />
    }
    return (
    <div>
            {challenges.data.map(challenge => {
                return <Challenge challenge={challenge} />
            })}
    </div>
    )
}