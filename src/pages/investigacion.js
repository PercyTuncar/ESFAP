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
export const investigacionTemplate = ({
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

const investigacion = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">INVESTIGACION</h1>
</header>
  <br/>
  <br/>
<div class="container texto-gray">
<h2 id="presentación">PRESENTACIÓN</h2>
<p>El Departamento de Investigación de la Escuela Superior de Guerra Aérea (ESFAP) – Escuela de Postgrado de la FAP, es uno de los órganos de línea cuya tarea principal es administrar el sistema de investigación de la ESFAP con la finalidad de fortalecer las capacidades de investigación en los ámbitos del aire, espacio y ciberespacio vinculados con el desarrollo, seguridad y defensa nacional</p>
<p>La innovación científica y tecnológica en el ámbito aeroespacial es fundamental, por ese motivo alentamos las investigaciones de tipo básica o aplicada.</p>
<p>La visión y misión institucional están alineadas con las actividades de investigación desarrolladas en nuestra Maestría en Doctrina y Desarrollo Aeroespacial, el cual reúne asignaturas que generan conocimiento para la comprensión y transformación de la realidad.</p>
<p>A través de la maestría convertimos al Oficial en un investigador de los ámbitos del aire, espacio y ciberespacio, desarrollando sus capacidades de pensamiento crítico lo que le permite entender un escenario determinado de manera global, así como del pensamiento creativo lo que luego de entender y analizar el escenario propone propuestas o soluciones practicables y sustentadas en teoría o lecciones aprendidas para impulsar el liderazgo aeroespacial.</p>
<p>El personal integrante del Departamento que lidera está dispuesto a absolver sus consultas de tipo procedimental, metodológico o temático. Los esperamos.</p>
<div class="container">
    <div class="row">
        <div class="col-sm-offset-8 col-sm-4">
            <br/>
            <br/>
        <p>Jesús E. Sáez, Comandante FAP</p>
        <p>Jefe del Departamento de Investigación</p>
        <p>Escuela Superior de Guerra Aérea – Escuela de Postgrado</p>
        </div>
    </div>
</div>

<h2 id="asesores-de-tesis">ASESORES DE TESIS</h2>
<ul>
<li><p>Doctor GINO PAOLO RENGIFO BARTRA</p>
</li>
<li><p>Doctor MANUEL VICTOR PALACIOS PALACIOS</p>
</li>
<li><p>Doctora ANTONIA BARDALES FLORES</p>
</li>
<li><p>Maestro GUSTAVO CHRISTIAN TORRES ONETO</p>
</li>
<li><p>Maestro FREDDY FERNANDO ZAVALA CELI</p>
</li>
<li><p>Maestro ROBERTO ANTONIO MELGAR SHEEN</p>
</li>
<li><p>Maestro CARLOS ALBERTO BALLETTA NASTASI</p>
</li>
<li><p>Maestro PEDRO LUIS ABAD CACERES</p>
</li>
<li><p>Maestro CHRISTIAN EDUARDO CAMPOS FLORES</p>
</li>
<li><p>Maestro CARLOS ALFONSO VERA TELLO</p>
</li>
<li><p>Maestro MARCO ANTONIO FELIPPE MORI</p>
</li>
<li><p>Maestro JESUS EDUARDO SAEZ MENDOZA</p>
</li>
<li><p>Maestro NADIA YANIRA MAYCOCK PEREZ</p>
</li>
<li><p>Maestro MANUEL AUGUSTO DIEZ ALARCON</p>
</li>
<li><p>Maestro CRISTIAN EVERETT ALARCO</p>
</li>
<li><p>Maestro SANDRO PEDRO VILLANES ROJAS</p>
</li>
<li><p>Maestro EDWARD JONN PINO HURTADO</p>
</li>
<li><p>Maestra VERONICA GARAGORRI CHECA</p>
</li>
<li><p>Maestra MARÍA CAROLINA ORUÉ DUEÑAS</p>
</li>
<li><p>Maestro ROBERTO ALFIERI CERNA BARCO</p>
</li>
<li><p>Maestra NILDA CARMEN PIZARRO TAPIA</p>
</li>
</ul>
<p><strong>ACTIVIDADES</strong></p>
<ul>
<li><p>Webinar: “Las Líneas de Investigación de la ESFAP”</p>
</li>
<li><p><a href="https://drive.google.com/drive/folders/1XoFuW87GAsfxHRR0YraT9pY2OVrH7FPu?usp=sharing">https://drive.google.com/drive/folders/1XoFuW87GAsfxHRR0YraT9pY2OVrH7FPu?usp=sharing</a></p>
</li>
<li><p>Ciclo de Conferencias: Retos para la Seguridad y Defensa y la Contribución del Poder Aeroespacial”</p>
</li>
</ul>
<ol>
<li>Colombia Abril 14</li>
</ol>
<p><a href="https://drive.google.com/drive/folders/1ZcGxW3utFeOGtK_tNVlUoly1L0IzH8JE?usp=sharing">https://drive.google.com/drive/folders/1ZcGxW3utFeOGtK_tNVlUoly1L0IzH8JE?usp=sharing</a></p>
<ol start="2">
<li>Brasil – Abril 30</li>
</ol>
<p><a href="https://drive.google.com/drive/folders/12PkkLc77a4yTU6gxz7q59M3wctPetmjJ?usp=sharing">https://drive.google.com/drive/folders/12PkkLc77a4yTU6gxz7q59M3wctPetmjJ?usp=sharing</a></p>
<ol start="3">
<li>Argentina – Mayo 07</li>
</ol>
<p><a href="https://drive.google.com/drive/folders/1l0CfidZPRx3WE3VVAm_zKL3I_cQs_GI1?usp=sharing">https://drive.google.com/drive/folders/1l0CfidZPRx3WE3VVAm_zKL3I_cQs_GI1?usp=sharing</a></p>
<ol start="4">
<li>Colombia – Mayo 21</li>
</ol>
<p><a href="https://drive.google.com/drive/folders/18uXsXzkz62denZHWqtj8Q1ITHHre_b2p?usp=sharing">https://drive.google.com/drive/folders/18uXsXzkz62denZHWqtj8Q1ITHHre_b2p?usp=sharing</a></p>
<ol start="5">
<li>Alemania – Junio 11</li>
</ol>
<p><a href="https://drive.google.com/drive/folders/1mOzwK5xnLBcQ21secK5pBTrqDigkqPGU?usp=sharing">https://drive.google.com/drive/folders/1mOzwK5xnLBcQ21secK5pBTrqDigkqPGU?usp=sharing</a></p>
<ol start="6">
<li>España – Junio 25</li>
</ol>
<p><a href="https://drive.google.com/drive/folders/19ejUxzIA5vkA74M8aUL6Iq4d7Fv1spi?usp=sharing">https://drive.google.com/drive/folders/19ejUxzIA5vkA74M8aUL6Iq4d7Fv1spi?usp=sharing</a></p>
<p><strong>PUBLICACIONES</strong></p>
<p>Revistas, 4.</p>
<p>NORMAS DE INVESTIGACIÓN</p>
<ul>
<li><p><a href="https://drive.google.com/drive/folders/13NFSTpVFHxzdLUMHwLDAjreCjuul560k?usp=sharing">https://drive.google.com/drive/folders/13NFSTpVFHxzdLUMHwLDAjreCjuul560k?usp=sharing</a></p>
</li>
<li><p><a href="https://sway.office.com/yqoBZa8lNCLbwSCj?ref=Link&amp;loc=mysways">https://sway.office.com/yqoBZa8lNCLbwSCj?ref=Link&amp;loc=mysways</a></p>
</li>
<li><p><a href="https://sway.office.com/9isYROVzOd1OKHzB?ref=Link&amp;loc=mysways">https://sway.office.com/9isYROVzOd1OKHzB?ref=Link&amp;loc=mysways</a></p>
</li>
<li><p><a href="https://sway.office.com/Dp9fVcYIAvM6vvxO?ref=Link&amp;loc=mysways">https://sway.office.com/Dp9fVcYIAvM6vvxO?ref=Link&amp;loc=mysways</a></p>
</li>
</ul>


</div>
 
  </Layout>
)

export default investigacion
