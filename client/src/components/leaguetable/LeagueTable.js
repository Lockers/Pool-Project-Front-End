import React from 'react';
import { usePopulateLeagueData }from '../../helpers/PopulateLeagueData'
import { Table } from 'antd';
import '../../App.css';

export const LeagueTable = (props) => {
    const data = usePopulateLeagueData()
    return (

        <div>
            <Table
                rowClassName={(record, index) => record.Challengable ? 'trueChallenge' : 'falseChallenge'}
                rowKey={dataSource => dataSource.PosID}
                dataSource={data[0]} columns={data[1]}
                onRow={(record, rowIndex) => { props.handleClick(record.PosID) }}
            />
        </div>

    )
}
