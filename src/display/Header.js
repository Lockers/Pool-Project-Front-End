import React, { useState } from 'react';
import { Players } from '../components/Players/Players';
import { Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { FullPlayerInfo } from '../components/Players/FullPlayerInfo';
import { LeagueTable } from '../components/leaguetable/LeagueTable';
import { MatchCreation } from '../components/matches/MatchCreation';
import { UpcomingChallenges } from '../components/challenges.js/UpComingChallenges';
import { AddPlayer } from '../components/Players/AddPlayer';
import { AddResults } from '../components/results/AddResults';
import { PreviousResults } from '../components/results/PreviousResults';
import { useGetRequest } from '../helpers/GetRequest';
import { Spin } from 'antd';

export const Display = () => {

    const players = useGetRequest('players')
    // Get request to get all players and save to state, ready to be passed to each component that needs players

    //State to set individual player to pass down as a prop
    const [individualPlayer, setIndividualPlayer] = useState()

    // Click handler takes in ID then filters player data to find individual player based on card click
    const handleClick = (e) => {
        const singlePlayer = players.data.filter(player => player._id === e)
        setIndividualPlayer(singlePlayer)
    }

    if (!players) {
        return <Spin />
    }
    return (
        <div className='mainContainer'>
                <NavBar />
                <Route exact path="/" render={(props) => <LeagueTable {...props} players={players} />} />
                <Route exact path="/players" render={(props) => <Players {...props} players={players} handleClick={handleClick} />} />
                <Route path="/players/:id" render={(props) => <FullPlayerInfo {...props} player={individualPlayer} />} />
                <Route exact path="/matches" render={(props) => <MatchCreation {...props} players={players} />} />
                <Route exact path="/upcomingchallenges" component={UpcomingChallenges} />
                <Route exact path="/addplayer" component={AddPlayer} />
                <Route exact path="/addResult" render={(props) => <AddResults {...props} players={players} />} />
                <Route exact path="/results" component={PreviousResults} />
            
        </div>

    )
}