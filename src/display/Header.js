import React from 'react';
import { Players } from '../components/Players/Players';
import { Route } from 'react-router-dom';
import NavBarTest from './NavBarTest';
import { LeagueTableTest } from '../components/leaguetable/LeagueTableTest';
// import { AddPlayer } from '../components/admin/AddPlayer';
// import { AddResults } from '../components/results/AddResults';
// import CreateChallenge from '../components/challenges/CreateChallenge';
import { ViewResults } from '../components/results/ViewResults';
import { useGetRequest } from '../helpers/GetRequest';
import { Spin } from 'antd';
import { ViewChallenges } from '../components/challenges/ViewChallenges';
// import { SubmitChallenge } from '../components/challenges/SubmitChallenge';
// import { EditChallenge } from '../components/challenges/EditChallenge';
import PrivateRoute from '../components/auth/PrivateRoute';
import { Admin } from '../components/admin/Admin';
// import { TestArchive } from '../components/testArchive';

export const Display = () => {

    const players = useGetRequest('players')

    if (!players) {
        return <Spin />
    }
    return (
        <div className='mainContainer'>
            <NavBarTest />
            <Route exact path="/" render={(props) => <LeagueTableTest {...props} players={players} />} />
            <Route exact path="/players" render={(props) => <Players {...props} players={players} />} />
            <Route exact path="/viewresults" component={ViewResults} />
            <Route exact path="/viewchallenges" component={ViewChallenges} />
            <PrivateRoute path='/admin' component={Admin} />
            {/* <Route exact path="/addResult" render={(props) => <AddResults {...props} players={players} />} />
            <Route exact path="/playeradmin" render={(props) => <AddPlayer {...props} players={players} />} />
            <Route exact path="/submitchallenge" render={(props) => <SubmitChallenge {...props} individualChallenge={individualChallenge} />} />
            <Route exact path="/createchallenge" render={(props) => <CreateChallenge {...props} players={players} resultHandler={resultHandler} />} />
            <Route exact path="/editchallenge" render={(props) => <EditChallenge {...props} players={players} resultHandler={resultHandler} />} /> */}
            {/* <Route exact path="/testarchive" render={(props) => <TestArchive {...props} players={players} />} /> */}
            
        </div> 

    )
}