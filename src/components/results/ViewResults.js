import React from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import {Spin} from 'antd'

export const ViewResults = () => {
    const results = useGetRequest('results')
    if (!results) {
        return <Spin />
    }
    console.log(results)
    return (
        <div>{results.data.map(result => {
            console.log(result)
            return <div><span>{result.challenger}  {result.challengerScore} v {result.challengedScore}  {result.challenged} {result.venue} {result.pot} {result.date} </span></div>
        })}</div>
    )
}