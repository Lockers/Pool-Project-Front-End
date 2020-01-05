import React from 'react';
import { AddPlayer } from './players/AddPlayer';
import { DeletePlayer } from './players/DeletePlayer';
import { useGetRequest } from '../../helpers/GetRequest';
import { AddResults } from './results/AddResults';
import { Loader } from '../../misc/Loader';
import CreateChallenge from './challenges/CreateChallenge';
import { EditChallenge } from './challenges/EditChallenge';

export const Admin = () => {
    const players = useGetRequest('players')
    const challenge = useGetRequest('challenges')



    if (!players) {
        return <Loader />
    }
    return (
        //ToDO Addresults
        <div>
            <h1>Admin</h1>
            <AddPlayer />
            <DeletePlayer players={players} />
            <AddResults players={players} />
            <CreateChallenge players={players} />
            <EditChallenge challenge={challenge}/>
        </div>
    )
}