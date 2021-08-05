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



const colorStart = {
    color: '#FFEB3B'
}

const { Panel } = Collapse;

 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const videotutorialTemplate = ({
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

const videotutorial = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">Tutoriales</h1>
</header>

 
<div className="text_center">
    <h1 className0="H1">YouTube</h1>
</div>




<div className="programas_container">
    <div className="contenedorDos"> 
    <div className="DosColumnas">
       <img src="https://esfap.edu.pe/images/2021/04/26/youtube-logo-png-1.png"></img>
    </div>
    <div className="DosColumnas">
    <h1 className="h1">Tutoriales:</h1>
        <ul>
            <a href="https://www.youtube.com/watch?v=0FEk8C78WPc" target="blank"> <li>Visualializar, Cargar y Descargar Lecturas ESFAP.</li></a>
            <a href="https://www.youtube.com/watch?v=qaPqKvihZnQ" target="blank"> <li>Crear Grupos y Reuniones Meet.</li></a>
           
           
        </ul>
    </div>

    </div>
</div>








  <Divider />
 
  </Layout>
)

export default videotutorial
