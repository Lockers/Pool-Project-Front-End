import React from 'react';
import { useGetRequest } from './GetRequest';
import { Spin } from 'antd';

export function usePopulateLeagueData() {
    
    const data = useGetRequest('players')
    if (data === undefined) {
        return <Spin />
    }
    else {
        const dataSource = data.data;

        const columns = [
            {
                title: 'Name',
                dataIndex: 'Name',
                key: 'name'
            },
            {
                title: 'Played',
                dataIndex: 'Played',
                key: 'played'
            },
            {
                title: 'Won',
                dataIndex: 'Won',
                key: 'won'
            },
            {
                title: 'Lost',
                dataIndex: 'Lost',
                key: 'lost'
            },
            {
                title: 'Total Prize Money',
                dataIndex: 'TotalPrizeMoney',
                key: 'totalPrizeMoney'
            },
        ]
        return [dataSource, columns]
    }
}
