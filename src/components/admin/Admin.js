import React from 'react';
import { AddPlayer } from './players/AddPlayer';
import { DeletePlayer } from './players/DeletePlayer';
import { useGetRequest } from '../../helpers/GetRequest';
import { AddResults } from './results/AddResults';
import { Loader } from '../../misc/Loader';

export const Admin = () => {
    const players = useGetRequest('players')
    if (!players) {
        return <Loader />
    }
    return (
        <div>
            <h1>Admin</h1>
            <AddPlayer />
            <DeletePlayer players={players} />
            <AddResults players={players}/>
        </div>
        )
}