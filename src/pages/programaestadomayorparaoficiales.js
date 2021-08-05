import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import '../components/historia.css'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Divider } from 'rsuite';
import FichaTecnica from '../components/FichaTecnica'
import { Collapse } from 'antd';
 
const { Panel } = Collapse;

 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const programaestadomayorparaoficialesTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />



  </main>
)

const programaestadomayorparaoficiales = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PROGRAMA COMANDO Y ESTADO MAYOR OFICIALES DE SERVICIO</h1>
</header>

<img src="https://esfap.edu.pe/images/2017/07/18/pemos01.fw.png" alt="Insignia de alto mando"/> 

<Tabs defaultActiveKey="1" onChange={callback}>
 
    <TabPane tab="Alcance" key="1">
    Está dirigido a los oficiales de servicios del grado de mayor en su segundo año y oficiales rezagados seleccionados por la diged.
    
    </TabPane>
    <TabPane tab=" Objetivos " key="2">
    Especializar y perfeccionar a los oficiales de servicios del grado de mayor o comandante fap para que se desempeñen eficaz y eficientemente en las tareas como oficial de estado mayor especial de nivel grupo aéreo o ala aérea y entidades del mismo nivel del sistema de seguridad y defensa nacional
    <br/>
    En el tema plan de estudios se debe considerar la información que está expuesta en el PAE 2021.
    </TabPane>
    <TabPane tab="Perfil " key="3">
    El discente del Programa Comando y Estado Mayor para Oficiales de Servicios (PEMOS)  egresa con competencias generales y especificas especializado al servicio de la Institución con capacidad y actitudes idóneas para el desempeño profesional.

    </TabPane>
    <TabPane tab="Plan de Estudio" key="4">
        <p>El programa Comando y Estado Mayor para Oficiales de Servicios cuenta con un Plan de Estudios con 464 horas lectivas.</p>
    </TabPane>
    
  </Tabs>
  <Divider />

  <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="FICHA TÉCNICA" key="1">
            <ul>
                <li>Metodología: Profundización </li>
                <li>Modalidad: Virtual</li>
                <li>Créditos Académicos:  64.5</li>
                <li>Duración: (14) meses</li>
            </ul>
            <h1>HORARIO CLASES</h1>
            <ul>
                <li>Lunes a viernes 14:00 – 19:00 horas.</li>
            </ul>
        <p></p>
        </Panel>
    </Collapse>,
 
  </Layout>
)

export default programaestadomayorparaoficiales
