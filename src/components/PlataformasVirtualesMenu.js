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
            <MenuItem href="http://esfapvirtual.fap.mil.pe/" target="blank">Esfap virtual (chamilo)</MenuItem>
            <MenuItem  href="http://sicon.fap.mil.pe/escuelas/esfap/" target="blank" >Consulta de Notas</MenuItem>
            <MenuItem  href="http://repositorio.fap.mil.pe/" target="blank" >Repositorio ESFAP</MenuItem>
            <MenuItem  href="https://search.ebscohost.com/login.aspx?authtype=custuid&custid=ns280042&lang=es" target="blank" >Biblioteca Virtual</MenuItem>
            <MenuItem  href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&hd=esfap.edu.pe&sacu=1&flowName=GlifWebSignIn&flowEntry=AddSession" target="blank" >Google for education</MenuItem>
            <MenuItem  href="https://drive.google.com/drive/folders/1G2rh1dvqiJMv0FSzgBaNj-l55gmAMudL?usp=sharing" target="blank" >Lecturas Virtuales ESFAP</MenuItem>
        </Menu>
    );
}