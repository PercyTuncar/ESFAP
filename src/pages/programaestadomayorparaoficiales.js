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
	<h1 class="masthead-heading">PROGRAMA ESTADO MAYOR PARA OFICIALES DE SERVICIO</h1>
</header>
<div className="container">
<img  width="250px"  src="https://esfap.edu.pe/images/2017/07/18/pemos01.fw.png" alt="Insignia de alto mando"/> 
<div class="container">
    <div class="row texto-gray">
    <h2 id="alcance">ALCANCE</h2>
<p>Está dirigido a los oficiales de servicios del grado de mayor en su segundo año y oficiales rezagados seleccionados por la diged.</p>
<h2 id="objetivos">OBJETIVOS</h2>
<p>Especializar y perfeccionar a los oficiales de servicios del grado de mayor o comandante fap para que se desempeñen eficaz y eficientemente en las tareas como oficial de estado mayor especial de nivel grupo aéreo o ala aérea y entidades del mismo nivel del sistema de seguridad y defensa nacional<br />En el tema plan de estudios se debe considerar la información que está expuesta en el PAE 2021.</p>
<h2 id="perfil">PERFIL</h2>
<p>El discente del Programa Comando y Estado Mayor para Oficiales de Servicios (PEMOS) egresa con competencias generales y especificas especializado al servicio de la Institución con capacidad y actitudes idóneas para el desempeño profesional.</p>
<h2 id="plan-curricular">PLAN CURRICULAR</h2>
<p>El programa Comando y Estado Mayor para Oficiales de Servicios cuenta con un Plan de Estudios con 464 horas lectivas.</p>
<h2 id="ficha-tecnica">FICHA TECNICA</h2>
<ul>
<li><p>Modalidad: Virtual</p>
</li>
<li><p>Créditos Académicos: 64</p>
</li>
<li><p>Duración: (11) meses</p>
</li>
<li><p>Horario Clases: Lunes a viernes 14:00 – 19:00 horas.</p>
</li>
</ul>

<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FESTADOR%20MAYOR%20PARA%20OFICIALES%20DE%20SERVICIO.pdf?alt=media&token=d518b676-3a4d-4665-bdd6-bb240a4c6438" className="descargable">
<img  width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/pdf.png?alt=media&token=0dac7d0c-7c32-4016-9920-d5f689343acf" alt="descargar pdf"/>
</a> 

    </div>
</div>

</div>
<div className="container">
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

</div>

  </Layout>
)

export default programaestadomayorparaoficiales
