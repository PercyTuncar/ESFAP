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
        <Menu menuButton={<MenuButton className="header_menu">ESFAP VIRTUAL <Icon icon='angle-down' size="lg" /></MenuButton>}>
            <MenuItem href="http://esfapvirtual.fap.mil.pe/" target="blank">Esfap virtual (chamilo)</MenuItem>
            <MenuItem  href="http://repositorio.fap.mil.pe/" target="blank" >Repositorio ESFAP</MenuItem>
            <MenuItem  href="https://drive.google.com/drive/folders/1G2rh1dvqiJMv0FSzgBaNj-l55gmAMudL?usp=sharing" target="blank" >Lecturas Virtuales ESFAP</MenuItem>
        </Menu>
    );
}