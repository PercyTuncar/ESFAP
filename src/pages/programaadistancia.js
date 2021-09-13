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
export const programaadistanciaTemplate = ({
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

const programaadistancia = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PERFECCIONAMIENTO DISTANCIA</h1>
</header>
  <br/>
  <br/>
<div class="container texto-gray">
<h2 id="programas-de-perfeccionamiento-a-distancia">PROGRAMAS DE PERFECCIONAMIENTO A DISTANCIA</h2>
<p>(PPD)</p>
<p>Los Programas de Educación a Distancia están orientados a que el Personal de Oficiales Subalternos logre las competencias específicas relacionadas directamente en el campo aeronáutico y en su especialidad.</p>
<p>Está dirigido a los Oficiales subalternos FAP del grado de Alférez a Capitán. Es requisito, haber aprobado los programas de Educación a Distancia del año anterior en la especialidad que le corresponde. El método de enseñanza que se emplea es a distancia por correspondencia, mediante el estudio de textos auto-educativos asistidos por un docente calificado de la especialidad. El personal docente se encarga de actualizar el material de estudios, formular las mejoras y absolver las observaciones planteadas por los discentes. Los programas virtuales están basados en el entorno virtual de aprendizaje Google Classroom ®, teniendo los mismos estándares de calidad que los de la modalidad presencial.</p>
<p>Dentro de los Programas de Perfeccionamiento a Distancia, se encuentran los siguientes programas:</p>
<h2 id="1-programa-de-perfeccionamiento-a-distancia-1er-año">1. Programa de Perfeccionamiento a Distancia 1er año</h2>
<p>Programa desarrollado netamente bajo la plataforma Google Classroom ®, mismo que consta de seis sub-programas</p>
<p>  <img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2Ftalbla.png?alt=media&token=83c6892a-0c52-49ed-a6a5-8945ed0f946a" alt="enter image description here" /></p>
<h2 id="2-programa-de-perfeccionamiento-a-distancia-2do-y-3er-año">2. Programa de Perfeccionamiento a Distancia 2do y 3er año:</h2>
<p>Este programa está estructurado en dos partes:</p>
<ol>
<li><p>Programa desarrollado por especialidades, determinadas por la JETPO, consta de número determinado de asignaturas distribuidas en los programas de acuerdo al grado y a la especialidad del oficial.</p>
</li>
<li><p>Programa desarrollado a través de un consolidado de Doctrinas, establecida según requerimiento de DIGPE: consta de asignaturas en el área de doctrina, distribuidas de acuerdo al grado y antigüedad del oficial.</p>
</li>
</ol>

</div>
 
  </Layout>
)

export default programaadistancia
