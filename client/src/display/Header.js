import React, {useState} from 'react';
import { Players } from '../components/Players/Players';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { FullPlayerInfo } from '../components/Players/FullPlayerInfo';
import { LeagueTable } from '../components/leaguetable/LeagueTable';
import { MatchCreation } from '../components/matches/MatchCreation';
import { UpcomingChallenges } from '../components/challenges.js/UpComingChallenges';
// import { AddResults } from '../components/results/AddResults';
// import { ViewResults } from '../components/results/ViewResults';
import { useGetRequest } from '../helpers/GetRequest';
import { Spin } from 'antd';

export const Display = () => {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    
    // Get request to get all players and save to state, ready to be passed to each component that needs players
    const players = useGetRequest('players')

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
    <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Login</Menu.Item>
                <Menu.Item key="3">Register</Menu.Item>
            </Menu>
        </Header>
        <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0, marginBottom: '5rem' }}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="user" />
                                Menu
              </span>
                        }
                    >
                        <Menu.Item key="4">
                            <Link to='/league-table'>League Table</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to='/players'>Players</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to='/upcomingchallenges'>Upcoming Matches</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to='/results'>Previous Results</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to='/matches'>Match Admin</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to='/addResult'>Results Admin</Link>
                        </Menu.Item>
                    </SubMenu>
                    
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {/* 
        
                    <Route exact path="/addResult" render={(props) => <AddResults {...props} challengeId={challengeId} />} />
                    <Route exact path="/Results" component={ViewResults} /> */}
                    <Route exact path="/league-table" render={(props) => <LeagueTable {...props} players={players} />} />
                    <Route exact path="/players" render={(props) => <Players {...props} players={players} handleClick={handleClick} />} />
                    <Route path="/players/:id" render={(props) => <FullPlayerInfo {...props} player={individualPlayer} />} />
                    <Route exact path="/matches" render={(props) => <MatchCreation {...props} players={players} />} />
                    <Route exact path="/upcomingchallenges" component={UpcomingChallenges} />
                    
        </Content>
            </Layout>
        </Layout>
    </Layout>
)
}