import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Spin } from 'antd';


export const ViewChallenges = () => {
    const challenges = useGetRequest('challenges')
    if (!challenges) {
        return <Spin />
    }

    return (
        <p>ViewChallenges</p>
    )
}