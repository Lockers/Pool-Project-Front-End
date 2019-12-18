import React from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

export const DropDown = (props) => {

    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    function handleMenuClick(e) {
        alert('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>

            <Menu.Item key="1">
                <Icon type="user" />
                1st menu item
    </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
                2nd menu item
    </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                3rd item
    </Menu.Item>
        </Menu>
    );
    const menu2 = (
        <Menu onClick={handleMenuClick}>

            <Menu.Item key="1">
                <Icon type="user" />
                1st menu item
    </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
                2Balls
    </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                3rd item
    </Menu.Item>
        </Menu>
    );

    return (
        <div id="components-dropdown-demo-dropdown-button">
            <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
                Dropdown
    </Dropdown.Button>
            <Dropdown.Button overlay={menu2} icon={<Icon type="user" />}>
                Dropdown
    </Dropdown.Button>
        </div>
    );
}