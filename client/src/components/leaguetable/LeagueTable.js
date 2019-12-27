import React from 'react';
import { Table } from 'antd';

//Import Column Data to set up table
import { columns } from '../data/GeneralData';

export const LeagueTable = (props) => {
    //Add player data from props
    
    return (
        //Set up table and populate with data from columns and using props.players as data source
        <div>
            
            <Table
                rowClassName={(record, index) => record.challengable ? 'trueChallenge' : 'falseChallenge'}
                rowKey={dataSource => dataSource._id}
                dataSource={props.players.data} columns={columns}
            />
        </div>

    )
}
