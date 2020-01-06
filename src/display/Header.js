import React from 'react';
import { Players } from '../components/Players/Players';
import { Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { LeagueTable } from '../components/leaguetable/LeagueTable';
import { ViewResults } from '../components/results/ViewResults';
import { ViewChallenges } from '../components/challenges/ViewChallenges';
import PrivateRoute from '../components/auth/PrivateRoute';
import { Admin } from '../components/admin/Admin';
import Styled from 'styled-components'

const Container = Styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
`

export const Display = () => {

    return (
        <Container>
            <NavBar />
            <Route exact path="/" component={LeagueTable} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/viewresults" component={ViewResults} />
            <Route exact path="/viewchallenges" component={ViewChallenges} />
            <PrivateRoute path='/admin' component={Admin} /> 
        </Container> 

    )
}