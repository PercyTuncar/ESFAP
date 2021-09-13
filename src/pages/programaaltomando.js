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

const programaaltomando = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">PROGRAMA ALTO MANDO</h1>
</header>
<div className="container">
<img width="250px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/ALTO%20MANDO.png?alt=media&token=b0c52b03-0286-4afb-a8cf-3c205b35063b" alt="Insignia de alto mando"/>
</div>
<div class="container texto-gray" >
    <div class="row">
    <br/> <br/><br/>
    <h2 id="alcance"><strong>ALCANCE</strong></h2>
<p>El Programa de Alto Mando (PAM), es de nivel Alto Mando, es selectivo y tiene como propósito que el personal de Coroneles o Comandantes FAP logren competencias relativas a cumplir funciones de Director/Comando de UU/DD de nivel Ala Aérea, Oficial del Estado Mayor General de la FAP, del Estado Mayor Conjunto y cargos superiores en el Sistema de Defensa Nacional.</p>
<p>Así como Oficiales de Armas de los grados equivalentes de Comandante o Coronel de otras Instituciones Armadas Nacionales o Extranjeras, seleccionados por el Director General de Educación o invitados por la Superioridad.</p>

<br/><br/><br/><br/>
<h2 id="objetivos"><strong>OBJETIVOS</strong></h2>
<p>Especializar y perfeccionar a los oficiales del grado de Coronel FAP, a fin de lograr oficiales líderes, comprometidos y hábiles para el análisis y toma de decisiones, capaces de trabajar en equipo, orientados al logro de los objetivos estratégicos en el ámbito aeroespacial, conjunto, sectorial y gubernamental con adaptabilidad a las diversas situaciones propias de su nivel de desempeño.</p>

<br/><br/><br/><br/>
<h2 id="perfil"><strong>PERFIL</strong></h2>
<p><strong>Competencia Generales:</strong></p>
<p>Capacidad para el pensamiento estratégico en el ámbito aeroespacial y conjunto-combinado de acuerdo a las prioridades establecidas, orientar y diseñar la estrategia operacional, gestiona recursos, tiempo y espacio; afrontando con flexibilidad dinámicas cambiantes, integrando equipos multidisciplinarios, conjuntos o combinados, mostrando temple y serenidad ante situaciones cambiantes del ambiente operacional y la proposición de soluciones a problemas de seguridad y defensa nacional en el ámbito aeroespacial, conjunto, sectorial y gubernamental, con adaptabilidad e innovación.</p>
<p>Capacidad para el pensamiento estratégico en el ámbito aeroespacial y conjunto-combinado de acuerdo a las prioridades establecidas, orientar y diseñar la estrategia operacional, gestiona recursos, tiempo y espacio; afrontando con flexibilidad dinámicas cambiantes, integrando equipos multidisciplinarios, conjuntos o combinados, mostrando temple y serenidad ante situaciones cambiantes del ambiente operacional y la proposición de soluciones a problemas de seguridad y defensa nacional en el ámbito aeroespacial, conjunto, sectorial y gubernamental, con adaptabilidad e innovación.</p>
<p><strong>Competencias Específicas:</strong></p>
<p>Orienta, influye, organiza, evalúa, y se compromete con el personal a su cargo y las organizaciones, unidades y dependencias propias del nivel estratégico de la seguridad y defensa nacional en el ámbito aeroespacial, conjunto, sectorial y gubernamental.</p>
<p>Optimiza, motiva y mejora el trabajo colectivo según las competencias individuales de su equipo y las capacidades de las organizaciones, unidades y dependencias del nivel estratégico de la seguridad y defensa nacional en el ámbito aeroespacial, conjunto, sectorial y gubernamental.</p>
<p>Se identifica con la Institución, sus valores y objetivos; transmite y promueve sentido de pertenencia, respeto a las normas y los Valores Institucionales FAP.</p>
<p>Establece los objetivos de su área, orienta y diseña la estrategia, gestiona y cuantifica los recursos, tiempo y espacio; conduce, supervisa y controla las acciones propias del nivel estratégico de la seguridad y defensa nacional en el ámbito aeroespacial, conjunto, sectorial y gubernamental, de acuerdo a las prioridades establecidas.</p>
<p>Investigación, analiza y relaciona sistemas, procesos, variables y factores; procesa información estadística relativa a su área y otra relativa a la toma de decisiones en el nivel estratégico de la seguridad y defensa nacional en el ámbito aeroespacial, conjunto, sectorial y gubernamental.</p>
<p>Afronta con flexibilidad dinámicas cambiantes, proponer soluciones innovadoras y adecuadas, e integrar equipos multidisciplinarios y sectoriales; y mostrar buena disposición a situaciones cambiantes del nivel estratégico de la seguridad y defensa nacional en el ámbito aeroespacial, conjunto, sectorial y gubernamental.</p>


<br/><br/><br/><br/>
<h2 id="plan-curricular"><strong>PLAN CURRICULAR</strong></h2>
<p>El Plan Curricular del Programa de Alto Mando ha sido diseñado en base a fundamentos conceptuales y normativos en los que se enmarcan la visión y la misión de la Fuerza Aérea del Perú, mediante el establecimiento de objetivos de corto, mediano y largo plazo, orientados a alcanzar las capacidades fundamentales y operacionales requeridas.</p>

<br/><br/><br/>
<h2 id="ficha-tecnica"><strong>FICHA TECNICA</strong></h2>
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


<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FALTO%20MANDO.pdf?alt=media&token=926687d3-cb4d-4499-bcc9-81fab239e761" className="descargable">
<img  width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/pdf.png?alt=media&token=0dac7d0c-7c32-4016-9920-d5f689343acf" alt="descargar pdf"/>
</a> 


    </div>
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

export default programaaltomando
