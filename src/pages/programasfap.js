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
import { Button } from 'rsuite';

import '../components/programasfap.css'

const colorStart = {
    color: '#FFEB3B'
}

const { Panel } = Collapse;

 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const programasfapTemplate = ({
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

const programasfap = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PERFECCIONAMIENTO ESPECIALIZADO</h1>
</header>

<img src="https://esfap.edu.pe/images/2017/07/18/pemos01.fw.png" alt="Insignia de alto mando"/> 







<div className="programas_container">
    

<div class="card-grid">
  <div class="card-wrap">
    <div class="card">
      <img src="https://edteam-media.s3.amazonaws.com/courses/medium/c574aade-f5b4-42ae-9d92-6b05e7919f4d.png" class="card-img"/>
      <div>
        <h5>Administración del sistema de búsqueda y salvamento aeronáutico (sar)</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Didactica en la educación superior</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Diplomado en investigación de accidentes (invac)</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Diplomado en prevención de accidentes (prevac)</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Diplomado en medicina aeronáutica</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Diplomado en psicología aeronáutica</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Doctrina otan</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Instructor de vuelo 17-01 al 21-0</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Metodología de la investigación</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Gestión del talento humano</h5>
      </div>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card">
      <img src="http://placehold.it/500x500" class="card-img"/>
      <div>
        <h5>Planeamiento estratégico</h5>
      </div>
    </div>
  </div>
</div>


</div>








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

export default programasfap
