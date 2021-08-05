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
export const revistaTemplate = ({
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

const revista = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">REVISTA CIENTIFICA
</h1>
</header>

 





<div className="programas_container">
    <br></br>
    <br></br>
    <div className="contenedorDos"> 
    <div className="DosColumnas">
     
       <h1 className="title">AD MAJOREM PATRIAE GLORIAM</h1>
    <p className="p">
    "La revista Ad Majorem Patriae Gloriam de la Escuela Superior de Guerra Aérea de la FAP, es una publicación con fines académicos, busca fomentar la investigación, el pensamiento reflexivo y el dialogo alturado” “Todas los articulos y opiniones vertidas en la presente publicación son responsabilidad exclusiva de los autores”
</p>

    </div>
    <div className="DosColumnas revista">
        <a href="https://esfap.edu.pe/media/attachments/2021/02/05/revista-esfap-20201.pdf"><img  src="https://esfap.edu.pe/images/2021/01/23/revista-esfap-2020.png"></img></a>
        <a href="https://esfap.edu.pe/images/revista/revista_esfap_2019.pdf">  <img  src="https://esfap.edu.pe/images/2021/01/23/revista-esfap-2020.png"></img></a>
        <a href="https://esfap.edu.pe/images/revista/revista_esfap_2018.pdf"><img  src="https://esfap.edu.pe/images/2021/01/23/revista-esfap-2020.png"></img></a>
    
  
    
    </div>

    </div>
</div>








  <Divider />
 
  </Layout>
)

export default revista
