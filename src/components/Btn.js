import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Btn() {
    return (
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem>New File</MenuItem>
            <SubMenu label="Open">
                <MenuItem>index.html</MenuItem>
                <MenuItem>example.js</MenuItem>
                <SubMenu label="Styles">
                    <MenuItem>about.css</MenuItem>
                    <MenuItem>home.css</MenuItem>
                    <MenuItem>index.css</MenuItem>
                </SubMenu>
            </SubMenu>
            <MenuItem>Save</MenuItem>
        </Menu>
    );
}