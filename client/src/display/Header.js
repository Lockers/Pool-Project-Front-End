import React from 'react';
import { Spastic } from '../components/Test';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


export const TestComponent = () => {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

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
                        <Menu.Item key="1">League Table</Menu.Item>
                        <Menu.Item key="2">Upcoming Matches</Menu.Item>
                        <Menu.Item key="3">Previous Results</Menu.Item>
                        <Menu.Item key="4">Challenge</Menu.Item>
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
                    <Route path="/" component={Spastic} />
        </Content>
            </Layout>
        </Layout>
    </Layout>
)
}