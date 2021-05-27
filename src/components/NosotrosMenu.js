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

export default function NosotrosMenu() {
    return (
        <Menu menuButton={<MenuButton className="header_menu">Nosotros <Icon icon='angle-down' size="lg" /></MenuButton>}>
             <SubMenu label="Dirección">
                <MenuItem>Saludo del Director</MenuItem>
                <MenuItem>Galería de Directores</MenuItem>
            </SubMenu>
            <MenuItem>História</MenuItem>
            <MenuItem>Heraldica</MenuItem>
            <MenuItem>Organización</MenuItem>
            <MenuItem>Normatividad</MenuItem>
        </Menu>
    );
}