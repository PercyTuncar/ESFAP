import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import '../components/historia.css'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const OrganizacionTemplate = ({
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

const Organizacion = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">ORGANIZACIÓN</h1>
</header>
 <h1 className="h1">ORGANIZACIÓN</h1>
<div className="tabs">
<h2 className="h2">MISIÓN DE LA ESFAP</h2>
<span className="line"></span>
<div className="texto">

Especializar y perfeccionar profesionalmente al 
personal de Oficiales de la Fuerza Aérea del Perú, en 
concordancia con los objetivos institucionales y 
educativos, mediante una cultura de calidad, investigación 
e innovación educativa, a fin de lograr líderes con valores y 
competencias adecuadas, capaces de conducir la Institución en 
todos sus niveles de comando y otros organismos integrantes del 
poder aeroespacial, militar y nacional.

<h2 className="h2"> VISIÓN DE LA ESFAP </h2>
<span className="line"></span>
Ser la Escuela de Posgrado de mayor prestigio en el ámbito Militar y Aeroespacial en el Perú y con presencia internacional.
<img src="https://esfap.edu.pe/images/2020/06/19/logoesfap1.png"/>

</div>


<h2 className="h2">  ORGANIGRAMA</h2>
<span className="line"></span>
<div className="center">
<img src="https://esfap.edu.pe/images/2020/06/19/organigrama.png"/> 
</div>
</div>
 
  </Layout>
)

export default Organizacion
