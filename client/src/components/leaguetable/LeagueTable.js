import React from 'react';
import { usePopulateLeagueData }from '../../helpers/PopulateLeagueData'
import { Table } from 'antd';
import '../../App.css';

export const LeagueTable = (props) => {
    const data = usePopulateLeagueData()
    return (

        <div>
            <Table
                rowClassName={(record, index) => record.challengable ? 'trueChallenge' : 'falseChallenge'}
                rowKey={dataSource => dataSource.leaguePosition}
                dataSource={data[0]} columns={data[1]}
                onRow={(record, rowIndex) => { props.handleClick(record.leaguePosition ) }}
            />
        </div>

    )
}
