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
        <Menu menuButton={<MenuButton className="header_menu">Programas <Icon icon='angle-down' size="lg" /></MenuButton>}>
             <SubMenu label="Perfeccionamiento Doctrinarios">
                <MenuItem>Programa Alto Mando</MenuItem>
                <MenuItem>Programa Comando y Estado Mayor</MenuItem>
                <MenuItem>PPrograma Estado Mayor para Oficiales de Servicio</MenuItem>
                <MenuItem>Programa Táctico </MenuItem>
            </SubMenu>
            <SubMenu label="Perfeccionamiento Especializado">
                <MenuItem>Programas FAP</MenuItem>
                <MenuItem>Convenio ESFAP</MenuItem>
            </SubMenu>
            <MenuItem>Perfeccionamiento de Reclasificación</MenuItem>
            <MenuItem>Perfeccionamiento a Distancia</MenuItem>
        </Menu>
    );
}