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
export const programaaltomandoTemplate = ({
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

const programaactualizacion = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PROGRAMA ACTUALIZACIÓN </h1>
</header>
<div className="container">
  <br/>
<img width="250px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/ESCUDO.jpeg?alt=media&token=52658c2a-2cc0-4cef-bab9-b40520507166" alt="Insignia programa actualizacion"/>
  <br/>
  <br/>
</div>
<div className="container">
<h1 id="programa-de-actualización-del-programa-de-comando-y-estado-mayormaestría-en-doctrina-y-administración-aeroespacial">PROGRAMA DE ACTUALIZACIÓN DEL PROGRAMA DE COMANDO Y ESTADO MAYOR/MAESTRÍA EN DOCTRINA Y ADMINISTRACIÓN AEROESPACIAL</h1>
<p><strong>480 horas Académicas</strong></p>
<h2 id="objetivos">OBJETIVOS</h2>
<ol>
<li><p>Perfeccionar al personal militar FAP en la Doctrina Militar capaces de elaborar teorías y técnicas de guerra y solución de problemas que garanticen la seguridad y desarrollo de la nación</p>
</li>
<li><p>Desarrollar en los estudiantes, capacidades de ejercer el mando y asesoramiento en la conducción operativa y administrativa de los Estados Mayores para la Seguridad, Defensa y Desarrollo Nacional.</p>
</li>
<li><p>Analizar y aplicar la Doctrina militar, planificar el empleo operacional del poder en el dominio militar, para tomar decisiones y poder desarrollar proyectos de investigación de carácter científico.</p>
</li>
<li><p>Participar activamente en la búsqueda de la Calidad Educativa a través de la investigación científica y doctrinaria</p>
</li>
<li><p>Investigar nuevas técnicas y metodologías de innovaciones en los sistemas y procesos de la educación FAP con la finalidad de optimizar la capacidad doctrinaria militar</p>
</li>
<li><p>Lograr niveles académicos superiores y competitivos a nivel de post grados dentro del ámbito aeroespacial.</p>
</li>
<li><p>Participar activamente en la búsqueda epistemológica de la excelencia doctrinaria militar FAP</p>
</li>
</ol>
<h2 id="perfil-académico-de-la-maestría">PERFIL ACADÉMICO DE LA MAESTRÍA</h2>
<ul>
<li><p>Genéricamente, los perfiles de los alumnos, tienen las siguientes características:</p>
</li>
<li><p>Los egresados de la Maestría en la ESFAP están capacitados para desempeñarse en forma óptima en sus funciones de Comandos con altos niveles de Doctrina Militar FAP aplicando los conocimientos a los criterios de Planeamiento en Operaciones, Administración e Investigación.</p>
</li>
<li><p>Estos Perfiles deben desarrollarse en torno a los cuatro Ejes del Conocimiento siguiente:</p>
</li>
</ul>
<ol>
<li><p>Eje Doctrina General y Aplicada.</p>
</li>
<li><p>Eje Doctrina en Planificación Operativa.</p>
</li>
<li><p>Eje Doctrina en Administración Operativa.</p>
</li>
</ol>
<ul>
<li><p>Eje Doctrina en Investigación Científica en el Campo Militar.</p>
</li>
<li><p>Perfil Específico de los Egresaos: Doctrina, Planificación Operativa, Administración Operativa e Investigación.</p>
</li>
<li><p>Los Oficiales alumnos al culminar la Maestría están capacitados para:</p>
</li>
<li><p>Ejercer el mando y asesorar en la conducción operativa y administrativa de los Estados Mayores para la Seguridad, Defensa y Desarrollo Nacional.</p>
</li>
<li><p>Analizar y aplicar los principios de la Doctrina Militar en el ámbito aeroespacial y los procedimientos de Estado Mayor en lo referente al cumplimiento con el Desarrollo y la Defensa Nacional.</p>
</li>
<li><p>Planificar el empleo operacional del poder en el dominio militar como integrante del Estado Mayor, en concordancia con la normatividad Institucional y nacional.</p>
</li>
<li><p>Efectuar el análisis y toma de decisiones en la administración de recursos humanos, materiales y financieros.</p>
</li>
<li><p>Promover en el personal subordinado su crecimiento como persona y profesional en los momentos de la toma de decisiones, garantizando la calidad de los diversos procesos destinados al cumplimiento de las funciones y responsabilidades asignadas.</p>
</li>
<li><p>Desarrollar Proyectos de investigación de carácter científico para resolver problemas inherentes a las especialidades y a la Institución.</p>
</li>
</ul>

<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FACTUALIZACION.pdf?alt=media&token=3f9a5345-2348-411b-977e-ea846bf6c854" className="descargable">
<img  width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/pdf.png?alt=media&token=0dac7d0c-7c32-4016-9920-d5f689343acf" alt="descargar pdf"/>
</a> 
</div> 
  <Divider />
  <div className="container">
  <FichaTecnica/>
  </div>

  <div className="container">

  <img className="img_mando" src="https://esfap.edu.pe/images/2021/02/16/pam1.png" alt="imagen del comando"/>
  <img className="img_mando" src="https://esfap.edu.pe/images/2021/02/16/pam2.png" alt="segunda imagen del comando"/>
</div>

  </Layout>
)

export default programaactualizacion
