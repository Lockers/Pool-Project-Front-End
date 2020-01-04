import React from 'react';
import { AddPlayer } from './AddPlayer';
import { DeletePlayer } from './DeletePlayer';
import { useGetRequest } from '../../helpers/GetRequest';

export const Admin = () => {
    const players = useGetRequest('players')
    return (
        <div>
            <h1>Admin</h1>
            <AddPlayer />
            <DeletePlayer players={players}/>
        </div>
        )
}