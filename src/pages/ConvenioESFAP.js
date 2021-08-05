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

 





<div className="programas_container">
 <h1 className="h1">Formularios</h1>
 <span class="line2"></span>
    <ul className="h1">
        <li><a href="https://forms.gle/9RAcADEFi85jt6Pk6" target="_blank">Formulario de Inscripción</a></li>
        <li><a href="https://forms.gle/dAzXKcP2iCcaVw8T9" target="_blank">Formulario de Comprobantes Pago</a></li>
    </ul>

    <h1 className="h1">CONVENIO ESFAP-DGAC</h1>
    <span class="line2"></span>
    <ul className="h1">
        <li>
            <a href="https://esfap.edu.pe/images/2021/CONVENIO_DGAC_-_ESFAP_N_001_16-NOV-2020_1_compressed.pdf" target="_blank">Documento Convenio DGAC</a>
        </li>
    </ul>
    <ul className="h1">
        <li><a href="https://esfap.edu.pe/index.php/component/sppagebuilder/97-srm.html" target="_blank">Gestión de Riesgos (SRM)</a></li>
        <li><a href="https://esfap.edu.pe/index.php/component/sppagebuilder/96-sms.html" target="_blank">Gestión de la Seguridad Operacional (SMS)</a></li>
        <li><a href="#" target="_blank">Administración de Recursos de Cabina (CRM)</a></li>
        <li><a href="https://esfap.edu.pe/index.php/component/sppagebuilder/99-mp-mercancias-peligrosas.html" target="_blank">Mercancías Peligrosas</a></li>
        <li><a href="#" target="_blank">Auditoria en Gestión de Riesgo</a></li>
    </ul>
</div>








  <Divider />
 
  </Layout>
)

export default ConvenioESFAP
