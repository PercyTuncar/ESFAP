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

import '../components/ConvenioESFAP.css'

const colorStart = {
    color: '#FFEB3B'
}

const { Panel } = Collapse;

 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const ConvenioESFAPTemplate = ({
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

const ConvenioESFAP = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">Convenio ESFAP</h1>
</header>

 




<div class="container">
    <div class="row">
    <br/>
          <br/>
        <div class="col-sm-3">
        <br/>
        <br/>
        <img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FPERU.jpg?alt=media&token=152e0b3e-5e59-4ed6-9b1e-b9800a423ea3" class="img-fluid" alt="Responsive image"/>
        <br/>
        <br/>
        <img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2FDGAC.png?alt=media&token=0af7ecbb-7589-4dac-9109-6545d30ace1a" class="img-fluid" alt="Responsive image"/>
      
        </div>
        <div class="col-sm-9">
        <br/>
        <br/>
        <div className="programas_container">
       
         
          <h1 className="h1">Formularios</h1>
          <span class="line2 texto-blanco"></span>
              <ul className="h1 texto-blanco">
                  <li><a href="https://forms.gle/9RAcADEFi85jt6Pk6" target="_blank">Formulario de Inscripción</a></li>
                  <li><a href="https://forms.gle/dAzXKcP2iCcaVw8T9" target="_blank">Formulario de Comprobantes Pago</a></li>
              </ul>

            
          </div>
        </div>
    </div>
</div>










  <Divider />
 
  </Layout>
)

export default ConvenioESFAP
