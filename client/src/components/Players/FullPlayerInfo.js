import React from 'react';
import { Spin } from 'antd';

export const FullPlayerInfo = (props) => {
    
    // if (!props.player) {
    //     return (
    //         <Spin />
    //     )
    // }
    console.log(props)
    return (
        <div>
            {props.player[0].name}
            {props.player[0].played}
            {props.player[0].won}
            {props.player[0].totalPrizeMoney}
        </div>
    )
}
