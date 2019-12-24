import React from 'react';
import { Table } from 'antd';
import '../../App.css';

export const LeagueTable = (props) => {
    //Add player data from props
    const dataSource = props.players.data;

    //Set league table Column names
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
    return (
        //Set up table and populate with data from columns and using props.players as data source
        <div>
            
            <Table
                rowClassName={(record, index) => record.challengable ? 'trueChallenge' : 'falseChallenge'}
                rowKey={dataSource => dataSource.leaguePosition}
                dataSource={dataSource} columns={columns}
            />
        </div>

    )
}
