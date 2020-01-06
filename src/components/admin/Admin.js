import React, {useState} from 'react';
import { AddPlayer } from './players/AddPlayer';
import { DeletePlayer } from './players/DeletePlayer';
import { useGetRequest } from '../../helpers/GetRequest';
import { AddResults } from './results/AddResults';
import { Loader } from '../../misc/Loader';
import { AddChallenge } from './challenges/AddChallenge';
import { EditChallenge } from './challenges/EditChallenge';
import { TestArchive } from './players/testArchive';
import { SubmitChallenge } from './challenges/SubmitChallenge';
import { AdminChallenges } from './challenges/AdminChallenge';


export const Admin = () => {
    const players = useGetRequest('players')
    const [challenge, setChallenge] = useState()

    if (!players) {
        return <Loader />
    }

    function handleClick(challenge){
        setChallenge(challenge)
    }
    return (
        //ToDO Addresults
        <div>
            <h1>Admin</h1>
            <AddPlayer />
            <DeletePlayer players={players} />
            <AddResults players={players} />
            <AddChallenge players={players} />
            <AdminChallenges handleClick={handleClick} />
            <EditChallenge challenge={challenge} />
            <SubmitChallenge challenge={challenge} />
            <TestArchive players={players} />
        </div>
    )
}