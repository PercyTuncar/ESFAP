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

export default function ProgramasMenu() {
    return (
        <Menu menuButton={<MenuButton className="header_menu">PROGRAMAS ACADÉMICOS <Icon icon='angle-down' size="lg" /></MenuButton>}>
             <SubMenu label="PROGRAMAS PARA PERSONAL DE OFICIALES">
             <SubMenu label="PERFECCIONAMIENTO DOCTRINARIO">
                <MenuItem href="/programaaltomando">PROGRAMA ALTO MANDO</MenuItem>
                <MenuItem  href="/programacomandoyestadomayor">PROGRAMA COMANDO Y ESTADO MAYOR</MenuItem>
                <MenuItem  href="/programaestadomayorparaoficiales">PROGRAMA ESTADO MAYOR PARA OFICIALES DE SERVICIO</MenuItem>
                <MenuItem href="/programatactico">PROGRAMA TÁCTICO </MenuItem>
                <MenuItem href="/programaactualizacion">PROGRAMA ACTUALIZACIÓN </MenuItem>
            </SubMenu>
            <SubMenu label="PERFECCIONAMIENTO ESPECIALIZADO">
                <MenuItem href="/programasfap">PROGRAMAS FAP</MenuItem>
                <MenuItem  href="/ConvenioESFAP">CONVENIOS ESFAP</MenuItem>
            </SubMenu>
                <MenuItem href="/programareclasificacion">PROGRAMA DE RECLASIFICACIÓN</MenuItem>
                <MenuItem  href="/programaadistancia">PERFECCIONAMIENTO A DISTANCIA</MenuItem>
            </SubMenu>
            <MenuItem href="/programapublicogeneral">PROGRAMAS PARA PUBLICO EN GENERAL </MenuItem>
        </Menu>
    );
}