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
	<h1 class="masthead-heading">PROGRAMAS FAP</h1>
</header>
 <br/>
 <br/>
 <br/>
<div class="container">
    <div class="row texto-gray">
    <h1 id="docente-militar---i---ii">DOCENTE MILITAR - I - II</h1>
<p><strong>32 Horas Académicas</strong></p>
<h2 id="objetivo">OBJETIVO</h2>
<p>Especializar al Oficial FAP en el ejercicio de la profesión docente dentro de un marco de pedagógico integral con conocimientos actualizados y con estrategias metodológicas nuevas que aporten al desarrollo eficaz del proceso de enseñanza aprendizaje dentro del modelo educativo FAP.</p>
<h2 id="perfil-del-egresado">PERFIL DEL EGRESADO</h2>
<h2 id="competencia-general">Competencia General</h2>
<p>Conoce y aplica técnicas para la transmisión de experiencias y conocimientos al personal FAP y otros, en lo referente a la planificación, preparación, organización, conducción y evaluación de la instrucción bajo un enfoque por competencias.</p>
<h2 id="competencias-específicas">Competencias Específicas:</h2>
<p>Elabora y evalúa una propuesta curricular para un programa académico en educación superior, a partir de un perfil de egreso por competencias y del análisis de coherencia del plan de estudios.</p>
<h2 id="plan-de-estudios-de-docente-militar">PLAN DE ESTUDIOS DE DOCENTE MILITAR</h2>
<ol>
<li><p>Modelo Educativo FAP por competencias</p>
</li>
<li><p>Plan Curricular ESFAP</p>
</li>
<li><p>Diseño del Silabo ESFAP</p>
</li>
<li><p>Evaluación curricular</p>
</li>
</ol>
<h2 id="sistemas-espaciales">SISTEMAS ESPACIALES</h2>
<p>240 Horas Académicas</p>
<h2 id="objetivo-1">OBJETIVO</h2>
<p>Especializar al Oficial FAP en aspectos científicos y tecnológicos relacionados a los sistemas espaciales, para que estén en capacidad de participar en la calificación de operación del sistema satelital PerúSat-1 u otros, y poder contribuir con sus competencias profesionales a la misión de la Fuerza Aérea del Perú.</p>
<h2 id="perfil-del-egresado-1">PERFIL DEL EGRESADO</h2>
<p>Competencias Generales:</p>
<p>Conoce las bases teóricas necesarias de un Sistema Satelital en general, enfatizando en aquellos dedicados a la observación de la Tierra y particularmente en el sistema satelital PerúSat-1.</p>
<p>Competencias Específicas:</p>
<p>Interpreta y aplica los principios que de los sistemas espaciales para la operación del sistema satelital PerúSat-1.</p>
<p>Adquiere un estándar de cultura espacial que le permita desarrollarse, liderar los ambientes espaciales y continuar la fase de calificación en alguna de las sub-especialidades del Sistema satelital PerúSat-1</p>
<h2 id="plan-de-estudios-de-sistemas-espaciales">PLAN DE ESTUDIOS DE SISTEMAS ESPACIALES</h2>
<ol>
<li><p>Fundamentos de Misiones Espaciales</p>
</li>
<li><p>Dinámica de Vuelo</p>
</li>
<li><p>Misión de Observación de la Tierra</p>
</li>
<li><p>Disciplinas de Aseguramiento del</p>
</li>
<li><p>Producto</p>
</li>
<li><p>Ingeniería de RAM y FDIR</p>
</li>
<li><p>Integración y Validación</p>
</li>
<li><p>Capacidades del Sistema Satelital</p>
</li>
<li><p>PerúSat-1</p>
</li>
<li><p>Componentes Espaciales</p>
</li>
<li><p>Subsistemas de propulsión</p>
</li>
<li><p>Operaciones de Satélite</p>
</li>
<li><p>Mecánica y Control Térmico</p>
</li>
<li><p>Control de Actitud de la Nave Espacial</p>
</li>
<li><p>Instrumentos Ópticos</p>
</li>
<li><p>Arquitectura Eléctrica y Energía</p>
</li>
<li><p>Procesamiento de datos y Software de abordo</p>
</li>
</ol>
<h2 id="medicina-aeronáutica">MEDICINA AERONÁUTICA</h2>
<p>251 Horas Académicas</p>
<h2 id="objetivo-2">OBJETIVO</h2>
<p>Especializar al Oficial FAP de profesión Medico General, en la medicina aeronáutica que estudia las reacciones y alteraciones en el cuerpo y de los sentidos sensoriales en medios hostiles como el espacio, aviones, naves espaciales o cabinas presurizadas, submarinos, entre otros, es decir, en cualquier medio ajeno la terrestre que pueda afectar nuestros sentidos.</p>
<h2 id="perfil-de-egreso">PERFIL DE EGRESO</h2>
<p>Competencias Generales</p>
<p>Conocer y Analizar los conceptos actualizados relacionados a la Fisiología de Vuelo para que comprendan la importancia de su aplicación en la promoción de la salud del personal de la Institución, según los preceptos de la enseñanza aprendizaje.</p>
<p>Conocer y Analizar los conceptos actualizados relacionados a la aptitud psicofísica para que comprendan la importancia de su aplicación en la promoción de la salud del personal de la Institución, según los preceptos de la enseñanza aprendizaje.</p>
<h2 id="competencias-específicas-1">Competencias Específicas</h2>
<p>Comprender y Evaluar las técnicas y procedimientos en el entrenamiento fisiológico de las tripulaciones aéreas para que comprendan la importancia de su conocimiento y aplicación.</p>
<p>Comprender y Analizar los conceptos actualizados relacionados a la Salud Ocupacional en Aeronáutica para que comprendan la importancia de su aplicación en la promoción de la salud del personal de la Institución, según los preceptos de la enseñanza aprendizaje.</p>
<p>Comprender y Analizar los conceptos actualizados relacionados a la Evacuación Aero médica para que comprendan la importancia de su aplicación en la promoción de la salud del personal de la Institución, según los preceptos de la enseñanza aprendizaje.</p>
<h2 id="plan-de-estudios">PLAN DE ESTUDIOS</h2>
<ol>
<li><p>Conceptos Previos</p>
</li>
<li><p>Fisiología y fisiopatología respiratoria</p>
</li>
<li><p>Fisiología y fisiopatología cardiovascular</p>
</li>
<li><p>Salud mental en aeronáutica</p>
</li>
<li><p>Fisiología y fisiopatología oftalmológica</p>
</li>
<li><p>Fisiología y fisiopatología otorrinolaringológica</p>
</li>
<li><p>Fisiología y fisiopatología neurológica/microquirúrgica</p>
</li>
<li><p>Fisiología y fisiopatología endocrinológica</p>
</li>
<li><p>Fisiología y fisiopatología osteomuscular</p>
</li>
<li><p>Aeronáutica y medicina física y rehabilitación</p>
</li>
<li><p>Fisiología y fisiopatología gastroenterológica</p>
</li>
<li><p>Fisiología y fisiopatología gineco-obstétrica</p>
</li>
<li><p>Fisiología y fisiopatología odontológica</p>
</li>
<li><p>Evaluación Modulo 1</p>
</li>
<li><p>Aptitud psicofísica en la FAP</p>
</li>
<li><p>Examen de selección</p>
</li>
<li><p>Evaluación Modulo 2</p>
</li>
<li><p>Entrenamiento fisiológico de vuelo (TEORÍA)</p>
</li>
<li><p>Entrenamiento fisiológico de vuelo (PRÁCTICA)</p>
</li>
<li><p>Medicina deportiva: acondicionamiento físico</p>
</li>
<li><p>Evaluación Modulo 3 - Teoría y práctica</p>
</li>
<li><p>Seguridad industrial - Historia, aplicación</p>
</li>
<li><p>Medicina ocupacional - Legislación</p>
</li>
<li><p>Evaluación Modulo 4</p>
</li>
<li><p>Sistema de evacuación Aero médica</p>
</li>
<li><p>Atención pre hospitalaria</p>
</li>
<li><p>Evaluación Modulo 5 - Teoría y práctica</p>
</li>
<li><p>Normatividad FAP</p>
</li>
<li><p>Normatividad OACI</p>
</li>
<li><p>Evaluación Modulo 6 - Teoría y práctica</p>
</li>
<li><p>Supervivencia en el mar (ESMAR)</p>
</li>
<li><p>Evaluación Modulo 7 - Teoría y práctica</p>
</li>
<li><p>Aerodinámica básica</p>
</li>
<li><p>Introducción a la PREVAC</p>
</li>
<li><p>Introducción a la INVAC</p>
</li>
<li><p>Conferencia: “Sistema SAR”</p>
</li>
<li><p>Evaluación Modulo 8</p>
</li>
<li><p>Inauguración/Clausura</p>
</li>
</ol>
<h2 id="defensa-aérea">DEFENSA AÉREA</h2>
<p>432 Horas Académicas</p>
<h2 id="objetivo-3">OBJETIVO</h2>
<p>Especializar y perfeccionar profesionalmente al Oficial FAP de la especialidad de Defensa Aérea, recientemente graduado o nivel de entrada en las actividades y operaciones dentro de los aspectos de Vigilancia, Control y Defensa Aeroespacial y Gestión de la Información, que le permitan desempeñarse en los diferentes puestos administrativos y operativos afines a su campo ocupacional.</p>
<h2 id="perfil-del-egresado-2">PERFIL DEL EGRESADO</h2>
<p>Competencia general:</p>
<p>Cumple con todos los requisitos establecidos para desempeñarse como un Oficial de Defensa Aérea, de acuerdo con lo establecido en el escalafón de especialidades y posee los conocimientos necesarios, para aprobar cualquier capacitación operativa, desempeñarse en las áreas de Vigilancia y Control Aeroespacial, y Dominio del Ambiente de la Información, en la especialidad de Defensa Aérea a la que sea nombrado por la superioridad, en concordancia con la teoría específica para cada caso.</p>
<p>Competencias específicas:</p>
<p>Demuestra actitud y capacidad para al aprendizaje continuo y autónomo a lo largo de la vida, no solo en su disciplina, sino en otras áreas de conocimiento para atender las necesidades del contexto local y global de la Defensa Aérea (en los aspectos de Vigilancia y Control del Espacio Aéreo, Dominio del Ambiente de la Información y Defensa Aérea)</p>
<p>Posee capacidades para modelar y analizar fenómenos y procesos físicos.</p>
<h2 id="plan-de-estudios-programa-de-especialización-de-defensa-aérea">PLAN DE ESTUDIOS PROGRAMA DE ESPECIALIZACIÓN DE DEFENSA AÉREA</h2>
<ol>
<li><p>Gestión CNS/ATM</p>
</li>
<li><p>Coordinación Civil Militar</p>
</li>
<li><p>Derecho, Legislación y Normatividad Aeronáutica</p>
</li>
<li><p>Administración del Espacio Aéreo en Operaciones y Acciones militares</p>
</li>
<li><p>Defensa Aérea en el Sistema de Comando y Control FAP (SICOC)</p>
</li>
<li><p>Gestión del Material de D.A.</p>
</li>
<li><p>Gestión de Ciber Seguridad</p>
</li>
<li><p>Gestión de Redes</p>
</li>
<li><p>Gestión de la Información</p>
</li>
<li><p>Trabajo de Eficiencia Profesional (TEP)</p>
</li>
</ol>
<h2 id="ingeniería-sistemas-de-armamento">INGENIERÍA SISTEMAS DE ARMAMENTO</h2>
<p>336 Horas Académicas</p>
<p><strong>OBJETIVO</strong></p>
<p>Especializar al Oficial FAP en los conceptos de las ciencias de la ingeniería y gestión militares que permita concebir y desarrollar soluciones técnicas, económicas y ambientalmente sostenibles y que sean adecuadas a las necesidades de la Fuerza Aérea y del Ministerio de Defensa, en todo lo referente a sistemas de armas y comunicaciones militares.</p>
<h2 id="perfil-del-egresado-3">PERFIL DEL EGRESADO</h2>
<p><strong>Competencia General</strong></p>
<p>Demuestra conocimientos de su especialidad para controlar el abastecimiento, transporte y mantenimiento de armamentos que integran la fuerza terrestre, formando equipos de trabajo y con iniciativa y autonomía.</p>
<p>Demuestra conocimientos de su especialidad para la preparación del personal en el ámbito logístico tecnológico de sistemas de armas, con capacidad de comunicación efectiva, de planificación y organización de acciones formativas y generando el pensamiento analítico sistémico.</p>
<p><strong>Competencia Específica</strong></p>
<p>Demostrar conocimientos para producir piezas de armamento y componentes que requiera la Fuerza Aérea, aplicando su capacidad de trabajo en equipo e iniciativa y autonomía.</p>
<p>Aplicar los conocimientos para gestionar procesos productivos y la preparación, evaluación, ejecución y control de proyectos de armamento que requiera el Ejército, integrando equipos de trabajo multidisciplinarios.</p>
<p>Aplicar los conocimientos para gestionar la garantía y certificación de la calidad del armamento y sus componentes, organizando e integrando experiencias de laboratorio de diversas disciplinas, mediante trabajo en equipos.</p>
<h2 id="plan-de-estudios-de-ingeniería-de-armamento">PLAN DE ESTUDIOS DE INGENIERÍA DE ARMAMENTO</h2>
<ol>
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
<p>ADMINISTRACIÓN DEL SISTEMA DE BÚSQUEDA Y SALVAMENTO AERONÁUTICO (SAR).</p>
<h2 id="objetivo-4">OBJETIVO</h2>
<p>Especializar al Oficial FAP e invitados para que estén en capacidad de coordinar la implementación y óptima operatividad en los diversos procedimientos, responsabilidades y obligaciones del Sistema de Búsqueda y Salvamento Aeronáutico (SAR) en el territorio nacional.</p>
<h2 id="perfil-del-egresado-4">PERFIL DEL EGRESADO</h2>
<p><strong>Competencia General</strong></p>
<p>Planifica y Conduce las operaciones del Sistema SAR en cualquier situación presentada en base a los principios doctrinarios, reglamentos respectivos y las técnicas vigentes.</p>
<p><strong>Competencia Específica</strong></p>
<p>Organiza y Aplica los procedimientos del Manual Internacional de Servicios de Búsqueda y Salvamento Aeronáutico y Marítimo, en el área de su competencia.</p>
<p><strong>FICHA TECNICA</strong></p>
<ul>
<li><p>Metodología Profundizada</p>
</li>
<li><p>Modalidad Virtual</p>
</li>
<li><p>Duración: 02 semanas</p>
</li>
<li><p>Horario de clases: Lunes a jueves 14:00 a 19:00 horas</p>
</li>
</ul>
<p>PREVAC/INVAC/SEGURIDAD</p>
<h2 id="objetivo-5">OBJETIVO</h2>
<p>Especializar al Oficial FAP para que esté en capacidad de cumplir funciones relacionadas a la Prevención de Accidentes, desempeñándose como Asesores de Comando y responsables de los Programas de PREVAC en sus respectivas Unidades y Dependencias (UU/DD), en concordancia con la normatividad establecida, demostrando competencia profesional.</p>
<p><strong>PERFIL DEL EGRESADO:</strong></p>
<p><strong>Competencia General</strong></p>
<p>Lidera el programa de Prevención de Accidentes de su unidad o dependencia, teniendo como base los principios, normas, procedimientos y fundamentos teóricos vigentes.</p>
<p>Optimiza el programa para controlar y reducir las condiciones de riesgo al mínimo, adoptando un sistema de gestión de seguridad que se introduce a través de una cultura de prevención.</p>
<p><strong>Competencias Específicas:</strong></p>
<p>Aplica los conocimientos acerca de los factores humanos en la PREVAC, de acuerdo a su teoría y práctica.</p>
<p>Toma medidas para la seguridad en tierra y de vuelos, estableciendo registros de documentación, en conjunto con normativas internas que eviten la ocurrencia o repetición de accidentes.</p>
<p>Gestiona la seguridad operacional, siguiendo los lineamientos del SMS.</p>
<p>FICHA TECNICA:</p>
<ul>
<li><p>Metodología Profundizada</p>
</li>
<li><p>Modalidad Virtual</p>
</li>
<li><p>Duración: 5 meses</p>
</li>
<li><p>Horario de clases: Lunes a jueves 14:00 a 19:00 horas</p>
</li>
</ul>
<p>FINANZAS II</p>
<p><strong>OBJETIVO:</strong></p>
<p>Especializar al Oficial FAP en el desarrollo de las actividades de administración económico-financiera, así como presupuestal para desempeñar responsabilidades inherentes, propias del grado militar y cargo orgánico asignado durante su carrera profesional, con el fin de prestar apoyo y asesoría en la toma de decisiones, para el cumplimiento de la misión asignada.</p>
<p><strong>PERFIL DEL EGRESADO</strong></p>
<p>Competencia General</p>
<p>Analizar el medio financiero y económico en el que se desenvuelve y proyecta la empresa.</p>
<p>Integrar prácticas y conocimiento financiero de manera innovadora para lograr un buen desempeño en la organización con un enfoque práctico y en un entorno global.</p>
<p>Competencia Específica</p>
<p>Proponer y desarrollar estrategias, anticipando situaciones del entorno de forma que se mitiguen los riesgos y se maximice el valor de la entidad.</p>
<p>Tomar decisiones de inversión, financiación y reparto de utilidades, teniendo en cuenta las implicaciones éticas de éstas y sus impactos en la entidad.</p>
<p><strong>FICHA TECNICA:</strong></p>
<ul>
<li><p>Modalidad Virtual</p>
</li>
<li><p>Duración: 5 meses</p>
</li>
<li><p>Horario de clases: Lunes a jueves 14:00 a 19:00 horas</p>
</li>
</ul>
<h2 id="control-interno">CONTROL INTERNO</h2>
<p>96 Horas Académicas</p>
<p><strong>OBJETIVO</strong></p>
<p>Especializar al Oficial FAP en los conceptos y metodología de un sistema de gestión, basado en la mejora del desempeño y optimización de los procesos de una organización.</p>
<p><strong>PERFIL</strong></p>
<p>Egresado Competencia General Identifica la intensión y finalidad del proceso hacia la cual deben dirigirse los recursos y los esfuerzos para dar cumplimiento a una meta que persigue el proceso dentro del ciclo de gestión al que pertenece.</p>
<p><strong>COMPETENCIA ESPECÍFICA</strong></p>
<p>Coordina e implementa soluciones de mejora que permitan optimizar</p>
<p><strong>ASIGNATURAS</strong></p>
<ol>
<li><p>Conceptos Básicos y Definiciones Previas</p>
</li>
<li><p>Marco Normativo Conceptual</p>
</li>
<li><p>Fundamentos y Evaluación de la Planificación de Inspección de Sistema de Control Interno</p>
</li>
<li><p>Informes de Inspección</p>
</li>
<li><p>La Seguridad de la Información y Evaluación de Riesgos</p>
</li>
<li><p>Proceso de Investigación Preliminar/ Elaboración de Informes</p>
</li>
</ol>
<p><strong>METEOROLOGÍA II</strong></p>
<p>560 HORAS ACADÉMICAS</p>
<p><strong>OBJETIVO</strong></p>
<p>Especializar al Oficial FAP en los conceptos y predicción de los diversos fenómenos que se producen en la atmósfera, para PAE ESFAP - 2021 89 comprender por un lado su funcionamiento, composición, estructura y evolución, y por otro lado para tener importantes predicciones diarias muy útiles para diferentes actividades humanas como la agricultura, la aeronáutica, la navegación, actividades militares, predicción de enfermedades, prevención de incendios etc.</p>
<p><strong>PERFIL</strong></p>
<p>Egresado Competencia General Evaluación e interpretación de procesos atmosféricos para cuantificar y pronosticar el tiempo y clima, a fin de brindar el soporte meteorológico necesario para la ejecución segura de las operaciones y acciones militares.</p>
<p><strong>COMPETENCIA ESPECÍFICA</strong></p>
<p>Comprender el fundamento matemático de los diferentes procesos físicos en la atmósfera.</p>
<p>Analizar y comprender las variables y factores meteorológicos reguladores del tiempo y clima.</p>
<p><strong>ASIGNATURAS</strong></p>
<ol>
<li><p>Programación I</p>
</li>
<li><p>Meteorología Aeronáutica</p>
</li>
<li><p>Teledetección aplicada a la meteorología</p>
</li>
<li><p>Trabajo de investigación final</p>
</li>
<li><p>Aplicación de tecnologías de información geográfica</p>
</li>
<li><p>Meteorología Sinóptica II</p>
</li>
<li><p>Estadística Climatológica</p>
</li>
<li><p>Meteorología Tropical</p>
</li>
<li><p>Introducción a los modelos numéricos de predicción del tiempo y clima</p>
</li>
<li><p>Interpretación y aplicación de productos de modelos numéricos del tiempo</p>
</li>
<li><p>Técnicas de pronóstico de tiempo</p>
</li>
<li><p>Programación I</p>
</li>
</ol>
<p><strong>ABASTECIMIENTO II</strong></p>
<p><strong>OBJETIVO</strong></p>
<p>Especializar al Oficial FAP para ejecutar actividades relacionadas con la administración de los recursos materiales asignados a la Fuerza Aérea del Perú, así como con la formulación de doctrinas, políticas, normas, procedimientos e implementación del sistema de abastecimiento, orientado a brindar el eficaz apoyo a los planes operativos y administrativos de la FAP. Asimismo, aquellas actividades referidas a la planificación y organización de los requerimientos de capacitación del personal especialista.</p>
<p><strong>PERFIL DEL EGRESADO</strong></p>
<p><strong>Competencia General</strong></p>
<p>Planifica y Conduce las operaciones del Sistema SAR en cualquier situación presentada en base a los principios doctrinarios, reglamentos respectivos y las técnicas vigentes.</p>
<p><strong>Competencia Específica</strong></p>
<p>Organiza y Aplica los procedimientos del Manual Internacional de Servicios de Búsqueda y Salvamento Aeronáutico y Marítimo, en el área de su competencia.</p>
<p><strong>FICHA TECNICA</strong></p>
<ul>
<li><p>Modalidad Virtual</p>
</li>
<li><p>Duración: 5 meses</p>
</li>
<li><p>Horario de clases: Lunes a jueves 14:00 a 19:00 horas</p>
</li>
</ul>
<p>INGENIERÍA FOTOGRAMÉTRICA</p>
<p>272 HORAS ACADÉMICAS</p>
<p><strong>PROPÓSITO DEL PROGRAMA:</strong></p>
<p>Este programa propone especializar al Oficial FAP de la especialidad de Ingeniería Fotogramétrica en el desarrollo de técnicas y actualizaciones para el adecuado uso de los diversos sensores aéreos que realizan las actividades de percepción remota, necesarias para el cumplimiento de las operaciones y acciones militares, que sean adecuadas a las necesidades de la FAP, MINDEF y al Plan Estratégico de Desarrollo Nacional – PEDN (Estado).</p>
<p><strong>PERFIL DEL EGRESADO</strong></p>
<p><strong>Competencia General</strong></p>
<p>Demostrar conocimiento y análisis en la ejecución de actividades relacionadas con la gestión de inteligencia, a través de los medios que realizan vigilancia y reconocimiento aéreo.</p>
<p><strong>Competencia Específica</strong></p>
<p>Desarrollar actividades de investigación y desarrollo relacionadas con la geo información que requiera la Fuerza Aérea, a través de un adecuado empleo de los sensores aéreos con que cuenta la FAP.</p>
<p><strong>ASIGNATURAS</strong></p>
<ol>
<li><p>Sensor de barrido digital ADS 80</p>
</li>
<li><p>Sistema STAR SAFIRE HD</p>
</li>
<li><p>Sensor de puntos LIDAR ALS-70</p>
</li>
<li><p>Sensor híper espectral AISA DUAL</p>
</li>
<li><p>Sistema RPA AD-S</p>
</li>
<li><p>Trabajo de investigación final</p>
</li>
</ol>

    </div>
</div>




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
