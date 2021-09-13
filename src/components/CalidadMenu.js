import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import { Icon } from 'rsuite';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import '@szhsin/react-menu/dist/index.css';
import './CalidadMenu.css'

export default function CalidadMenu() {
    return (
        <Menu menuButton={<MenuButton className="header_menu">CALIDAD <Icon icon='angle-down' size="lg" /></MenuButton>}>
            <MenuItem href="/calidad">ESTÁNDARES DE CALIDAD</MenuItem>
            <MenuItem href="/heraldica">MANUAL DE PROCESOS </MenuItem>
            <MenuItem href="/organizacion">MANUAL DE CALIDAD</MenuItem> 
        </Menu>
    );
}