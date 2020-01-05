import React from 'react';
import { AddPlayer } from './players/AddPlayer';
import { DeletePlayer } from './players/DeletePlayer';
import { useGetRequest } from '../../helpers/GetRequest';
import { AddResults } from './results/AddResults';
import { Loader } from '../../misc/Loader';
import { AddChallenge } from './challenges/AddChallenge';
import { EditChallenge } from './challenges/EditChallenge';
import { TestArchive } from './players/testArchive';
// import { SubmitChallenge } from './challenges/SubmitChallenge';
// import { AdminChallenges} from './challenges/AdminChallenge';

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
            <AddChallenge players={players} />
            <EditChallenge challenge={challenge} />
            {/* <AdminChallenges /> */}
            <TestArchive players={players} />
        </div>
    )
}