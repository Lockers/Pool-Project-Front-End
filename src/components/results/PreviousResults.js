import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Spin } from 'antd';

export const PreviousResults = () => {
    const results = useGetRequest('results')
    
    if (!results) {
        return <Spin />
    }

    return (
        <div>
            <h1>Previous results</h1>
            {results.data.map((result, index) => {
                return(
                    <div>
                        <span>
                            <span>{result.challenger}</span> v 
                            <span>{result.challenged}</span>
                            <span>Venue: {result.venue}</span>
                            <span>Date: {result.date}</span>
                            <span>Pot : £{result.pot}</span>
                        </span>
                
                </div>
                )
            })}
        </div>
    )
}