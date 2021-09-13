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
<div className="container">

<img  width="300px" src="https://esfap.edu.pe/images/2017/03/29/a_insigpcem.png" alt="Insignia de alto mando"/> 

 <div class="container">
    <div class="row texto-gray">
    <h2 id="alcance">ALCANCE</h2>
<p>El programa de Comando y Estado Mayor para oficiales de armas, de nivel de Comando, es selectivo y tiene el propósito de que los Oficiales del grado de Comandante y Mayor logren competencias relativas a funciones de Director/Comando de UU/DD de unidades operativas o de Oficial de Estado Mayor en dependencias<br/>de nivel Grupo Aéreo, Ala Aérea y entidades del mismo nivel del Sistema de Defensa Nacional. Está dirigido a los oficiales superiores de armas, seleccionado por la Dirección General de Educación y Doctrina (DIGED), así como invitados de los grados equivalentes de las FFAA y PNP.</p>
<h2 id="objetivos">OBJETIVOS</h2>
<p>Tiene como objetivo educacional el “Especializar y perfeccionar a los oficiales del grado de Mayor FAP y Comandante FAP, a fin de lograr oficiales que se desempeñen eficaz y eficientemente en las funciones de Comando; así como en las tareas de oficial de Estado Mayor de nivel Grupo Aéreo o Ala Aérea y de entidades del mismo nivel del Sistema de Seguridad y Defensa Nacional”.</p>
<h2 id="perfil">PERFIL</h2>
<p>Competencia Generales:</p>
<p>Capacidad de liderar ética y moralmente en cualquier ámbito, mediante un enfoque sistémico, el trabajo en equipo, la suma de capacidades individuales y la identificación con la Institución, sus valores y objetivos, promoviendo un sentido de pertenencia, respeto por las normas y exaltación de los Valores Esenciales FAP.</p>
<p>Capacidad para establecer los objetivos en el ámbito aeroespacial y conjunto-combinado de acuerdo a las prioridades establecidas, orientar y diseñar la estrategia operacional, gestiona recursos, tiempo y espacio; conducir, supervisar y controlar las acciones propias del nivel operacional, afrontando con flexibilidad dinámicas cambiantes, integrando equipos multidisciplinarios, conjuntos o combinados, mostrando temple y serenidad ante situaciones cambiantes del ambiente operacional.</p>
<h2 id="plan-curricular"><strong>PLAN CURRICULAR</strong></h2>
<p>El Plan Curricular del Programa Comando y Estado Mayor/Maestría en Doctrina y Administración Aeroespacial, ha sido diseñado en base a fundamentos conceptuales y normativos en los que se enmarcan la visión y la misión de la Fuerza Aérea del Perú, mediante el establecimiento de objetivos de corto, mediano y largo plazo, orientados a alcanzar las capacidades fundamentales y operacionales requeridas.</p>
<h2 id="ficha-tecnica">FICHA TECNICA</h2>
<ul>
<li><p>Modalidad: Virtual</p>
</li>
<li><p>Créditos Académicos: 64.5</p>
</li>
<li><p>Duración: (14) meses</p>
</li>
<li><p>Horario Clases: Lunes a viernes 14:00 – 19:00 horas.</p>
</li>
</ul>
 
<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FCOMANDO%20Y%20ESTADO%20MAYOR.pdf?alt=media&token=386025fd-529e-42d9-9dc2-a927d9f7f16c" className="descargable">
<img  width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/pdf.png?alt=media&token=0dac7d0c-7c32-4016-9920-d5f689343acf" alt="descargar pdf"/>
</a> 
    </div>
</div>
</div>
<div className="container">
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

</div> <Divider />


<img className="img_mando" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/PROGRAMA%20ESTADO%20MAYOR_page-0001.png?alt=media&token=5a994592-cf0e-4642-b7aa-ac733ab4dc2b" alt="imagen del comando"/>
<img className="img_mando" src="https://esfap.edu.pe/images/2021/02/16/pcem1-2.png" alt="segunda imagen del comando"/>
  </Layout>
)

export default programacomandoyestadomayor
