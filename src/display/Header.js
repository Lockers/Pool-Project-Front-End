import React from 'react';
import { Players } from '../components/Players/Players';
import { Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { LeagueTable } from '../components/leaguetable/LeagueTable';
import { ViewResults } from '../components/results/ViewResults';
import { ViewChallenges } from '../components/challenges/ViewChallenges';
import PrivateRoute from '../components/auth/PrivateRoute';
import { Admin } from '../components/admin/Admin';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import Styled from 'styled-components';
import { Rules } from '../components/Rules';
 

const Container = Styled.div`
    max-width: 400px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
     @media(min-width: 600px) {
  
    max-width: 800px;
  
}
`
export const Display = () => {
    
    return (
        <Container>
            <NavBar />
            <Route exact path="/" component={LeagueTable} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/players" render={(props) => <Players {...props} />} />
            <Route exact path="/viewresults" component={ViewResults} />
            <Route exact path="/viewchallenges" component={ViewChallenges} />
            <Route exact path="/rules" component={Rules} />
            <PrivateRoute path='/admin' component={Admin} />
        </Container>

    )
}