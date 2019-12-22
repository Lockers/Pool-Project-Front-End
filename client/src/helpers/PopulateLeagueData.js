import React from 'react';
import { useGetRequest } from './GetRequest';
import { Spin } from 'antd';

export function usePopulateLeagueData() {
    
    const data = useGetRequest('players/league-table')
    if (data === undefined) {
        return <Spin />
    }
    else {
        console.log(data)
        const dataSource = data.data;

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Played',
                dataIndex: 'played',
                key: 'played'
            },
            {
                title: 'Won',
                dataIndex: 'won',
                key: 'won'
            },
            {
                title: 'Lost',
                dataIndex: 'lost',
                key: 'lost'
            },
            {
                title: 'Total Prize Money',
                dataIndex: 'totalPrizeMoney',
                key: 'totalPrizeMoney'
            },
        ]
        return [dataSource, columns]
    }
}
