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
export const acreditacionTemplate = ({
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

const acreditacion = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">ACREDITACIÓN</h1>
</header>

 
<div className="text_center">
    <h1 className0="H1">Programa de la Fuerza Aérea del Perú con estándares de calidad</h1>
</div>




<div className="programas_container">
    <div className="contenedorDos"> 
    <div className="DosColumnas">
       <img src="https://esfap.edu.pe/images/2020/06/17/acreditacion-2.jpg"></img>
    </div>
    <div className="DosColumnas">
    <h1 className="title">Maestría en Doctrina y Administración Aeroespacial</h1>
    <p className="p">
    La Maestría en Doctrina y Administración Aeroespacial de la Escuela Superior de Guerra Aérea de la Fuerza Aérea del Perú (ESFAP) obtuvo por segunda vez la acreditación que otorga el Sistema Nacional de Evaluación, Acreditación y Certificación de la Calidad Educativa (Sineace) a quienes cumplen con los más altos estándares en calidad educativa.

Para alcanzar este reconocimiento oficial del Estado peruano, esta maestría transitó por un riguroso proceso que inició en la autoevaluación y que le permitió identificar su fortalezas y oportunidades de mejora, para luego solicitar a una entidad evaluadora externa la verificación del cumplimiento de los 34 estándares de calidad establecidos en el modelo de acreditación.

Entre los principales resultados del proceso, se evidenció que gestiona estratégicamente todas sus actividades, brinda una formación integral, cuenta con el equipamiento y la infraestructura adecuada, y da seguimiento a sus egresados. 

Según la resolución de presidencia del Sineace la vigencia de esta acreditación es por seis (06) años debido a que alcanzaron el logro pleno de todos los estándares.
    </p>

    </div>

    </div>
</div>








  <Divider />
 
  </Layout>
)

export default acreditacion
