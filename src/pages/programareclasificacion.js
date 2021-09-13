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
export const programareclasificacionTemplate = ({
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

const programareclasificacion = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PROGRAMA RECLASIFICACIÓN</h1>
</header>
  
<div class="container">
    <div class="row">
        <div class="col-sm-12 texto-gray">
          <br/>
          <br/>
          <br/>
        <h1 id="ingeniería-sistemas-de-armamento">INGENIERÍA SISTEMAS DE ARMAMENTO</h1>
<h2 id="672-horas-académicas">672 HORAS ACADÉMICAS</h2>
<p><strong>OBJETIVO</strong></p>
<p>Especializar al Oficial FAP en los conceptos de las ciencias de la ingeniería y gestión militares que permita concebir y desarrollar soluciones técnicas, económicas y ambientalmente sostenibles y que sean adecuadas a las necesidades de la Fuerza Aérea y del Ministerio de Defensa, en todo lo referente a sistemas de armas y comunicaciones militares.</p>
<h1 id="perfil-del-egresado">PERFIL DEL EGRESADO</h1>
<p><strong>Competencia General</strong></p>
<p>Demuestra conocimientos de su especialidad para controlar el abastecimiento, transporte y mantenimiento de armamentos que integran la fuerza terrestre, formando equipos de trabajo y con iniciativa y autonomía.</p>
<p>Demuestra conocimientos de su especialidad para la preparación del personal en el ámbito logístico tecnológico de sistemas de armas, con capacidad de comunicación efectiva, de planificación y organización de acciones formativas y generando el pensamiento analítico sistémico.</p>
<p><strong>Competencia Específica</strong></p>
<p>Demostrar conocimientos para producir piezas de armamento y componentes que requiera la Fuerza Aérea, aplicando su capacidad de trabajo en equipo e iniciativa y autonomía.</p>
<p>Aplicar los conocimientos para gestionar procesos productivos y la preparación, evaluación, ejecución y control de proyectos de armamento que requiera el Ejército, integrando equipos de trabajo multidisciplinarios.</p>
<p>Aplicar los conocimientos para gestionar la garantía y certificación de la calidad del armamento y sus componentes, organizando e integrando experiencias de laboratorio de diversas disciplinas, mediante trabajo en equipos.</p>
<h2 id="plan-de-estudios-de-ingeniería-de-armamento">PLAN DE ESTUDIOS DE INGENIERÍA DE ARMAMENTO</h2>
<ol>
<li><p>Química General</p>
</li>
<li><p>Química Explosivos</p>
</li>
<li><p>Mecánica de Fluidos</p>
</li>
<li><p>Balística I</p>
</li>
<li><p>Sistema de Armamento I</p>
</li>
<li><p>Sistema de Armamento II</p>
</li>
<li><p>Almacenamiento de Explosivos</p>
</li>
<li><p>Sistemas de Control (LINEAL, NO LINEAL)</p>
</li>
<li><p>Guerra Radio Electrónica</p>
</li>
<li><p>Introducción al Planeamiento Operacional (TARGETING, WEAPONERING)</p>
</li>
<li><p>Homologación de Sistemas de Armas y Elaboración de Tablas Balísticas</p>
</li>
<li><p>Sistemas de Supervivencia del Piloto</p>
</li>
<li><p>Circuitos Electrónicos</p>
</li>
<li><p>Resistencia de Materiales</p>
</li>
<li><p>Circuitos Digitales</p>
</li>
<li><p>Trabajo de Investigación Final</p>
</li>
</ol>
<p><strong>METEOROLOGÍA</strong></p>
<p>640 HORAS ACADÉMICAS</p>
<p><strong>OBJETIVO</strong></p>
<p>Especializar al Oficial FAP en los conceptos y predicción de los diversos fenómenos que se producen en la atmósfera, para comprender por un lado su funcionamiento, composición, estructura y evolución, y por otro lado para tener importantes predicciones diarias muy útiles para diferentes actividades humanas como la agricultura, la aeronáutica, la navegación, actividades militares, predicción de enfermedades, prevención de incendios etc.</p>
<p><strong>PERFIL</strong></p>
<p>Egresado Competencia General Evaluación e interpretación de procesos atmosféricos para cuantificar y pronosticar el tiempo y clima, a fin de brindar el soporte meteorológico necesario para la ejecución segura de las operaciones y acciones militares.</p>
<p><strong>COMPETENCIA ESPECÍFICA</strong></p>
<p>Comprender el fundamento matemático de los diferentes procesos físicos en la atmósfera.</p>
<p>Analizar y comprender las variables y factores meteorológicos reguladores del tiempo y clima.</p>
<h1 id="plan-de-estudios-meteoroligicos">PLAN DE ESTUDIOS METEOROLIGICOS</h1>
<ol>
<li><p>Climatología de los fenómenos meteorológicos</p>
</li>
<li><p>Meteorología sinóptica general</p>
</li>
<li><p>Meteorología Aeronáutica</p>
</li>
<li><p>Normatividad Aeronáutica y Meteorológica</p>
</li>
<li><p>Programación Aplicada a la Meteorología</p>
</li>
<li><p>Procesamiento de Imágenes Meteorológicas</p>
</li>
<li><p>Introducción al Modelamiento Numérico</p>
</li>
<li><p>Aplicación del Modelamiento Numérico al Estudio de los fenómenos Meteorológicos</p>
</li>
</ol>
<p>INGENIERÍA FOTOGRAMÉTRICA</p>
<p>752 HORAS ACADÉMICAS</p>
<p>PROPÓSITO DEL PROGRAMA:</p>
<p>Este programa propone reclasificar al Oficial FAP en la especialidad de Ingeniería Fotogramétrica en los conceptos de las ciencias de ingeniería y gestión militar que permita concebir un adecuado planeamiento, organización, dirección y ejecución en las áreas de operaciones de Inteligencia, Vigilancia y Reconocimiento Aéreo – ISR, actividades de percepción remota, fotogramétricas y cartográficas necesarias para el cumplimiento de las operaciones y acciones militares, que sean adecuados al cumplimiento de los roles estratégicos encomendados a las FFAA.</p>
<p>PERFIL DEL EGRESADO</p>
<p>Competencia General</p>
<p>Demostrar conocimiento y análisis en la ejecución de actividades relacionadas con la cartografía, fotogrametría, geodesia, percepción remota, procesamiento digital de imágenes, de reconocimiento aéreo y fotointerpretación militar.</p>
<p>Competencia Específica</p>
<p>Desarrollar actividades de investigación y desarrollo relacionadas con la aerofotografía; asesoramiento en la implementación de equipos y material necesario para el cumplimiento de la misión, así como demostrar conocimientos para producir geo información que requiera la Fuerza Aérea, aplicando su capacidad de trabajo en equipo, iniciativa y autonomía, mediante la gestión de procesos productivos y la preparación, evaluación, ejecución y control de proyectos relacionados con la geomática y la cartografía aérea que requiera la FAP, integrando equipos de trabajo multidisciplinarios. De esta forma aplicar los conocimientos para gestionar la garantía y certificación de la calidad de la geo información, organizando e integrando experiencias de laboratorio de diversas disciplinas, mediante trabajo en equipo.</p>
<p><strong>Unidad didáctica I</strong></p>
<ol>
<li><p>Fundamentos de percepción remota</p>
</li>
<li><p>Fundamentos de cartografía aeronáutica</p>
</li>
<li><p>Métodos topográficos</p>
</li>
<li><p>Sensores y procesos fotogramétricos</p>
</li>
<li><p>Navegación aérea aplicado al vuelo ISR</p>
</li>
<li><p>Metodología de la investigación</p>
</li>
<li><p>Trabajo de investigación final</p>
</li>
</ol>
<p>Unidad didáctica II</p>
<ol>
<li><p>Tecnología geoespacial</p>
</li>
<li><p>Geodesia</p>
</li>
<li><p>fotografía aérea y fotogrametría</p>
</li>
<li><p>Sistemas de Información Geográfica</p>
</li>
<li><p>Fundamentos ISR</p>
</li>
<li><p>Diseño y producción cartográfica</p>
</li>
<li><p>Análisis e interpretación de imágenes</p>
</li>
</ol>

        </div>
    </div>
</div>
 
  </Layout>
)

export default programareclasificacion
