import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import '../components/historia.css'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import 'antd/dist/antd.css';
import { Collapse } from 'antd';


const { Panel } = Collapse;

const text01 = `
Objeto: Establecer la misión, funciones especificas, funciones especificas estandar, estrucutura orgánica, tareas, perfiles de puestos, funciones de cada dependencia; así como las relaciones de coordinación de las depedencias de la Escuela Superior de Guerra Aérea (ESFAP)
`;
const text02 = `
Objeto: Establecer el Sistema de Investigacion, desarrollo e innovacion de la ESFAP (SIDIESFAP)
`;
const text03 = `
Objeto: Establecer las disposiciones generales y especificas para la obtención del grado académico de Maestro en Doctrina y Administración Aeroespacial de la Escuela Superior de Guerra Aérea (ESFAP)
`;


function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const NormatividadTemplate = ({
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

const Normatividad = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">NORMATIVIDAD</h1>
</header>
 
<Collapse accordion>
    <Panel header="DIRECTIVA DIGED 20-13 - ORGANIZACIÓN ESFAP" key="1">
      <p>{text01}</p>
    </Panel>
    <Panel header="DIRECTIVA ESFAP 50-11 - SISTEMA I+D+I" key="2">
      <p>{text02}</p>
    </Panel>
    <Panel header="DIRECTIVA ESFAP 50-7 - GRADO DE MAESTRIA PCEM" key="3">
      <p>{text03}</p>
    </Panel>
  </Collapse>,
  </Layout>
  
)

export default Normatividad
