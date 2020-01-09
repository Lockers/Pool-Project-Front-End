import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Descriptions } from 'antd';
import Moment from 'react-moment';
import { Loader } from '../../misc/Loader';


export const ViewResults = () => {
    const results = useGetRequest('results')

    if (!results) {
        return <Loader />
    }

    return (
        <div>
            <h1>Previous results</h1>
            {results.data.map((result, index) => {
                return (
                    <div key={index}>
                        <Descriptions bordered={true} size='small' layout='vertical' column='sm'>
                            <Descriptions.Item label="Venue">{result.venue}</Descriptions.Item>
                            <Descriptions.Item label="Date"><Moment format="DD/MM/YYYY">{result.date}</Moment></Descriptions.Item>
                            <Descriptions.Item label="Ruleset">{result.ruleset}</Descriptions.Item>
                            <Descriptions.Item label="Pot">£{result.pot}</Descriptions.Item>
                            <Descriptions.Item label="Result">{result.challenger} {result.challengerScore} - {result.challengedScore} {result.challenged}</Descriptions.Item>
                        </Descriptions>,
                    </div>
                )
            })}
        </div>
    )
}