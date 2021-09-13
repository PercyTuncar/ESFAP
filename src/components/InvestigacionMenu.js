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
import './InvestigacionMenu.css'

export default function InvestigacionMenu() {
    return (
        <Menu menuButton={<MenuButton className="header_menu">INVESTIGACIÓN <Icon icon='angle-down' size="lg" /></MenuButton>}>
            <MenuItem href="/investigacion">PRESENTACIÓN</MenuItem>
            <MenuItem href="/heraldica">ASESORES</MenuItem>
            <MenuItem href="/organizacion">ACTIVIDADES</MenuItem>
            <MenuItem href="/normatividad">PUBLICACIONES</MenuItem>
            <MenuItem href="/normatividad">NORMAS DE INVESTIGACIÓN</MenuItem>
        </Menu>
    );
}