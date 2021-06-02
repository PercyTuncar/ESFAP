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
import './nosotrosMenu.css'

export default function NosotrosMenu() {
    return (
        <Menu menuButton={<MenuButton className="header_menu">Nosotros <Icon icon='angle-down' size="lg" /></MenuButton>}>
             <SubMenu label="Dirección"> 
                <MenuItem href="/SaludoPage">Saludo de Directores</MenuItem> 
                <MenuItem href="/GaleriaDeDirectoresPage">Galería de Directores</MenuItem> 
            </SubMenu>
            <MenuItem href="/historia">História</MenuItem>
            <MenuItem href="/heraldica">Heraldica</MenuItem>
            <MenuItem href="/organizacion">Organización</MenuItem>
            <MenuItem href="/normatividad">Normatividad</MenuItem>
        </Menu>
    );
}