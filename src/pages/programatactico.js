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
export const programatacticoTemplate = ({
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

const programatactico = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PROGRAMA TÁCTICO</h1>
</header>
<div className="container">
<img    width="250px"   src="https://esfap.edu.pe/images/2020/01/29/pt2.png" alt="Insignia de alto mando"/> 

<div class="container">
    <div class="row texto-gray">
    <h2 id="alcance">ALCANCE</h2>
<p>El Programa Táctico (PT), es de nivel ejecutivo y de carácter obligatorio, está dirigido a los oficiales del grado de Teniente FAP en su primer y/o segundo año, excepcionalmente a oficiales del grado de capitán, asimismo y por orden superior se aceptan invitados del mismo grado de las FFAA del país. La selección y propuesta es realizada por la DIGED.</p>
<h2 id="objetivos">OBJETIVOS</h2>
<p>Especializar y perfeccionar a los oficiales del grado de Teniente FAP, a fin de lograr oficiales líderes, comprometidos y hábiles para el análisis y toma de decisiones, capaces de trabajar en equipo, orientados al logro de los objetivos estratégicos en el ámbito aeroespacial, conjunto, sectorial y gubernamental con adaptabilidad a las diversas situaciones propias de su nivel de desempeño.<br/>En el tema plan de estudios se debe considerar la información que está expuesta en el PAE 2021.</p>
<h2 id="perfil">PERFIL</h2>
<p>Competencias Generales</p>
<p>Capacidad de liderar personal a su cargo y dependencias propias del ámbito aeroespacial en el nivel táctico, mediante el trabajo en equipo, la suma de capacidades, y la identificación con la Institución, sus valores y objetivos.<br/>Capacidad para el pensamiento estratégico, el análisis y síntesis, y la proposición de soluciones a problemas tácticos, técnicos y procedimentales propios del nivel táctico, con adaptabilidad e innovación.</p>
<h2 id="competencias-específicas">Competencias Específicas:</h2>
<p>Orienta, influye, organiza, evalúa, y se compromete con el personal a su cargo, y las dependencias propias del nivel táctico.<br/>Optimiza, motiva y mejora el trabajo colectivo según las competencias individuales de su equipo y las capacidades de dependencias del nivel táctico.<br/>Se identifica con la institución, sus valores y objetivos; transmite y promueve sentido de pertenencia, respeto a las normas y vocación de servicio.<br/>Establece los objetivos a su nivel, orienta y diseña la táctica, técnica y procedimientos; cuantifica los recursos, el tiempo y el espacio; conduce y controla las acciones propias del nivel táctico aeroespacial de acuerdo a las prioridades establecidas.<br/>Investiga, analiza y relaciona sistemas, procesos, variables y factores tácticos y técnicos; procesa información estadística relativa para la toma de decisiones en el nivel táctico del ámbito aeroespacial.<br/>Afronta con flexibilidad dinámicas cambiantes, propone soluciones innovadoras y adecuadas, e integra equipos multidisciplinarios; muestra buena disposición a situaciones cambiantes del nivel táctico.</p>
<h2 id="plan-curricular">PLAN CURRICULAR</h2>
<p>El Plan Curricular del Programa Táctico ha sido diseñado en base a fundamentos conceptuales y normativos en los que se enmarcan la visión y la misión de la Fuerza Aérea del Perú, mediante el establecimiento de objetivos de corto, mediano y largo plazo, orientados a alcanzar las capacidades fundamentales y operacionales requeridas.</p>
<h2 id="ficha-tecnica">FICHA TECNICA</h2>
<ul>
<li><p>Modalidad: Virtual</p>
</li>
<li><p>Créditos Académicos: 34</p>
</li>
<li><p>Duración: (06) meses – 02 Cursos al año</p>
</li>
<li><p>Horario Clases: Lunes a viernes 14:00 – 19:00 horas.</p>
</li>
</ul>


<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FTACTICO.pdf?alt=media&token=095ebca3-466a-4d55-bdf8-1810efb226bf" className="descargable">
<img  width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/pdf.png?alt=media&token=0dac7d0c-7c32-4016-9920-d5f689343acf" alt="descargar pdf"/>
</a> 

    </div>
</div>
  <Divider />
</div>
<div className="container">
<Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="FICHA TÉCNICA" key="1">
            <ul>
                <li>Metodología: Profundización </li>
                <li>Modalidad: Virtual</li>
                <li>Créditos Académicos:  34</li>
                <li>Duración: (06) meses - 2 cursos al año</li>
            </ul>
            <h1 className="h1">HORARIO CLASES</h1>
            <ul>
                <li>Lunes a viernes 14:00 – 19:00 horas.</li>
            </ul>
        <p></p>
        </Panel>
    </Collapse>,
 
 <img className="img_mando"   src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/PROGRAMA%20TACTICO_page-0001.png?alt=media&token=44bc6f22-54b4-42a4-bb29-448dfacad7b5" alt="Imagen de programa tactico"/>
  
</div>


 </Layout>
)

export default programatactico
