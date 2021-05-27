import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import { Icon } from 'rsuite';


import '@szhsin/react-menu/dist/index.css';
import './nosotrosMenu.css'

export default function PlataformasVirtualesMenu() {
    return (
        <Menu menuButton={<MenuButton className="header_menu">Plataformas Virtuales <Icon icon='angle-down' size="lg" /></MenuButton>}>
            <MenuItem>Esfap virtual (chamilo)</MenuItem>
            <MenuItem>Consulta de Notas</MenuItem>
            <MenuItem>Repositorio ESFAP</MenuItem>
            <MenuItem>Biblioteca Virtual</MenuItem>
            <MenuItem>Google for education</MenuItem>
            <MenuItem>Lecturas Virtuales ESFAP</MenuItem>
        </Menu>
    );
}