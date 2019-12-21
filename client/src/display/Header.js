import React, {useState} from 'react';
import { Players } from '../components/Players/Players';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { FullPlayerInfo } from '../components/Players/FullPlayerInfo';
import { LeagueTable } from '../components/leaguetable/LeagueTable';
import { MatchCreation } from '../components/matches/MatchCreation';

export const Display = () => {
    const [player, setPlayer] = useState(1)
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    const handleClick = (PosId) => {
        setPlayer(PosId)
        console.log(player)
        return PosId;
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
                            <Link to='/upcoming-matches'>Upcoming Matches</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to='/previous-results'>Previous Results</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to='/matches'>Match Admin</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to='/reuslts'>Results Admin</Link>
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
                    <Route exact path="/players" render={(props) => <Players {...props} handleClick={handleClick} />} />
                    <Route path="/players/:id" render={(props) => <FullPlayerInfo {...props} player={player} />} />
                    <Route exact path="/league-table" render={(props) => <LeagueTable {...props} handleClick={handleClick} />} />
                    <Route exact path="/matches" render={(props) => <MatchCreation {...props} />} />
                    
        </Content>
            </Layout>
        </Layout>
    </Layout>
)
}