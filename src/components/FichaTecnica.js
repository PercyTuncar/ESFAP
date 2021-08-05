import React from 'react'
import '../components/historia.css'
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
 
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}


const FichaTecnica = () => (
  <>
    <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="FICHA TÉCNICA" key="1">
            <ul>
                <li>Metodología</li>
                <li>Modalidad: Virtual</li>
                <li>Créditos Académicos: 64</li>
                <li>Duración: (11) meses</li>
            </ul>
            <h1>HORARIO CLASES</h1>
            <ul>
                <li>Lunes a viernes 14:00 – 19:00 horas.</li>
            </ul>
        <p></p>
        </Panel>
    </Collapse>,
  </>
)

export default FichaTecnica
