import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Loader } from '../../misc/Loader';

export const DashBoard = () => {
    
    const results = useGetRequest('results')
    let totalPot = null
    if (!results) {
        return <Loader />
    }
    totalPot = results.data.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue.pot
    }, 0)

    console.log(results.data.length)
    
    return (
        <div>
            <p>Total Pot Played for = £{totalPot}</p>
            <p>Average Pot = £{Math.round(totalPot / results.data.length)}</p>
        </div>
    )
}