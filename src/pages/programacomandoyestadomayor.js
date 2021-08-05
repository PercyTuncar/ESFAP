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
export const programacomandoyestadomayorTemplate = ({
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

const programacomandoyestadomayor = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PROGRAMA COMANDO Y ESTADO MAYOR</h1>
</header>

<img src="https://esfap.edu.pe/images/2017/03/29/a_insigpam.png" alt="Insignia de alto mando"/> 

<Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Inscripción Actualización" key="1">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFF50ccbJvTbvFYzFJqMu8po8HOyZxilnuXbMg1Qn-ztE0_w/viewform">FICHA DE INSCRIPCIÓN ACTUALIZACIÓN</a>
<br/>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScHcYXvGLV9EKAogoKAicXs4IW7Rm4gme6JgsB58So5KaiD5Q/viewform">FORMULARIO DE COMPROBANTE DE PAGO</a>
        <p>(ingresar con su correo ESFAP)</p>
    </TabPane>
    <TabPane tab="Alcance" key="2">
    El programa de Comando y Estado Mayor para oficiales de armas, de nivel de Comando, es selectivo y tiene el propósito de que los Oficiales del grado de Comandante y Mayor logren competencias relativas a funciones de Director/Comando de UU/DD de unidades operativas o de Oficial de Estado Mayor en dependencias
    <br/>
    de nivel Grupo Aéreo, Ala Aérea y entidades del mismo nivel del Sistema de Defensa Nacional. Está dirigido a los oficiales superiores de armas, seleccionado por la Dirección General de Educación y Doctrina (DIGED), así como invitados de los grados equivalentes de las FFAA y PNP.
    </TabPane>
    <TabPane tab=" Objetivos " key="3">
    Tiene como objetivo educacional el “Especializar y perfeccionar a los oficiales del grado de Mayor FAP y Comandante FAP, a fin de lograr oficiales que se desempeñen eficaz y eficientemente en las funciones de Comando; así como en las tareas de oficial de Estado Mayor de nivel Grupo Aéreo o Ala Aérea y de entidades del mismo nivel del Sistema de Seguridad y Defensa Nacional”.
    </TabPane>
    <TabPane tab="Perfil " key="4">
    Competencia Generales:
    <br/>
<ul>
    <li>
    Capacidad de liderar ética y moralmente en cualquier ámbito, mediante un enfoque sistémico, el trabajo en equipo, la suma de capacidades individuales y la identificación con la Institución, sus valores y objetivos, promoviendo un sentido de pertenencia, respeto por las normas y exaltación de los Valores Esenciales FAP.
    </li>
    <li>
    Capacidad para establecer los objetivos en el ámbito aeroespacial y conjunto-combinado de acuerdo a las prioridades establecidas, orientar y diseñar la estrategia operacional, gestiona recursos, tiempo y espacio; conducir, supervisar y controlar las acciones propias del nivel operacional, afrontando con flexibilidad dinámicas cambiantes, integrando equipos multidisciplinarios, conjuntos o combinados, mostrando temple y serenidad ante situaciones cambiantes del ambiente operacional.
    </li>
  
</ul>

    </TabPane>
    <TabPane tab="Plan Curricular" key="5">
        <p>El Plan Curricular del Programa Comando y Estado Mayor/Maestría en Doctrina y Administración Aeroespacial, ha sido diseñado en base a fundamentos conceptuales y normativos en los que se enmarcan la visión y la misión de la Fuerza Aérea del Perú, mediante el establecimiento de objetivos de corto, mediano y largo plazo, orientados a alcanzar las capacidades fundamentales y operacionales requeridas.</p>
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

<img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/PROGRAMA%20ESTADO%20MAYOR_page-0001.png?alt=media&token=5a994592-cf0e-4642-b7aa-ac733ab4dc2b" alt="imagen del comando"/>
<img src="https://esfap.edu.pe/images/2021/02/16/pcem1-2.png" alt="segunda imagen del comando"/>
  </Layout>
)

export default programacomandoyestadomayor
