import React, { useState } from 'react';
import { Players } from '../components/Players/Players';
import { Route } from 'react-router-dom';
// import { NavBar } from './NavBar';
import NavBarTest from './NavBarTest';
import { FullPlayerInfo } from '../components/Players/FullPlayerInfo';
// import { LeagueTable } from '../components/leaguetable/LeagueTable';
import { LeagueTableTest } from '../components/leaguetable/LeagueTableTest';
import { AddPlayer } from '../components/Players/AddPlayer';
import { AddResults } from '../components/results/AddResults';
import CreateChallenge from '../components/challenges/CreateChallenge';
import { ViewResults } from '../components/results/ViewResults';
import { useGetRequest } from '../helpers/GetRequest';
import { Spin } from 'antd';
import { ViewChallenges } from '../components/challenges/ViewChallenges';
import { SubmitChallenge } from '../components/challenges/SubmitChallenge';
// import { TestArchive } from '../components/testArchive';

export const Display = () => {

    const players = useGetRequest('players')
    // Get request to get all players and save to state, ready to be passed to each component that needs players

    //State to set individual player to pass down as a prop
    const [individualPlayer, setIndividualPlayer] = useState()
    const [individualChallenge, setIndividualChallenge] = useState()

    // Click handler takes in ID then filters player data to find individual player based on card click
    const handleClick = (e) => {
        const singlePlayer = players.data.filter(player => player._id === e)
        setIndividualPlayer(singlePlayer)
    }

    const resultHandler = (e) => {
        setIndividualChallenge(e)
    }

    if (!players) {
        return <Spin />
    }
    return (
        <div className='mainContainer'>
            <NavBarTest />
            <Route exact path="/leaguetable" render={(props) => <LeagueTableTest {...props} players={players} />} />
            <Route exact path="/players" render={(props) => <Players {...props} players={players} handleClick={handleClick} />} />
            <Route path="/players/:id" render={(props) => <FullPlayerInfo {...props} player={individualPlayer} />} />
            <Route exact path="/viewresults" component={ViewResults} />
            <Route exact path="/challenges" render={(props) => <ViewChallenges {...props} />} />
            <Route exact path="/addResult" render={(props) => <AddResults {...props} players={players} />} />
            <Route exact path="/playeradmin" render={(props) => <AddPlayer {...props} players={players} />} />
            <Route exact path="/submitchallenge" render={(props) => <SubmitChallenge {...props} individualChallenge={individualChallenge} />} />
            <Route exact path="/createchallenge" render={(props) => <CreateChallenge {...props} players={players} resultHandler={resultHandler} />} />
            {/* <Route exact path="/testarchive" render={(props) => <TestArchive {...props} players={players} />} /> */}
        </div> 

    )
}