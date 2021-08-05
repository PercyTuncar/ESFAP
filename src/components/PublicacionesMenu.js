import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
} from '@szhsin/react-menu';
import { Icon } from 'rsuite';


import '@szhsin/react-menu/dist/index.css';
import './nosotrosMenu.css'

export default function PublicacionesMenu() {
    return (
        <Menu menuButton={<MenuButton className="header_menu">Publicaciones <Icon icon='angle-down' size="lg" /></MenuButton>}>
            <MenuItem href="/acreditacion"  >Acreditación</MenuItem>
            <MenuItem href="/blog"  >Noticias</MenuItem>
            <MenuItem href="/revista"  >Revista Científica</MenuItem>
            <MenuItem href="/videotutorial"  >Video Tutoriales</MenuItem>
        </Menu>
    );
}