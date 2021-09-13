import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import '../components/historia.css'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Divider } from 'rsuite';
import FichaTecnica from '../components/FichaTecnica'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const programapublicogeneralTemplate = ({
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

const programapublicogeneral = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PROGRAMAS PARA PUBLICO EN GENERAL</h1>
</header>
  <br/>
  <br/>
<div class="container texto-gray">
<h1>DGAC CURSOS:</h1>
<p>GESTIÓN DE LA SEGURIDAD OPERACIONAL  (SMS)</p>
<p>Objetivo:</p>
<p>El curso propone un enfoque crítico, basado en políticas de gestión, en donde la posibilidad de dañar a las personas o las propiedades de reduce y/o mantiene al mismo nivel o debajo de un nivel aceptable, mediante un proceso continuo de identificación de peligro y gestión de riesgo.<img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FDGAC.png?alt=media&token=0af7ecbb-7589-4dac-9109-6545d30ace1a" alt="No hay ninguna descripción de la foto disponible." /></p>
<p>Para mejorar los niveles de Seguridad Operacional existentes, a raíz del constante incremento de la industria aeronáutica, es necesario que se tomen medidas adicionales. Una de esas medidas es alentar a los explotadores individuales para que presenten su propio SMS. La implementación de un SMS debería conducir al logro de uno de los objetivos claves de la aviación civil: Incrementar el rendimiento de la Seguridad Operacional.</p>
<ul>
<li>Total, de Horas académicas: 48 horas</li>
</ul>
<p><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2Ftalbla02.png?alt=media&token=b2f1eb65-c5c2-4140-89d1-a6fb1e7b93a5" alt="enter image description here"/></p>
<p>GESTION DE RIESGO (SRM)</p>
<p>Objetivo:</p>
<p>La presente asignatura es de naturaleza teórica práctica; el propósito de esta asignatura es que el alumno conozca los fundamentos y aplique las herramientas y técnicas de la Gestión de Riesgos en el análisis de riesgos, luego de haberse identificado un peligro o amenaza de seguridad operacional.</p>
<ul>
<li>Total de horas académicas: 48 horas</li>
</ul>
<p><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2Ftalbla03.png?alt=media&token=beb075c2-4d5a-47a7-956a-c44020cb8bd8" alt="enter image description here"/></p>
<p>MERCANCIAS PELIGROSAS</p>
<p>Objetivo:</p>
<p>El curso Mercancías Peligrosas pertenece al Programa de Perfeccionamiento del PAE-ESFAP es de naturaleza teórica-práctica y tiene el propósito de capacitar a los Oficiales y al Personal Aeronáutico sobre los reglamentos, las nuevas exigencias jurídicas, las restricciones operacionales y las instrucciones de acondicionamiento, marcado y etiquetado. Este programa está basado en la Reglamentación IATA de Mercancías Peligrosas.</p>
<ul>
<li>Total de horas académicas. 48 horas
    
<br/><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2Ftalbla04.png?alt=media&token=f4ae588e-7bb9-48ae-9fab-0da809cce07c" alt="enter image description here"/></li>
</ul>


</div>
 
  </Layout>
)

export default programapublicogeneral
