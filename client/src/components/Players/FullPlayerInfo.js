import React from 'react';
import { Spin } from 'antd';
import { useGetRequest } from '../../helpers/GetRequest';

export const FullPlayerInfo = (props) => {
    const player = useGetRequest(`players/${props.player}`)
    if (player === undefined) {
        return (
            <Spin />
        )
    }
    return (
        <div>
            <p>{player.data[0].Name}</p>
            <p>{player.Name}</p>
            <p>{player.Name}</p>
            <p>{player.Name}</p>
            <p>{player.Name}</p>
            <p>{player.Name}</p>
        </div>
    )
}
