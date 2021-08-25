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
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

const colorGray = {
  color: 'gray'
}
const styleImg = {
  margin: '10px auto 50px',
 }
const color = {
  backgroundColor: 'rgba(251, 251, 251, 0.15)'
}


const { Panel } = Collapse;

const text01 = `
Ver PDF
` ;
const text02 = `
Objeto: Establecer el Sistema de Investigacion, desarrollo e innovacion de la ESFAP (SIDIESFAP)
`;
const text03 = `
Objeto: Establecer las disposiciones generales y especificas para la obtención del grado académico de Maestro en Doctrina y Administración Aeroespacial de la Escuela Superior de Guerra Aérea (ESFAP)
`;


function callback(key) {
  console.log(key);
}


// Export Template for use in CMS preview Historia.css
export const NormatividadTemplate = ({
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

const Normatividad = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">NORMATIVIDAD</h1>
</header>

          <br/>
          <br/>
<div class="container">
    <div class="row">
        <div class="col-sm-9">
          <div style={styleImg} >
             <h2>DIRECTIVA DIGED 20-13 - ORGANIZACIÓN ESFAP</h2>
             <a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/PDF%2Fdir_diged_20-13.pdf?alt=media&token=45ad5fe3-f58f-4cfb-a0e3-d0e13b5dce3e" >
             <img width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Logo%2F833px-PDF_file_icon.svg.png?alt=media&token=b153386b-77fd-4f44-a177-5546dc0745b0" alt="logo PDF"/>
               </a>
          </div>

          <div  style={styleImg} >
             <h2>DIRECTIVA ESFAP 50-11 - SISTEMA I+D+I</h2>
             <a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/PDF%2Fdir.-esfap-50-11-sistema-idi.pdf?alt=media&token=8a9ecbcd-db60-4a94-b54b-87c654a414f7" >
             <img width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Logo%2F833px-PDF_file_icon.svg.png?alt=media&token=b153386b-77fd-4f44-a177-5546dc0745b0" alt="logo PDF"/>
               </a>
          </div>

          <div  style={styleImg} >
             <h2>DIRECTIVA ESFAP 50-7 - GRADO DE MAESTRIA PCEM</h2>
             <a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/PDF%2Fdir-esfap-50-7-grado-de-maestria-pcem-2019.pdf?alt=media&token=6446e867-8fb4-49f8-a63a-54eb1a04b5a6" >
             <img width="100px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Logo%2F833px-PDF_file_icon.svg.png?alt=media&token=b153386b-77fd-4f44-a177-5546dc0745b0" alt="logo PDF"/>
              </a>
          </div>


          <div  style={styleImg} >
             <h2>MAPA DE PROCESOS</h2>
          </div>
        </div>
    </div>
</div>


 

  </Layout>
  
)

export default Normatividad
